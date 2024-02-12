import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {  View, Image, TouchableOpacity, Text, Modal, Alert  } from 'react-native';
import EjecucionPresenter from './presenter/Ejecucion.presenter';
import styles from './styles'; 
 

const Ejecucion: React.FC = () => {

  const navigation = useNavigation();
  
  const [minutos] = useState(25);
  const [segundos] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [estado] = useState('Trabajando');
  const [modalVisible, setModalVisible] = useState(false);

  const pausarContinuarTemporizador = () => {
    setPausado((prevPausado) => !prevPausado);
  };

  const mostrarModal = () => {
    setModalVisible(true);
  };

  const confirmarDetenerTemporizador = () => {
    // Detener el temporizador y regresar a la pantalla de inicio
    navigation.navigate('Inicio');
  };

  const cancelarDetenerTemporizador = () => {
    // Ocultar el modal
    setModalVisible(false);
  };


  return (
    <View style={styles.container}>  
      <EjecucionPresenter 
      minutos={minutos}
      segundos={segundos}
      pausado={pausado}
      estado={estado}
    />
      <View style={styles.iconosContainer}>
        <TouchableOpacity onPress={pausarContinuarTemporizador} style={styles.iconoButton}>
          <Image source={pausado ? require('../../assets/play.png') : require('../../assets/pause.png')} style={styles.iconoImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={mostrarModal} style={styles.iconoButton}>
          <Image source={require('../../assets/stop.png')} style={styles.iconoImage} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Al cerrar el modal sin seleccionar una opción, no se realizará ninguna acción
          cancelarDetenerTemporizador();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Estás seguro de detener el temporizador?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={confirmarDetenerTemporizador} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Aceptar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelarDetenerTemporizador} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Ejecucion;
