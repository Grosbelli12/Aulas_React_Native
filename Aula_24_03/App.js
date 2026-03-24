import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(async () => {
    try {
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const dados = await resposta.json();
      setDados(dados);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setCarregando(false);
    }
  }, []);

  if (carregando) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.title}</Text>
            <Text style={styles.corpo}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  corpo: {
    fontSize: 14,
    marginTop: 5,
  },
});
