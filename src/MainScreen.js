import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './mainScreen/HomeScreen';
import CoronaScreen from './mainScreen/CoronaScreen';
import ProfileScreen from './mainScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainScreen({route}) {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;
                if(route.name === 'Trang chủ'){
                    iconName = focused ? 'home' : 'home';
                }else if(route.name === 'Tài khoản'){
                    iconName = focused  ? 'account' : 'account'   
                }else if(route.name === 'Corona'){
                    iconName = focused  ? 'chart-bar' : 'chart-bar'
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            activeBackgroundColor: 'rgb(221,97,97)',
            style: {
                backgroundColor: 'rgb(232,133,130)',
            }
        }}
        >
          <Tab.Screen name="Trang chủ" component={HomeScreen} />
          <Tab.Screen name="Corona" component={CoronaScreen} />
          <Tab.Screen name="Tài khoản" component={ProfileScreen} />
        </Tab.Navigator>
    );
  }