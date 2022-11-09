import React, {useState, useEffect} from 'react';
import { View, Text, FlatList} from 'react-native';
import api from './src/service/api';
import Filmes from './src/Filmes/index';
export default function App(){

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
  async function loadFilmes(){
    const response = await api.get('r-api/?api=filmes');
    setFilmes(response.data);
  }
  loadFilmes();

  },[]);

  return(
    <View>
      <FlatList 
      data={filmes}
      keyExtractor={ item => String(item.id)}
      renderItem={ ({item}) => <Filmes data={item}/>}
      />
    </View>
  );
}