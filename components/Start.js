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
  const colors = ["#1DB954", "#1877F2", "#C0C0C0", "#FF9900"];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/cover.png")}
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
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "300",
    opacity: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 1000,
  },
  appTitle: {
    fontSize: 50,
    fontWeight: "600",
    color: "#F79194",
    margin: 20,
    top: -150,
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 30,
    width: "88%",
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  chooseBackgroundColor: {
    flex: 1,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  colorButtonsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
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
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  touchableOpacityButton: {
    alignItems: "center",
    backgroundColor: "#757083",
    padding: 10,
    width: "40%",
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default StartScreen;
