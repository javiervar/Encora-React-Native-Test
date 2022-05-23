import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

const MovieItem = ({item, navigation}) => {
  const toDetails=()=>{
    navigation.navigate('Details', {data: item});
  }
  return (
    <TouchableOpacity style={styles.btn} onPress={toDetails}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: item.multimedia.src,
          }}
          resizeMode='cover'
        />
        <View style={styles.description}>
          <Text  numberOfLines={2} style={styles.title}>
            {item.display_title}
          </Text>
          <Text  style={styles.subTxt}>
            {`DIRECTOR: ${item.byline}`}
          </Text>
          <Text  numberOfLines={4} style={styles.subTxt}>
            {item.headline}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: 10,
    alignSelf: 'center',
    width: '90%',
    height: 150,
    backgroundColor: '#333',
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  image: {
    width: 130,
    height: 150,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15
  },
  container: {
    flex:1,
    flexDirection: 'row',
  },
  title: {
    width:"100%",
    marginBottom:10,
    fontWeight: 'bold',
    fontSize:16,
  },
  description: {
    flex:1,
    flexWrap: 'wrap',
    padding: 5,
    flexShrink: 1
  },
  subTxt: {
    fontSize: 12,
    width:"100%",
    marginBottom:5,
  },
});

export default MovieItem;
