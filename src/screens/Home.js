import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountDown from "react-native-countdown-component";
import DatePicker from 'react-native-date-picker'

import { useNavigation } from "@react-navigation/core";
import { auth } from "../../config";
import { accessibilityProps } from "react-native-web/dist/cjs/modules/forwardedProps";

function HomeScreen(props) {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainheader}>Dashboard</Text>
      </View>

      <View style={styles.uicon}>
        <Image source={require("../../assets/images/User.png")} />
      </View>

      <View style={styles.background}>
        <View style={styles.background} />
      </View>

      <View style={styles.background2}>
        <View style={styles.background2} />
      </View>

      <View
        style={{
          position: "absolute",
          top: -445,
          left: -220,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{position: 'absolute', top: 100, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.countdown}>Countdown:</Text>
        </View>
      </View>
    
      
      <View style={styles.box1}>
        <TouchableOpacity onPress={() => navigation.navigate("Timer")}>

          <View style={styles.timer}>
              <CountDown
                until={86400}
                size={30}
                onFinish={() => alert("Finished")}
                digitStyle={{ backgroundColor: "#FFFFFF" }}
                digitTxtStyle={{ color: "#000000" }}
                separatorStyle={{ color: "#000000" }}
                timeToShow={["D", "H", "M", "S"]}
                timeLabels={{ d: "Days", h: "Hours", m: "Minutes", s: "Seconds" }}
                timeLabelStyle={{ color: "#2C62FF" }}
                onPress={() => navigation.navigate("Timer")}
              />

          </View>
          
          <View style={{position: 'absolute', top: -80, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.boxtxt}>WOOHOO! You have</Text>
          </View>     
            
          <View style={{position: 'absolute', top: 170, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.boxtxt}>Left to isolate</Text>
          </View>
          </TouchableOpacity>
 
          <View style={styles.task1}>
            <Text style={styles.tasktext1}>Reading</Text>
            <Text style={styles.num1}>25</Text>
          </View>

          <View style={styles.task2}>
            <Text style={styles.tasktext2}>Meditation</Text>
            <Text style={styles.num2}>15</Text>
          </View>

          <View style={styles.task3}>
            <Text style={styles.tasktext3}>Drawing</Text>
            <Text style={styles.num3}>10</Text>
          </View>

          <View style={styles.quote}>
            <Text style={styles.quotetext}>"The bad news is time flies. The good news is you're the pilot." - Michael Altshuler </Text>
          </View>

          <View style={styles.navbar}>
            <TouchableOpacity style={styles.search} onPress={() => navigation.navigate("SetTask")}>
            <Image
              source={require("../../assets/images/search.png")}
              />
            </TouchableOpacity> 

            <TouchableOpacity style={styles.house}>
            <Image
              source={require("../../assets/images/house.png")}
              />
            <Image style={styles.dot}
              source={require("../../assets/images/dot.png")}
              />
            </TouchableOpacity> 

            <TouchableOpacity style={styles.tasklist} onPress={() => navigation.navigate("TaskList")}>
            <Image
              source={require("../../assets/images/tasklist.png")}
              />
            </TouchableOpacity> 
            
            <Button title="Reward" onPress={() => navigation.navigate("Reward")} />
            <StatusBar style="auto" />
          </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  mainheader: {
    marginTop: 70,
    marginLeft: 25,
    fontSize: 45,
  },
  uicon: {
    marginTop: -49,
    marginLeft: 300,
  },
  background: {
    width: 375,
    height: 688,
    backgroundColor: "#7699FF",
    borderradius: 15,
    transform: [{ rotate: "-6deg" }],
    borderTopRightRadius: 15,
    marginTop: 45,
    marginLeft: -10,
  },
  background2: {
    width: 374.85,
    height: 688,
    backgroundColor: "#2C62FF",
    borderTopRightRadius: 15,
    marginTop: 225,
    position: "absolute",
  },
  countdown: {
    fontSize: 18,
    color: "#FFFFFF",
    position: "absolute",
  },
  box1: {
    width: 340,
    height: 200,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 275,
    marginLeft: 20,
    position: "absolute",
  },
  boxtxt: {
    fontSize: 18,
    color: "#000000",
    position: "absolute",
    fontSize: 25,
  },
  countdown: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom:15,
    position: "absolute",
  },
  timer: {
    // position: "absolute",
    marginTop: 40,
    // marginLeft: 40,
    transform: [{ scale: 1.1 }],
  },
  task1: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 225,
    marginLeft: 0,
    position: "absolute",
  },
  tasktext1: {
  marginLeft: 25,
  marginTop: 7
  },
  task2: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 225,
    marginLeft: 120,
    position: "absolute",
  },
  tasktext2: {
  marginLeft: 18,
  marginTop: 7
  },
  task3: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 225,
    marginLeft: 240,
    position: "absolute",
  },
  tasktext3: {
  marginLeft: 25,
  marginTop: 7,
  },
  quote: {
    width: 340,
    height: 65,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 350,
    marginLeft: 0,
    position: "absolute",
  },
  quotetext: {
    marginLeft: 20,
    marginTop: 15,
  },
  num1: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 30,
  },
  num2: {
    marginLeft: 35,
    marginTop: 10,
    fontSize: 30,
  },
  num3: {
    marginLeft: 35,
    marginTop: 10,
    fontSize: 30,
  },
  navbar: {
    width: 375,
    height: 85,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 310,
    marginLeft: -20,
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
    dot: {
      marginLeft: 21,
      marginRight: 300,
      marginTop: 3,
      transform: [{scale: 1}],
    },
    tasklist: {
      marginLeft: 290,
      marginRight: 300,
      marginTop: -47,
      transform: [{scale: 1.1}],
    },
});
