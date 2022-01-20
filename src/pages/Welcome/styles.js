import {StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor:'#CFB8FF',
        height: 500 + height,
        width: width * 2,
        borderRadius: 1000,
        position: 'absolute',
        alignSelf: 'center',
        top: 0.45 * height,
    },
    button:{
        paddingBottom: 50
    },
    baloonHaw: {
        width: 500,
        height: 500,
        alignSelf: 'center',
    }
  });