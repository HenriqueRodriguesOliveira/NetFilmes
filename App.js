import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import api from './src/service/api';
import Filmes from './src/Filmes/index';
export default function App(){

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadFilmes(){
    const response = await api.get('r-api/?api=filmes');
    setFilmes(response.data);
    setLoading(false);
  }
  loadFilmes();

  },[]);

  if(loading){
    return(
      <View style={{alignItems: 'center', justifyContent:'center', flex: 1}}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    )
  }else{
  return(
    <View style={estilo.container}>
      <FlatList 
      data={filmes}
      keyExtractor={ item => String(item.id)}
      renderItem={ ({item}) => <Filmes data={item}/>}
      />
    </View>
  );
}}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#121212'
  }
})
