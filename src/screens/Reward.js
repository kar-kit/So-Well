import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Home";
import SetTaskScreen from "./SetTask";
import TaskList from "./TaskList";

function RewardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="< Go back" onPress={() => navigation.navigate("Home")} />
      <Text style={styles.header}>Points Exchange</Text>
      <Text style={styles.subheader}>You have 120 points</Text>
      <View style={styles.box1}> 
      <Image style={styles.image1}
        source={require("../../assets/images/amazon.png")}
      />
      </View>
      <View style={styles.box2}> 
      <Image style={styles.image2}
        source={require("../../assets/images/spotify.png")}
      />
      </View>
      <View style={styles.box3}> 
      <Image style={styles.image3}
        source={require("../../assets/images/game.jpg")}
      />
      </View>
      <View style={styles.box4}> 
      <Image style={styles.image4}
        source={require("../../assets/images/nandos.png")}
      />
      </View>
    </View> 
  );
}

export default RewardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
     marginTop:250,
    marginLeft: 5,
    marginBottom: 250,
    fontSize: 30,
  },
  header: {
    marginTop: 30,
    marginLeft: 75,
    marginBottom: -40,
    fontSize: 30,
  },
  subheader: {
    marginTop: 50,
    marginLeft: 100,
    marginBottom: 50,
    fontSize: 20,
  },
  box1: {
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 25,
    height:200,
    width: 130,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#f2f2f2",
    borderColor: "#232f3e",
    borderWidth: 0.2,
  },
  image1: {
    marginLeft:-35,
    transform: [{ scale: 0.5 }],  
  },
  box2: {
    marginTop:-250,
    marginBottom: 50,
    marginLeft: 200,
    height:200,
    width: 130,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#1DB954",
  },
  image2: {
    marginLeft:-350,
    marginTop:-320,
    transform: [{ scale: 0.1 }],
  },
  box3: {
    marginTop:0,
    marginBottom: 50,
    marginLeft: 25,
    height:200,
    width: 130,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#a93897",
  },
  image3: {
    marginLeft:-255,
    marginTop: -220,
    transform: [{ scale: 0.20 }],  
  },
  box4: {
    marginTop:-250,
    marginBottom: 50,
    marginLeft: 200,
    height:200,
    width: 130,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#4d4532",
  },
  image4: {
    marginLeft:-62.5,
    marginTop: 10,
    transform: [{ scale: 0.5 }],
  },
});
