import React from "react";
import {
  Button,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#001C55" }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#001C55" }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#001C55" }}>Done</Text>
  </TouchableOpacity>
);

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#001C55" : "#C4C4C4";

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      bottomBarColor="#ffffff"
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("HomeScreen")}
      onDone={() => navigation.replace("HomeScreen")}
      pages={[
        {
          backgroundColor: "#fff",
          color: "#001C55",
          image: <Image source={require("../assets/discoverimg.png")} />,
          title: "Discover products and \n services near you",
          titleStyles: {
            lineHeight: 24,
            textAlign: "center",
            fontSize: 20,
            color: "#001C55",
            fontWeight: "bold",
            fontStyle: "normal",
          },
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/interactimg.png")} />,
          title: "Interact with verified \n merchants and shoppers",
          titleStyles: {
            color: "#001C55",
            fontWeight: "bold",
            lineHeight: 24,
            textAlign: "center",
            fontSize: 20,
          },
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/makesalesimg.png")} />,
          title: "Make sales and earn rewards",
          titleStyles: {
            color: "#001C55",
            fontWeight: "bold",
            lineHeight: 24,
            textAlign: "center",
            fontSize: 20,
          },
          subtitle: "",
        },
      ]}
    />
  );
};
export default OnboardingScreen;
