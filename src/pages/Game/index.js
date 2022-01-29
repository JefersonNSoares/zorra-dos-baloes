import React from 'react';
import {View} from 'react-native';
import { BannerAd } from '../../components/BannerAd';
import {StructureBallon} from '../../components/StructureBallon';
import {styles} from './styles';

export function GameSound() {
    return (
      <View>
        <View style={styles.container}>
          <StructureBallon />
          <StructureBallon />
          <StructureBallon />
          <StructureBallon />
        </View>
        <View style={styles.banner}>
          <BannerAd />
        </View>
        <View style={styles.container1}></View>
      </View>
        
      );
}

