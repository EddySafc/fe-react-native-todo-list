import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  getDailyToDos,
  getWeeklyToDos,
  getMonthlyToDos,
  postDailyToDo,
  postWeeklyToDo,
  postMonthlyToDo,
  deleteDailyToDo,
  deleteWeeklyToDo,
  deleteMonthlyToDo,
} from "./requests";

function DailysScreen() {
  const [dailyToDos, setDailyToDos] = useState([]);
  const [enteredToDoText, setEnteredToDoText] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredToDoText(enteredText);
  };

  const addToDoHandler = () => {
    if (dailyToDos.length === 0) {
      setDailyToDos((currentToDos) => [
        ...currentToDos,
        {
          todo_id: 1,
          todo_name: enteredToDoText,
        },
      ]);
      postDailyToDo(enteredToDoText, 1);
    }
    if (dailyToDos.length !== 0) {
      setDailyToDos((currentToDos) => [
        ...currentToDos,
        {
          todo_id: currentToDos[currentToDos.length - 1]["todo_id"] + 1,
          todo_name: enteredToDoText,
        },
      ]);
      postDailyToDo(
        enteredToDoText,
        dailyToDos[dailyToDos.length - 1]["todo_id"] + 1
      );
    }
    setEnteredToDoText("");
  };

  useEffect(() => {
    getDailyToDos().then((toDos) => {
      setDailyToDos(toDos.result);
    });
  }, []);

  console.log("dailyToDos:", dailyToDos);

  return (
    <View style={styles.container}>
      <Text style={styles.subheader}>Daily To Do List:</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.text_input}
          placeholder="New to do..."
          onChangeText={textInputHandler}
          value={enteredToDoText} //clears box when text is entered.
        />
        <View style={styles.button}>
          <Button title="Add Item" color={"pink"} onPress={addToDoHandler} />
        </View>
      </View>
      <ScrollView>
        {dailyToDos.map((toDo) => (
          <View key={toDo.todo_id} style={styles.list_item}>
            <Pressable
              android_ripple={{ color: "red" }}
              onPress={() => {
                setDailyToDos((currentToDos) =>
                  currentToDos.filter((currentToDo) => currentToDo !== toDo)
                );
                deleteDailyToDo(toDo.todo_id);
              }}
            >
              <Text style={styles.list_text}>{toDo.todo_name}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function WeeklysScreen() {
  const [weeklyToDos, setWeeklyToDos] = useState([]);
  const [enteredToDoText, setEnteredToDoText] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredToDoText(enteredText);
  };

  const addToDoHandler = () => {
    if (weeklyToDos.length === 0) {
      if (weeklyToDos.length === 0) {
        setWeeklyToDos((currentToDos) => [
          ...currentToDos,
          {
            todo_id: 1,
            todo_name: enteredToDoText,
          },
        ]);
        postWeeklyToDo(enteredToDoText, 1);
      }
      if (weeklyToDos.length !== 0) {
        setWeeklyToDos((currentToDos) => [
          ...currentToDos,
          {
            todo_id: currentToDos[currentToDos.length - 1]["todo_id"] + 1,
            todo_name: enteredToDoText,
          },
        ]);
        postWeeklyToDo(
          enteredToDoText,
          weeklyToDos[weeklyToDos.length - 1]["todo_id"] + 1
        );
      }
      setEnteredToDoText("");
    }
    if (weeklyToDos.length !== 0) {
      setWeeklyToDos((currentToDos) => [
        ...currentToDos,
        {
          todo_id: currentToDos[currentToDos.length - 1]["todo_id"] + 1,
          todo_name: enteredToDoText,
        },
      ]);
    }
    postWeeklyToDo(enteredToDoText);
    setEnteredToDoText("");
  };

  useEffect(() => {
    getWeeklyToDos().then((toDos) => {
      setWeeklyToDos(toDos.result);
    });
  }, []);

  console.log("weeklyToDos:", weeklyToDos);

  return (
    <View style={styles.container}>
      <Text style={styles.subheader}>Weekly To Do List:</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.text_input}
          placeholder="New to do..."
          onChangeText={textInputHandler}
          value={enteredToDoText} //clears box when text is entered.
        />
        <View style={styles.button}>
          <Button title="Add Item" color={"pink"} onPress={addToDoHandler} />
        </View>
      </View>
      <ScrollView>
        {weeklyToDos.map((toDo) => (
          <View key={toDo.todo_id} style={styles.list_item}>
            <Pressable
              android_ripple={{ color: "red" }}
              onPress={() => {
                setWeeklyToDos((currentToDos) =>
                  currentToDos.filter((currentToDo) => currentToDo !== toDo)
                );
                deleteWeeklyToDo(toDo.todo_id);
              }}
            >
              <Text style={styles.list_text}>{toDo.todo_name}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function MonthlysScreen() {
  const [monthlyToDos, setMonthlyToDos] = useState([]);
  const [enteredToDoText, setEnteredToDoText] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredToDoText(enteredText);
  };

  const addToDoHandler = () => {
    if (monthlyToDos.length === 0) {
      setMonthlyToDos((currentToDos) => [
        ...currentToDos,
        {
          todo_id: 1,
          todo_name: enteredToDoText,
        },
      ]);
      postMonthlyToDo(enteredToDoText, 1);
    }
    if (monthlyToDos.length !== 0) {
      setMonthlyToDos((currentToDos) => [
        ...currentToDos,
        {
          todo_id: currentToDos[currentToDos.length - 1]["todo_id"] + 1,
          todo_name: enteredToDoText,
        },
      ]);
      postMonthlyToDo(
        enteredToDoText,
        monthlyToDos[monthlyToDos.length - 1]["todo_id"] + 1
      );
    }
    setEnteredToDoText("");
  };

  useEffect(() => {
    getMonthlyToDos().then((toDos) => {
      setMonthlyToDos(toDos.result);
    });
  }, []);

  console.log("monthlyToDos:", monthlyToDos);

  return (
    <View style={styles.container}>
      <Text style={styles.subheader}>Monthly To Do List:</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.text_input}
          placeholder="New to do..."
          onChangeText={textInputHandler}
          value={enteredToDoText} //clears box when text is entered.
        />
        <View style={styles.button}>
          <Button title="Add Item" color={"pink"} onPress={addToDoHandler} />
        </View>
      </View>
      <ScrollView>
        {monthlyToDos.map((toDo) => (
          <View key={toDo.todo_id} style={styles.list_item}>
            <Pressable
              android_ripple={{ color: "red" }}
              onPress={() => {
                setMonthlyToDos((currentToDos) =>
                  currentToDos.filter((currentToDo) => currentToDo !== toDo)
                );
                deleteMonthlyToDo(toDo.todo_id);
              }}
            >
              <Text style={styles.list_text}>{toDo.todo_name}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "purple",
            tabBarActiveBackgroundColor: "pink",
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="sunny-outline"
                    size={24}
                    color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  />
                );
              },
            }}
            name="Dailys"
            component={DailysScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="star-outline"
                    size={24}
                    color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  />
                );
              },
            }}
            name="Weeklys"
            component={WeeklysScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="planet-outline"
                    size={24}
                    color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  />
                );
              },
            }}
            name="monthlys"
            component={MonthlysScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    padding: 30,
    paddingTop: 50,
  },
  input_container: {
    flexDirection: "row",
    margin: 20,
    marginBottom: 35,
  },
  text_input: {
    marginRight: 30,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "pink",
    backgroundColor: "white",
  },
  list_item: { padding: 12, alignItems: "center" },
  list_text: {
    width: 300,
    fontSize: 17,
    backgroundColor: "gold",
    padding: 5,
    borderRadius: 5,
  },
  subheader: {
    width: "100%",
    backgroundColor: "pink",
    padding: 8,
    marginBottom: 25,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
});
