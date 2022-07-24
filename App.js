import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

import HomeScreen from "./src/screens/Home";
import RewardScreen from "./src/screens/Reward";
import SetTaskScreen from "./src/screens/SetTask";
import TaskList from "./src/screens/TaskList";
import LoginScreen from "./src/screens/Login";
import RegisterScreen from "./src/screens/Register";
import { auth } from "./config";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  "source.uri should not be an empty string at node_modules/react-native/Libraries/Image/Image.android.js:136:6 in Image",
]);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      setUser(user);
      setInitializing(false);
    });
    return subscriber;
  }, []);

  if (initializing) return null; //Here you may use an Activity indicator

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <>
            <Stack.Screen name="Home" screenOptions={{ headerShown: false }} c>
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Reward" component={RewardScreen} />
            <Stack.Screen name="SetTask" component={SetTaskScreen} />
            <Stack.Screen name="TaskList" component={TaskList} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
