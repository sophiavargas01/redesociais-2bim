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
        <ThemedText type="title" style={styles.title}>Bem vindo ao AmpConnect!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Aplicativo</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
          ▶ AmpConnect é o seu novo hub central para conectar todos os seus aplicativos de forma simplificada e eficiente. Projetado para desenvolvedores e entusiastas da tecnologia, AmpConnect facilita a integração de suas ferramentas e plataformas favoritas com o GitHub.
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Eu:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <Image
          source={require("@/assets/images/eu.jpeg")}
          style={styles.icon}
        />
        <ThemedText type="defaultSemiBold">
        ☆ Sou a Sophia Vargas e esse é o meu aplicativo com links para minhas redes sociais.
  
          </ThemedText>
          <ThemedText type="defaultSemiBold">
          •	3° info
            
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
    color: '#CA804D',
    
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