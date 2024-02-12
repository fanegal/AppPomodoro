import 'react-native-gesture-handler';
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/pages/Inicio/Inicio';
import Ejecucion from './src/pages/Ejecucion/Ejecucion';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['new NativeEventEmitter']);//Linea temporal para ocultar el warnnig
const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ headerShown: false }} 
        />
          <Stack.Screen 
          name="Ejecucion" 
          component={Ejecucion} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;