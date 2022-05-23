import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import MovieItem from '../../components/MoviewItem';
import {getMovies} from '../../api/movies.api';
const Home = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(res => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieItem {...props} item={item} />}
        keyExtractor={(item, index) => `${item.display_title}-${index}`}
      />
    </View>
  );
};


export default Home;
