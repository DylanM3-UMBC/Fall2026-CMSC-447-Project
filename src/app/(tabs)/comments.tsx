import { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";


export default function SearchBarPlaceholderExample() {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.SearchBar_Box}>
        <TextInput style={{width: '85%'}} placeholder={'Search Message...'} />
        <TouchableOpacity>
          <Image 
          source={require('../../assets/images/googlesearchicon.png')} 
          style={{width: 30, height: 30}} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  SearchBar_Box: {
    width: 300,
    height: 50,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
