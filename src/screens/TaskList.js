import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function TaskList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.header}>
        <Text style={{fontSize:40}}>Task List:</Text>
        </View>
      <View style={styles.box1}>
        <Text style={styles.text1}>Reading 1984 by George Orwell</Text>
        <Text style={styles.point1}>Gain 50 points for finishing 1984</Text>
        <Text style={styles.status1}>Status: Not completed</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text2}>Listen to 5 Live Science Podcast</Text>
        <Text style={styles.point2}>Gain 20 points for listening to an episode</Text>
        <Text style={styles.status2}>Status: Not completed</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text3}>Try drawing using only one line</Text>
        <Text style={styles.point3}>Gain 5 points for drawing</Text>
        <Text style={styles.status3}>Status: Not completed</Text>
      </View>
      <Image style={styles.image1}
        source={require("../../assets/images/book.png")}
      />
      <Image style={styles.image2}
        source={require("../../assets/images/podcast.png")}
      />
      <Image style={styles.image3}
        source={require("../../assets/images/drawing.jpg")}
      />
      
      <View style={styles.navbar}>
            <TouchableOpacity style={styles.search} onPress={() => navigation.navigate("SetTask")}>
            <Image
              source={require("../../assets/images/search.png")}
              />
            </TouchableOpacity> 

            <TouchableOpacity style={styles.tasklist}>
            <Image
              source={require("../../assets/images/tasklist.png")}
              />
            <Image style={styles.dot}
              source={require("../../assets/images/dot.png")}
              />
            </TouchableOpacity> 

            <TouchableOpacity style={styles.house} onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../../assets/images/house.png")}
              />
            </TouchableOpacity> 
          </View>
      </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  container:{
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  background:{
  height: 750,
  width: 500,
  backgroundColor: "#73a6ff",
  position: "absolute"
  },
  header: {
    marginTop: 75,
    marginLeft: 115,
  },
  box1: {
    width:350,
    height:125,
    backgroundColor:"#2C62FF",
    marginTop: 25,
    marginLeft: 12.5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 1,
  },
  image1: {
    width:90,
    height:90,
    backgroundColor:"#ffffff",
    marginTop: -405,
    marginLeft: 27,
    marginBottom: 150,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 2,
  },
  text1: {
    marginTop: 20,
    marginLeft: 115,
    fontSize: 15,
    color: "#ffffff"
  },
  point1: {
    marginTop: 15,
    marginLeft: 115,
    fontSize: 15,
    color: "#ffffff"
  },
  status1: {
    marginTop: 15,
    marginLeft: 115,
    fontSize: 15,
    color: "#ff0000"
  },
  box2: {
    width:350,
    height:125,
    backgroundColor:"#2C62FF",
    marginTop: 25,
    marginLeft: 12.5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 1,
  },
  image2: {
    width:90,
    height:90,
    backgroundColor:"#ffffff",
    marginTop: -90,
    marginLeft: 27,
    marginBottom: 95,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 2,
  },
  text2: {
    marginTop: 25,
    marginLeft: 115,
    fontSize: 15,
    color: "#ffffff"
  },
  point2: {
    marginTop: 5,
    marginLeft: 115,
    fontSize: 15,
    color: "#ffffff"
  },
  status2: {
    marginTop: 5,
    marginLeft: 115,
    fontSize: 15,
    color: "#ff0000"
  },
  box3: {
    width:350,
    height:125,
    backgroundColor:"#2C62FF",
    marginTop: 25,
    marginLeft: 12.5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 1,
  },
  image3: {
    width:90,
    height:90,
    backgroundColor:"#ffffff",
    marginTop: -35,
    marginLeft: 27,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 2,
  },
  text3: {
    marginTop: 25,
    marginLeft: 115,
    fontSize: 15,
    color: "#ffffff"
  },
  point3: {
    marginTop: 15,
    marginLeft: 115,
    fontSize: 15,
    color: "#ffffff"
  },
  status3: {
    marginTop: 15,
    marginLeft: 115,
    fontSize: 15,
    color: "#ff0000"
  },
  navbar: {
    width: 375,
    height: 85,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 170,
    marginLeft: 0,
    },
    search: {
      marginLeft: 155,
      marginRight: 180,
      marginTop: 15,
      fontSize: 30,
      transform: [{scale: 1.3}],
    },
    house: {
      marginLeft: 45,
      marginRight: 300,
      marginTop: -50,
      transform: [{scale: 1}],
    },
    tasklist: {
      marginLeft: 290,
      marginRight: 300,
      marginTop: -50,
      transform: [{scale: 1.1}],
    },
    dot: {
      marginLeft: 10,
      marginRight: 30,
      marginTop: 10,
      transform: [{scale: 1.1}],
    },
});
