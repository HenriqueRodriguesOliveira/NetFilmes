import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detalhes(props) {
 return (
   <View style={estilo.container}>
     <View style={estilo.modalContainer}>
       
       <TouchableOpacity style={estilo.btnVoltar} onPress={props.voltar}>
       <Text style={{color: '#FFF', fontSize: 16}}>Voltar</Text>
       </TouchableOpacity>

       <Text style={estilo.titulo}>{props.filme.nome}</Text>
       <Text style={estilo.sinopse}>Sinopse:</Text>
       <Text style={estilo.sinopse}>{props.filme.sinopse}</Text>


     </View>
    </View>
  );
}

const estilo = StyleSheet.create({
    container:{
     marginLeft: 10,
     marginRight: 10,
     flex:1,
     alignItems: 'center',
     justifyContent: 'flex-end'
    },
    modalContainer:{
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        
    },
    btnVoltar:{
        backgroundColor: '#E52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    titulo:{
        textAlign: 'center',
        color: '#FFF',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    sinopse:{
        color: '#FFF',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10
    },
    descricao:{
        color: '#FFF',
        marginLeft: 10,
        marginRight: 10,
    }
})