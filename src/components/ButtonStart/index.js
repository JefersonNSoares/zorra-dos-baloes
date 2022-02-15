import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';

export function StartButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate('Clica em um Balão')}
      >
        <View style={styles.button}>
          <Text style={styles.text}>VAMOS COMEÇAR!</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
