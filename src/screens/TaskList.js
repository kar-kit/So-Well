import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function TaskList({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>TaskList Screen</Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Set Task" onPress={() => navigation.navigate("SetTask")} />
      <Button title="Reward" onPress={() => navigation.navigate("Reward")} />
      <StatusBar style="auto" />
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
