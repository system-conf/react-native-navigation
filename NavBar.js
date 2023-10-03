import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const naviBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ContactScreen')}
      >
        <Ionicons name="home" size={20} color="#b81f36" />
        <Text>Anasayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Ionicons name="bookmark" size={20} color="#212121" />
        <Text>Kurslar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Ionicons name="book" size={20} color="#212121" />
        <Text>Eğitimlerim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Ionicons name="person" size={20} color="#212121" />
        <Text>Hesabım</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: "row",
    backgroundColor: "#fcfcfc",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    paddingTop: 5,
    left: 0,
    gap: 5,
    right: 0,
    bottom: 0,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: "25%",
    backgroundColor: "#fcfcfc",
    height: 50,
  },
});

export default naviBar;