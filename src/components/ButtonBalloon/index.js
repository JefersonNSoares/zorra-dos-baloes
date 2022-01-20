import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import { useAssets } from 'expo-asset';

export function ButtonBalloon({caminhoImage}) {
    return (
        <View>
            <LottieView
            // source={require('../../assets/lottieFiles/balloonRed.json')}
            source={caminhoImage}
            autoPlay={true}
            loop={true}
            style={{
                width: 100,
                height: 100,
                backgroundColor: '#eee',
            }}
            />
        </View>
    );
}