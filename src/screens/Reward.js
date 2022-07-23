import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Home";
import SetTaskScreen from "./SetTask";
import TaskList from "./TaskList";

function RewardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Reward Screen</Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Set Task" onPress={() => navigation.navigate("SetTask")} />
      <Button
        title="Task List"
        onPress={() => navigation.navigate("TaskList")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default RewardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
