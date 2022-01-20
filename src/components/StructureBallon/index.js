import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';
import {styles} from './styles';
import {ButtonBalloon} from '../ButtonBalloon';
import { useAssets } from 'expo-asset';

export function StructureBallon() {
    const [assets, error] = useAssets([require('../../assets/audios/1.mp3'),
                            require('../../assets/audios/2.mp3'),
                            require('../../assets/audios/3.mp3'),
                            require('../../assets/audios/4.mp3'),
                            require('../../assets/audios/5.mp3'),
                            require('../../assets/audios/6.mp3'),
                            require('../../assets/audios/7.mp3'),
                            require('../../assets/audios/8.mp3'),
                            require('../../assets/audios/9.mp3'),
                            require('../../assets/audios/10.mp3'),
                            ]);

    const [sound, setSound] = useState();
    
    async function playSound(audio) {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        console.log('Somm');
        console.log(numeroAleatorio)
        const {sound} = await Audio.Sound.createAsync(
            // require(assets[0])
            assets[numeroAleatorio]
        );
        setSound(sound);

        console.log("Play")
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
        ? () => {
            console.log("Unload");
            sound.unloadAsync();}
        : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <View style={styles.backBallon}>
                <TouchableOpacity onPress={playSound}>
                    <ButtonBalloon caminhoImage={require('../../assets/lottieFiles/balloonRed.json')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.backBallon}>
                <TouchableOpacity onPress={playSound}>
                    <ButtonBalloon caminhoImage={require('../../assets/lottieFiles/balloon.json')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.backBallon}>
                <TouchableOpacity onPress={playSound}>
                    <ButtonBalloon caminhoImage={require('../../assets/lottieFiles/balloonPurple.json')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.backBallon}>
                <TouchableOpacity onPress={playSound}>
                    <ButtonBalloon caminhoImage={require('../../assets/lottieFiles/balloonBlue.json')}/>
                </TouchableOpacity>
            </View>
        </View>
      );
}

