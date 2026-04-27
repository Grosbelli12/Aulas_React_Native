import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import dadosCpa from './data/copa_mundo_2026_jogos_brasilia_com_estadios.json';   

export default function App() {

  return (
    <View style={styles.container}>
     

     <view style={styles.header}> 
     <Image source={require("./assets/unicopa.png")} style={styles.image} />     
     <Text style={styles.text}>Calendário</Text>
    </view>

      <View style={styles.body}>
      <Text>11/06</Text>
      <Text></Text>
      </View>

    

     <StatusBar style="auto"/>
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
