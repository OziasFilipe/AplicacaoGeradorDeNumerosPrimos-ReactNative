import React, { useState } from 'react';
import { Text, View, StyleSheet,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  const [valorMin, setValorMin] = useState();
  const [valorMax, setValorMax] = useState();
  const [resultado, setResultado] = useState([])

  //Função de busca dos numeros primos
  function BuscarNumeroPrimo(minimo,maximo){
    const min = parseInt(minimo)
    const max = parseInt(maximo);

   
    let numerosPrimos = []
      if ((max - min) < 0) {
        
          return -1;
        }
      
        for(let i = min; i <= max; i++){
        let primo = true;
        

          for(let divisor = 2; divisor < i; divisor++){
            if(i % divisor === 0){
              primo = false;
              break;
            }
          }

          if(primo){
            numerosPrimos.push(i)
            console.log(i)
          }
        }
      
      setResultado(numerosPrimos)
    }
//////////////////

  return (
    <View style={styles.container}>
    
    <Text
     styles={styles.textInput}
     />

     <Text style={styles.paragraph}>
        O valor minimo
    </Text>

    <TextInput
        placeholder={"numero min"}
        style={styles.input}
        onChangeText={(valor)=>{setValorMin(valor)}}
        value={valorMin}
    />

    <Text
      styles={styles.textInput}
    />
      <Text style={styles.paragraph}>
        O valor máximo
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={(valor)=>{setValorMax(valor)}}
        value={valorMax}
         placeholder={"numero max"}
      />
          <Text  style={styles.text}>
            Numero primo gerado entre {valorMin} e {valorMax} 
          </Text>
      <Button
        onPress={()=>{{BuscarNumeroPrimo(valorMin,valorMax)}}} 
        title={"número primo é "+ resultado}
        color="blue"
        accessibilityLabel="Label botao"
      />
    </View>
  );
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'black'
  },
  text:{
    fontSize:20,
    color:"blue"
  }
});






