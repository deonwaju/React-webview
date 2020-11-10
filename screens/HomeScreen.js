import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", marginTop: 25 }}>
      <WebView source={{ uri: "https://dzq7zehl46m3h.cloudfront.net/" }} />
    </View>
  );
};

export default HomeScreen;
