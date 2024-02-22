import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [background, setBackground] = useState("");
  const colors = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/bgcover.png")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <Text style={styles.appTitle}>Tech Connect</Text>
        <View style={styles.box}>
          {/* Input username */}
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Type your username here..."
          />
          <View style={styles.bottomContent}>
            <Text style={styles.chooseBgColor}>Choose A Background Color</Text>
            {/* Choose a background color for your chat */}
            <View style={styles.colorButtonsBox}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorButton,
                    { backgroundColor: color },
                    background === color && styles.selected,
                  ]}
                  onPress={() => {
                    setBackground(color);
                  }}
                />
              ))}
            </View>
            {/* Start Chat */}
            <TouchableOpacity
              style={[styles.button, styles.touchableOpacityButton]}
              onPress={() => {
                navigation.navigate("Chat", {
                  name: name,
                  background: background,
                });
              }}
            >
              <Text style={styles.buttonText}>Start Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "300",
    borderRadius: 20,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  appTitle: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    margin: 20,
    position: "absolute",
    top: 50,
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 30,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  bottomContent: {
    width: "100%",
    alignItems: "center",
  },
  chooseBgColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    marginBottom: 10,
  },
  colorButtonsBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
  selected: {
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#757083",
    padding: 10,
    width: "50%",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
});

export default StartScreen;
