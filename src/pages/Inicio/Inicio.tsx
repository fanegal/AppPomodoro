import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; 

const Inicio = () => {
    const navigation = useNavigation();

    const onPressPlay = () => {
        navigation.navigate('Ejecucion');  
    };

    return (
        <View style={styles.container}>
             <Text style={styles.title}>Pomodoro</Text>
            <Image source={require('../../assets/tomate.png')} style={styles.tomateImage} />
            <TouchableOpacity style={styles.playButton} onPress={onPressPlay}>
                <Image source={require('../../assets/play.png')} style={styles.playIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default Inicio;
