import { GiftedChat } from "react-native-gifted-chat";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Chat = ({ navigation, route }) => {
  const { name, background } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={styles.textChat}>Start chatting now!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textChat: {
    color: "#FFFFFF"
  }
});

export default Chat;
