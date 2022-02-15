import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { IntroSlidersObject } from "./sliders";
import LottieView from "lottie-react-native";
import { styles } from "./styles";
import { saveDataStorage, searchDataStorage } from "../../services/storage";
import { Welcome } from "../../pages/Welcome";

export function IntroSlider({ navigation }) {
  const [showHome, setShowHome] = useState(false);
  
  useEffect(() => {
    const showTutorial = async () => {
      const response = await searchDataStorage('@show_tutorial');
      setShowHome(response);
    }
    showTutorial()
  }, []);

  function onPressDone() {
    try {
      saveDataStorage('@show_tutorial', 'true');
      return navigation.reset({
        index: 0,
        routes: [{ name: "Bem Vindo" }],
      });
    } catch (e) {
      console.log(e);
    }
  }

  function renderSlider({ item }) {
    return (
      <View style={styles.container}>
        <LottieView
          source={item.image}
          autoPlay={true}
          loop={true}
          style={styles.image}
        />

        <Text allowFontScaling={false} style={styles.title}>
          {item.title}
        </Text>
        <Text allowFontScaling={false} style={styles.text}>
          {item.text}
        </Text>
      </View>
    );
  }

  if (showHome) {
    return <Welcome />;
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlider}
        data={IntroSlidersObject}
        activeDotStyle={{
          backgroundColor: "#009CFF",
          width: 30,
        }}
        renderNextButton={() => <Text>PRÓXIMO</Text>}
        renderDoneButton={() => <Text>COMEÇAR</Text>}
        onDone={onPressDone}
      />
    );
  }
}
