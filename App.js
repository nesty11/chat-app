// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
//import firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

//create navigator
const Stack = createNativeStackNavigator();

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAckQbz250lAH7QG3ikFBHV-SBzu73iTdw",
    authDomain: "chatapp-f0177.firebaseapp.com",
    projectId: "chatapp-f0177",
    storageBucket: "chatapp-f0177.appspot.com",
    messagingSenderId: "412819222338",
    appId: "1:412819222338:web:7f74ec202cdc350be622db",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
