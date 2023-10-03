import setting from "./Settings";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { Text, ScrollView, Image, View, StyleSheet } from "react-native";

const Tab = createMaterialBottomTabNavigator();

function Feed() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView style={styles.slider}>
          <Image style={styles.foto} source={require("./img/1.jpg")} />
          <Image style={styles.foto} source={require("./img/2.jpg")} />
          <Image style={styles.foto} source={require("./img/3.jpg")} />
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c9c9c9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width:'100%',
    flex: 1,
    flexWrap:"nowrap",
  },
  header: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
  },
  footer: {
    flex: 1,
    backgroundColor: "#c9c9cc9",
    width: "100%",
  },
  foto: {
    marginTop: 70,
    marginLeft: 20,
    borderRadius: 20,
    width: "75%",
    height: 150,
  },
});

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "red" }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Anasayfa",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={setting}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={setting}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
