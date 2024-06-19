import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView

      headerBackgroundColor={{ light: "#f5f9a9", dark: "#f5f9a9" }}
      headerImage={
        <Image
          source={require("@/assets/images/beatles.jpeg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title" style={styles.title}>Bem vindo ao Redes Sociais!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            Redes Sociais é a solução definitiva para gerenciar todas as suas redes
            sociais em um único lugar. Com UniChat, você pode conectar e
            sincronizar suas contas de diversas plataformas, como Facebook,
            Twitter, Instagram, LinkedIn e muitas outras, facilitando a
            visualização e a interação com suas redes de forma centralizada.
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <Image
          source={require("@/assets/images/eu.jpeg")}
          style={styles.icon}
        />
        <ThemedText>
          Me chamo Sophia Vargas e estou fazendo um aplciativo que contenha
          algumas redes socias
        </ThemedText>
      </ThemedView> 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    color: 'yellow',
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems:'center',
    justifyContent:'center',
  },
  reactLogo: {
    height: 300,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  icon: {
    width: 200,
    height: 200,
    marginRight: 8,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize: 25,
  },
});