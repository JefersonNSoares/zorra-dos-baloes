import {StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingTop: 20
    },
    container1:{
      backgroundColor: '#fff',
      padding: 110
    },
    banner: {
      paddingTop: 0.20 * height,
      backgroundColor: '#fff',
    },
  });