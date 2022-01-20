import React from 'react';
import { View, TouchableHighlight, Text, Button} from 'react-native';
import { styles } from './styles';

export function StartButton ({ navigation }) {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={()=>navigation.navigate("Clica em um Balão")}>
        <View style={styles.button}>
          <Text style={styles.text}>VAMOS COMEÇAR!</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}


