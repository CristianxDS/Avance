import React from 'react'
import { ImageBackground, ImageBackgroundComponent, StyleSheet, Text, View } from 'react-native'
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
const Inicio = () => {
  return (
  <View>
    <Text style={styles.textContainer} >Hola mundo </Text>
<Text style={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos culpa, in obcaecati ducimus vel ad excepturi molestias quasi adipisci expedita atque, est aliquam ipsum, itaque sapiente provident veniam! Delectus, natus.</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    textContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      text: {
        color: '#ffffff', // Asegúrate de que el color del texto sea visible
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center', // Centra el texto horizontalmente
      },
});

export default Inicio
