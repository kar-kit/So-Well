import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SetTaskScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>SetTask Screen</Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="TaskList"
        onPress={() => navigation.navigate("TaskList")}
      />
      <Button title="Reward" onPress={() => navigation.navigate("Reward")} />
      <StatusBar style="auto" />
    </View>
  );
}

export default SetTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
