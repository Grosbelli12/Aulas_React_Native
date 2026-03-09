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

{  contador > 0 ? setContador(contador - 1) : null}
  
}
 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contdor de valores: </Text>

      <Text style={styles.text}>{contador}</Text>

     <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
     <Button onPress={aumentar} title='Aumentar'/>
     <Button onPress={diminuir} title='Diminuir'/>

     </View>

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

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }

});


