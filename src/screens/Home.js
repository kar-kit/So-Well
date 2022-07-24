import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountDown from 'react-native-countdown-component';

function HomeScreen({ navigation }) {
  const [isPlaying, setIsPlaying] = React.useState(true)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainheader}>Dashboard</Text>
      </View>

      <View style={styles.uicon}>
      <Image source={require("../../assets/images/User.png")} />
      </View>

      <View style={styles.background}>
        <View style={styles.background}/>
      </View>

      <View style={styles.background2}>
      <View style={styles.background2}/>
      </View>

      <View style={{position: 'absolute', top: -445, left: -220, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.countdown}>Countdown:</Text>
      </View>

      <View style={styles.box1}>
      </View>

      <View style={styles.timer}>
      <CountDown
        until={86400}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFFFFF'}}
        digitTxtStyle={{color: '#000000'}}
        separatorStyle={{color: '#000000'}}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
        timeLabelStyle={{color:'#2C62FF'}}
      />
      </View>

      <View style={styles.navbar}>
      <Button title="Set Task" onPress={() => navigation.navigate("SetTask")} />
      <Button
        title="Task List"
        onPress={() => navigation.navigate("TaskList")}
      />
      <Button title="Reward" onPress={() => navigation.navigate("Reward")} />
      <StatusBar style="auto" />
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
    backgroundColor: '#7699FF',
    borderradius: 15,
    transform: [{ rotate: '-6deg' }],
    borderTopRightRadius: 15,
    marginTop: 45,
    marginLeft: -10,
  },
  background2: {
    width: 374.85,
    height: 688,
    backgroundColor: '#2C62FF',
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
    height: 125,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 275,
    marginLeft: 20,
    position: "absolute",
  },
  timer: {
    position: "absolute",
    marginTop: 284,
    marginLeft: 40,
    transform: [{ scale: 1.1 }]
  }

});