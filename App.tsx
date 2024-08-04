import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Fondo from './src/Fondo';
import {ImageBackground,Image} from 'react-native';
import 'react-social-icons/vimeo'
import 'react-social-icons/meetup'
import Inicio from './src/Inicio';
const image = {uri: 'https://image.slidesdocs.com/responsive-images/background/composition-of-gamepads-headphones-and-vr-glasses-in-3d-rendering-powerpoint-background_08291481c3__960_540.jpg'};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={image} resizeMode={'cover'} style={styles.image}>

    <View style={styles.container}>
    <Text style={styles.title}>
      Bienvenidos¡
    </Text>
    <View  style={styles.container}> 
      <Text style={styles.Textoinicio}>
      En Game Haven, te invitamos a explorar un universo lleno de aventuras, desafíos y diversión sin límites. Somos tu destino de referencia para los últimos lanzamientos, consolas de última generación, y accesorios que mejoran tu experiencia de juego. 
    </Text>

    
<View style={styles.ContenedorImagen}>
<Image
style={styles.Imagen}
        source={{
          uri: 'https://i.blogs.es/37814d/metacritic/1366_2000.jpg',
        }}
        
      />
   <Text style={styles.textoInicio}>
   Sumérgete en la emoción de los videojuegos. Explora mundos, supera desafíos y disfruta de aventuras. La diversión está en cada partida.
      </Text>
  
</View>
<View style={styles.ContenedorImag}>
<Image
style={styles.Imagen}
        source={{
          uri: 'https://assetsio.gnwcdn.com/-1589893843168.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
        }}
        
      />
   <Text style={styles.textoInicio}>
   Los videojuegos ofrecen desafíos y sorpresas en cada nivel. Conquista, compite y celebra tus victorias mientras disfrutas de una experiencia única.
      </Text> 
</View>

    </View>
</View>
    </ImageBackground>
  </SafeAreaView>

  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap:'wrap',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  title:{
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
    padding:11,
  },
  Textoinicio:{
    color:'white',
    fontSize:20,
    justifyContent:'center',
    textAlign:'justify',
    paddingHorizontal: 10,
    paddingVertical: 10, 

    marginHorizontal: 10, 
    marginTop: 20, 
    marginRight: 10,
  },
  Imagen: {
    width: 200,
    height: 230,
    borderRadius: 20, 
    marginRight: 10,
      },
ContenedorImagen:{
  flexDirection: 'row-reverse', 
  alignItems: 'center', 
  padding: 10,

},
ContenedorImag:{
  flexDirection: 'row', 
  alignItems: 'center', 
  padding: 10,

},
textoInicio: {
  color: 'white',
  fontSize: 20,
  textAlign: 'justify',
  paddingHorizontal:5,
  paddingVertical: 5,
  borderWidth: 8,
  borderColor: 'gray',
  borderRadius: 10, 
  flex: 1,
},
Imagenes: {
  flexDirection: 'column-reverse', 
  width: 150,
  height: 50,
  alignItems: 'center', 
  borderRadius: 20, 
  marginRight: 10,
    },

  
});

