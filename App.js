import { useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [nameField, setNameField] = useState('')

  const handleSendName = () => {
    setName(nameField)
  }

  const handleClear = () => {
    setName('')
    setNameField('')
  }

  return (
    <SafeAreaView style={styles.corpo}>
      {name == '' &&
        <>
          <Image source={require('./assets/perfil.png')} style={{ height: 100, width: 100, marginLeft: 135, }}/>

          <TextInput 
            style={styles.input}
            placeholder='CPF'
            placeholderTextColor='#999'
            value={nameField}
            onChangeText={text => setNameField(text)}
          />
          <View style={styles.butao}>
            <Button title='LOGAR' color='black'  onPress={handleSendName}/>
          </View>

        </>
      }
      <SafeAreaView style={styles.fotoPerfil}>

      {name != '' &&
        <>
          <Image source={require('./assets/undefined - Imgur (1).png')} style={{ height: 100, width: 100, marginLeft: 135, marginTop: 65  }} />

          <View style={styles.segundotexto}>
            <Text style={styles.textinho}>Você está logado com o CPF: 000.000.000-00</Text>
          </View>

          <View style={styles.botaoMaior}>
            <Button title={`CPF NÃO É ${name}`} color='black' buttonStyle={{ width: 150, height: 50, backgroundColor: null }} onPress={handleClear}/>
          </View>
        </>
      }
       </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    borderWidth: 4
  },

  corpo: {
    marginTop: 260
  },

  textinho: {
    textAlign: 'center',
    fontSize: 13,
  
  },
  
  fotoPerfil: {
    marginTop: -45,

  },

  butao: {
    width: 94,
    marginLeft: 134
  },

  botaoMaior: {
    width: 200,
    marginLeft: 90,
    marginTop: 20
  },

  segundotexto: {
    marginTop: 12,
  }




  
})