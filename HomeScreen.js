import React from 'react';
import { View, Text, Button } from 'react-native';
import NaviBar from './NavBar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Anasayfa</Text>
      <Button
        title="Hakkımızda"
        onPress={() => navigation.navigate('AboutScreen')}
      />
      <NaviBar/>
    </View>
  );
};

export default HomeScreen;
