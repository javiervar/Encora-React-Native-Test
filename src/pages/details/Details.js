import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import TextDescription from '../../components/TextDescription';
const Details = ({navigation, route}) => {
  const {data} = route.params;

  navigation.setOptions({title: data.display_title});

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: data.multimedia.src,
        }}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <TextDescription label="Title" value={data.display_title} />
        <TextDescription label="Director" value={data.byline} />
        <TextDescription
          label="Publication Date"
          value={data.publication_date}
        />
        <TextDescription label="Summary" value={data.summary_short} />
        <TextDescription
          label="Article"
          link
          value={data.link.url}
          link_label={data.link.suggested_link_text}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 230,
  },
});

export default Details;
