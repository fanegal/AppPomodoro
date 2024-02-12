import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles'; 
import { Vibration } from 'react-native';
import { Audio } from 'expo-av';

interface EjecucionPresenterProps {
  minutos: number;
  segundos: number; 
  pausado: boolean;
  estado: string;
}

const EjecucionPresenter: React.FC<EjecucionPresenterProps> = ({
 
  minutos: M,
  segundos:S,
  pausado,
  estado: E
}) => { 

  const navigation = useNavigation();
  const [ciclo, setCiclo] = useState(1);
  const [minutos, setMinutos] = useState(M);
  const [segundos, setSegundos] = useState(S);  
  const [estado, setEstado] = useState(E);
  const [ciclosCompletados, setCiclosCompletados] = useState(0);

  // Función para reproducir sonido y vibración
  const reproducirSonidoYVibrar = async (nuevoEstado) => {
    try {
     // Vibrar
     Vibration.vibrate([500, 500, 500]); // Patrón de vibración (por ejemplo, vibra 0.5 segundos, luego pausa 0.5 segundos, y repite)
    // Reproducir sonido (ajusta la ruta del archivo de sonido según tu estructura)
    const sound = new Audio.Sound();
    let archivoSonido;

   if (nuevoEstado === "Trabajando") {
      archivoSonido = require('../../../assets/Atrabajar.mp3');
    } else if (nuevoEstado === "Descansando") {
      archivoSonido = require('../../../assets/Adescansar.mp3');
    }

    await sound.loadAsync(archivoSonido);
    await sound.playAsync();
    } catch (error) {
      console.error('Error al reproducir el sonido:', error);
    }
   
  };

  

  useEffect(() => {
    const temporizador = setInterval(() => {
      if (!pausado) {
        if (segundos === 0) {
          if (minutos === 0) {
            if (estado === 'Trabajando') {
              // Cambiar a estado de descanso
              setEstado('Descansando'); 
              setMinutos(5);//Minutos para descansar
              setSegundos(0);
              reproducirSonidoYVibrar('Descansando');
            } else if (estado === 'Descansando') {
              // Incrementar ciclos completados
              setCiclosCompletados(ciclosCompletados + 1);
              setCiclo(ciclo + 1);
              if (ciclosCompletados === 3) {
                // Preguntar al usuario si desea reiniciar la técnica
                const reiniciar = confirm('¿Deseas reiniciar la técnica Pomodoro?');
                if (reiniciar) {
                  // Reiniciar la técnica con un descanso de 15 minutos
                  setMinutos(15);//minutos del ultimo descanzo antes de volver a empezar
                  setCiclosCompletados(0);
                  
                } else {
                  // Regresar a la pantalla de inicio
                  navigation.navigate('Inicio');
                }
              } else {
                // Volver al estado de trabajo
                setEstado('Trabajando'); 
                setMinutos(25);//Minutos para volver a trabajar
                setSegundos(0);
                reproducirSonidoYVibrar('Trabajando');
              }
            }
            if(ciclo > 4){
              setCiclo(1);
            }

          } else {
            setMinutos(minutos - 1);
            setSegundos(59);
          }
        } else {
          setSegundos(segundos - 1);
        }
      }
    }, 1000);

    return () => clearInterval(temporizador);
  }, [minutos, segundos, pausado, estado, ciclosCompletados, navigation]);
 
  return (
    <View style={styles.temporizadorContainer}>
        <Text style={styles.title}>Bloque {ciclo}</Text>
        <Text style={styles.temporizadorText}>{`${minutos}:${segundos < 10 ? '0' : ''}${segundos}`}</Text>
        <Text style={styles.estadoText}>{estado}</Text>
      </View>
  );
};

export default EjecucionPresenter;
