import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    },
    title: {
    color: 'white',  
    fontSize: 70,  
    marginBottom: 20,  
    },
    temporizadorContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    temporizadorText: {
      color: 'white', 
      fontSize: 120, 
      
    },
    estadoText: {
      fontSize: 55,
      color: 'white',  
    },
    iconosContainer: {
      flexDirection: 'row',
    },
    iconoButton: {
      marginHorizontal: 20,
    },
    iconoImage: {
      width: 150,
      height: 150,
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalButton: {
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#007BFF',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },  
  });

export default styles;
