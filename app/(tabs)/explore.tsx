import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/beatles.jpeg')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title' style={styles.title}>Minhas redes sociais:</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/1.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://wa.me/5518998235090')}>
            <ThemedText style={styles.text}>Whatsapp</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/7.webp')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.linkedin.com/in/sophia-melo-a1770b314/')}>
            <ThemedText style={styles.text}>Linkedin</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/999.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('mailto:melosophia329@gmail.com')}>
            <ThemedText style={styles.text}>Email</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/2.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://github.com/sophiavargas01')}>
            <ThemedText style={styles.text}>Github</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/3.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://br.pinterest.com/sophiavargas093/')}>
            <ThemedText style={styles.text}>Pinterest</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/001.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('tel:5518998235090')}>
            <ThemedText style={styles.text}>Telefone</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/5.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.instagram.com/ssoidk/')}>
            <ThemedText style={styles.text}>Instagram</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/17.webp')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://discord.gg/.sophhia.')}>
            <ThemedText style={styles.text}>Discord</ThemedText>
          </Pressable>
        </ThemedView>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    padding: 16,
  },
  title:{
    fontSize: 25,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    width: '80%',
    borderColor:'purple',
    borderWidth:'5%',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  
  text: {
    color:'black'
  },
});
