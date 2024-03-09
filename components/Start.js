import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";
import NetInfo from "@react-native-community/netinfo";

const StartScreen = ({ navigation }) => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [background, setBackground] = useState("");
  const colors = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

  const signInUser = () => {
    signInAnonymously(auth).then((result) => {
      navigation.navigate("Chat", {
        name: name,
        background: background,
        id: result.user.uid,
      });
      // Check network connection status before showing the alert
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          Alert.alert("Signed in Successfully!");
        }
      });
    });
  };

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
          <View>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              placeholder="Type your username here..."
            />
            <View style={styles.iconContainer}>
              <Image source={require("../img/icon.png")} style={styles.icon} />
            </View>
          </View>
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
              accessible={true}
              accessibilityLabel="More options"
              accessibilityHint="Let's you choose a different background color"
              AccessibilityRole="button"
              style={[styles.button, styles.touchableOpacityButton]}
              onPress={signInUser}
            >
              <Text style={styles.buttonText}>Start Chat</Text>
            </TouchableOpacity>
            {Platform.OS === "android" ? (
              <KeyboardAvoidingView behavior="height" />
            ) : null}
            {Platform.OS === "ios" ? (
              <KeyboardAvoidingView behavior="padding" />
            ) : null}
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
    paddingLeft: 40,
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
  iconContainer: {
    position: "absolute",
    top: 30,
    zIndex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
});

export default StartScreen;
