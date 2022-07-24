import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Linking } from "react-native";
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
      <View>
        <Text>{taskName}</Text>
        <Text>{taskDesc}</Text>
        <Text>{pointValue}</Text>
        <Text
          onPress={() => {
            Linking.openURL(taskLink);
          }}
        >
          {linkText}
        </Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Yes" onPress={incrementX} />
      <Button title="No" onPress={reduceX} />

      <Image style={{ width: "70%", height: "70%" }} source={{ uri: url }} />
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
