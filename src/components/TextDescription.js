import React,{useCallback} from 'react';
import {View, Text, StyleSheet, Button, Linking,Alert} from 'react-native';

const TextDescription = ({label = '', value = '', link = false,link_label=""}) => {
  const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      {link ? <OpenURLButton url={value}>{link_label}</OpenURLButton> : <Text style={styles.value}>{value}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'justify',
  },
});

export default TextDescription;
