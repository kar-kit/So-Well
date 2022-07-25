import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Animated,
  Linking,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getDatabase, ref, onValue } from "firebase/database";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firestore } from "../../config";
import { async } from "@firebase/util";

function SetTaskScreen({ navigation }) {
  const [url, setUrl] = useState();
  const [taskName, setTaskName] = useState();
  const [taskDesc, setTaskDesc] = useState();
  const [taskLink, setTaskLink] = useState();
  const [linkText, setLinkText] = useState();
  const [pointValue, setPointValue] = useState();
  const [dbName, setDbName] = useState();
  const [X, setX] = useState(0);

  const taskArray = ["/reading", "/podcast", "/endmessage"];

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const func = async () => {
      const db = getDatabase();
      const rrDbRef = ref(db, "tasks/" + taskArray[X]);
      onValue(rrDbRef, (snapshot) => {
        const data = snapshot.val();
        const jData = data;
        const j2Data = JSON.stringify(jData);
        var obj = JSON.parse(j2Data);
        setUrl(obj.image);
        setTaskName(obj.taskname);
        setTaskDesc(obj.taskdesc);
        setTaskLink(obj.tasklink);
        setLinkText(obj.linktext);
        setPointValue(obj.pointvalue);
        setDbName(obj.dbname);
      });
    };
    func();
  }, [X]);

  const incrementX = async () => {
    if (X < 2) {
      if (user !== null) {
        const email = user.email;
        // The user's ID, unique to the Firebase project.
        const uid = user.uid;
        console.log(uid);
        console.log(email);
        console.log(pointValue);
        console.log(linkText);
        await setDoc(doc(firestore, "onGoingTasks", dbName), {
          userID: uid,
          email: email,
          pointValue: pointValue,
        });
        setX(X + 1);
      }
    }
  };

  const reduceX = () => {
    if (X < 2) {
      setX(X + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.toptext}>{taskName}</Text>
      <Text style={styles.toptext2}>Worth {pointValue} points</Text>
      <View></View>
      <View style={styles.task}>
        <Image style={styles.bimage} source={{ uri: url }} />
      </View>
      <View style={styles.taskbackground} />
      <View style={styles.taskbackground2} />
      <Text style={styles.btext0}>{taskDesc}</Text>
      <Text
        onPress={() => {
          Linking.openURL(taskLink);
        }}
      >
        {linkText}
      </Text>

      <TouchableOpacity
        style={styles.yes}
        onPress={incrementX}
      ></TouchableOpacity>

      <TouchableOpacity style={styles.no} onPress={reduceX}></TouchableOpacity>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.house}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={require("../../assets/images/house.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.search}>
          <Image source={require("../../assets/images/search.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tasklist}
          onPress={() => navigation.navigate("TaskList")}
        >
          <Image source={require("../../assets/images/tasklist.png")} />
        </TouchableOpacity>

            <TouchableOpacity style={styles.tasklist} onPress={() => navigation.navigate("TaskList")}>
            <Image
              source={require("../../assets/images/tasklist.png")}
              />
            </TouchableOpacity> 
          </View>
    </View>
  );
}

export default SetTaskScreen;

const styles = StyleSheet.create({
  container: {
    height: 1000,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "#2C62FF",
    alignItems: "center",
    justifyContent: "center",
  },
  toptext: {
    marginTop: -120,
    marginLeft: 0,
    marginRight: 0,
    color: "#FFFFFF",
    fontSize: 28,
  },
  toptext2: {
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
    color: "#FFFFFF",
    fontSize: 28,
  },
  task: {
    width: 340,
    height: 500,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 60,
    zIndex: 3,
  },
  bimage: {
    height: 500,
    width: 340,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0.35,
    zIndex: 4,
  },
  btext: {
    marginTop: 125,
    zIndex: 5,
    marginLeft: 10,
    marginRight: 5,
    fontSize: 30,
  },
  btext2: {
    marginTop: 10,
    zIndex: 5,
    marginLeft: 10,
    marginRight: 5,
    fontSize: 30,
  },
  btext0: {
    marginTop: -425,
    zIndex: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 28,
  },
  taskbackground: {
    width: 340,
    height: 500,
    backgroundColor: "#D3D3D3",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 15,
    transform: [{ rotate: "-2deg" }],
    marginTop: -525,
    marginLeft: -10,
    zIndex: 2,
  },
  taskbackground2: {
    width: 340,
    height: 500,
    backgroundColor: "#808080",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 15,
    transform: [{ rotate: "-1 deg" }],
    marginTop: -520,
    marginRight: 5,
    zIndex: 1,
  },
  yes: {
    width: 100,
    height: 100,
    backgroundColor: "#5cff4d",
    marginLeft: -240,
    marginTop: 285,
    zIndex: 6,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  no: {
    width: 100,
    height: 100,
    backgroundColor: "#ff4d4d",
    marginLeft: 240,
    marginTop: -100,
    zIndex: 6,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  navbar: {
    width: 375,
    height: 85,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 30,
    marginLeft: 0,
  },
  search: {
    marginLeft: 155,
    marginRight: 180,
    marginTop: -45,
    fontSize: 30,
    transform: [{ scale: 1.3 }],
  },
  house: {
    marginLeft: 45,
    marginRight: 300,
    marginTop: 20,
    transform: [{ scale: 1 }],
  },
  tasklist: {
    marginLeft: 290,
    marginRight: 300,
    marginTop: -50,
    transform: [{ scale: 1.1 }],
  },
});
