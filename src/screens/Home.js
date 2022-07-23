import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
      <Button title="Set Task" onPress={() => navigation.navigate("SetTask")} />
      <Button
        title="Task List"
        onPress={() => navigation.navigate("TaskList")}
      />
      <Button title="Reward" onPress={() => navigation.navigate("Reward")} />
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
