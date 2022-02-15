import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import LottieView from "lottie-react-native";
import { StartButton } from "../../components/ButtonStart";

export function Welcome({ navigation }) {
  return (
    <View>
      <LottieView
        source={require("../../assets/lottieFiles/horror-ballons.json")}
        autoPlay={true}
        loop={true}
        style={styles.baloonHaw}
      />
      <View style={styles.container}></View>
      <View style={styles.button}>
        <StartButton navigation={navigation} />
      </View>
    </View>
  );
}
