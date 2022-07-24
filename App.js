import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import TimerScreen from "./src/screens/Time";
import RegisterScreen from "./src/screens/Register";
import { firebase } from "./config";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setInitializing(false);
    });
    return subscriber;
  }, []);

  if (initializing) return null; //Here you may use an Activity indicator

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        {user ? (
          <>
            <Stack.Screen name="Home" screenOptions={{ headerShown: false }}>
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Reward" component={RewardScreen} />
            <Stack.Screen name="SetTask" component={SetTaskScreen} />
            <Stack.Screen name="TaskList" component={TaskList} />
            <Stack.Screen name="Timer" component={TimerScreen} />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
