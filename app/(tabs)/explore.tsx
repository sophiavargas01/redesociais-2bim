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
        <Image source={require('@/assets/images/logo.png')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/1.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://wa.me/5518998235090')}>
            <ThemedText>Whatsapp</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/7.webp')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.linkedin.com/in/sophia-melo-a1770b314/')}>
            <ThemedText>Linkedin</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/8.webp')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('mailto:melosophia329@gmail.com')}>
            <ThemedText>Email</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/2.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://github.com/sophiavargas01')}>
            <ThemedText>Github</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/3.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://br.pinterest.com/sophiavargas093/')}>
            <ThemedText>Pinterest</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/4.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('tel:5518998235090')}>
            <ThemedText>Telefone</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/5.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.instagram.com/ssoidk/')}>
            <ThemedText>Instagram</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/6.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://discord.gg/.sophhia.')}>
            <ThemedText>Discord</ThemedText>
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
    padding: 10
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});
