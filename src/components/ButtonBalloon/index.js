import React, {useRef, useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {View, TouchableOpacity } from 'react-native';

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
                    backgroundColor: '#FFFFFF',
                }}
                />
        </View>
    );
}