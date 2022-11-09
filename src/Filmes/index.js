import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../Modal';
export default function Filmes({data}) {
  const [visibleModal, setVisibleModal] = useState(false);
 return (
   <View>
    <View style={estilo.card}>
      <Text style={estilo.texto}>{data.nome}</Text>
      <Image 
      source={{uri: data.foto}} 
      style={estilo.capa}/>

      <View style={estilo.areaBotao}>
        <TouchableOpacity style={estilo.botao} onPress={() => setVisibleModal(true)}>
          <Text style={estilo.botaoTexto}>Leia mais</Text>
        </TouchableOpacity>

        <View>
          <Modal transparent={true} animationType="slide" visible={visibleModal}>
            <Detalhes filme={data} voltar={() => setVisibleModal(false)}/>
          </Modal>
        </View>
      </View>
    </View>
   </View>
  );
}

const estilo = StyleSheet.create({

  card:{
    margin: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  texto:{
    padding: 15,
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold'
  },
  capa:{
    height: 250,
    zIndex:2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9
  },
  botao:{
    width: 100,
    backgroundColor: '#E52246',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  botaoTexto:{
    color: '#FFF',
    textAlign: 'center'
  }
})

