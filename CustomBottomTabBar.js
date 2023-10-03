import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomBottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const iconSize = 20; // İkon boyutu
        const iconColor = isFocused ? 'red' : '#000'; // İkon rengi

        const iconName = (() => {
          if (label === 'Home') return 'home'; // 'Home' sayfası için home ikonu
          if (label === 'Eğitimler') return 'bookmark'; // 'About' sayfası için bilgi ikonu
          if (label === 'Eğitimlerim') return 'book'; // 'Contact' sayfası için posta ikonu
          if (label === 'Hesabım') return 'person'; // 'Contact' sayfası için posta ikonu
          return 'help'; // Diğer durumlar için varsayılan ikon
        })();

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
            <Text style={{ color: iconColor }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabBar;
