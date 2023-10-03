import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hakkımızda Sayfası</Text>
      <Button
        title="İletişim"
        onPress={() => navigation.navigate('ContactScreen')}
      />
    </View>
  );
};

export default AboutScreen;
