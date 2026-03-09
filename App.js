import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native';



export default function App() {
const [contador, setContador] = useState(0)

const aumentar =  () => {
  setContador(contador + 1);
}

const diminuir =  () => {
  setContador(contador - 1);
}
 

  return (
    <View style={styles.container}>
      <Text>Contdor de valores: </Text>

      <Text>{contador}</Text>
     
     <Button onPress={aumentar} title='Aumentar'/>
     <Button onPress={diminuir} title='Diminuir'/>

    <Image 
   source={require('./assets/paulo.png')}
    />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


