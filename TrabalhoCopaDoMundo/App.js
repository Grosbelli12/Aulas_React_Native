import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import dadosCopa from "./data/copa_mundo_2026_jogos_brasilia_com_estadios.json";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/unicopa.png")} style={styles.image} />
        <Text style={styles.text}>Calendário</Text>
      </View>

      <View style={styles.body}>
        <FlatList
          data={dadosCopa.jogos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            // Se for o primeiro item (index 0) ou se a data for diferente do anterior, ele deixa o deveMostrarData como true ou  false
            const jogoAnterior = dadosCopa.jogos[index - 1];
            const deveMostrarData =
              index === 0 || jogoAnterior.data_et !== item.data_et;

            const partes = item.data_et.split("-");
            const dataFormatada = `${partes[2]}/${partes[1]}`;

            return (
              <>
                {/* Se for true ele vai usar a data */}
                {deveMostrarData && (
                  <Text style={styles.dataTitulo}>{dataFormatada}</Text>
                )}

                <View style={styles.card}>
                  <Text style={styles.cardHeader}>GRUPO {item.grupo}</Text>
                  <View style={styles.matchRow}>
                  
                    <Text style={styles.corpo}>{item.sigla_casa}</Text>
                    <Text style={styles.timeText}>{item.hora_et}</Text>
                    <Text style={styles.corpo}>{item.sigla_fora}</Text>
                 
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.corpo}>{item.estadio}</Text>
                    <Text style={styles.corpo}>{item.cidade}</Text>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1236",
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 10,
  },
  dataTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffcc00",
    marginVertical: 15,
  },
  card: {
    backgroundColor: "#16203a",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#2d3748",
  },
  cardHeader: {
    fontSize: 12,
    color: "#a0a0a0",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  matchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "#2d3748",
    paddingTop: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  corpo: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "600",
  },
  timeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
