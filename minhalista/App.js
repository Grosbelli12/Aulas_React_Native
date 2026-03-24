import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity} from "react-native";
import { useState } from "react";

export default function App() {

  const [nome, setNome] = useState("");

  const [minhaLista, setMinhaLista] = useState([]);

  const adicionarContato = () => {
    const novoContato = {
      id: Math.random().toString(),
      nome: nome,
    };
    setMinhaLista([novoContato, ...minhaLista]);
    setNome("");
  }

    return (
    <View style={styles.container}>

    <Text>Meus contatos</Text>

    <TextInput 
    placeholder='Digite seu nome'
    value={nome}
    onChangeText={setNome}
    /> 

      <FlatList 
      data={minhaLista}  
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Text>{item.id} - {item.nome} </Text>}
      />

      <TouchableOpacity style={styles.botao} onPress={adicionarContato}>
        <Text>Adicionar Contato</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  botao: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 400,
  },
});
