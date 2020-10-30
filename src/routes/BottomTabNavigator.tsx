import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import Teste from '../pages/Teste';

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontFamily: "Archivo_700Bold",
                    fontSize: 13,
                    marginLeft: 16
                },
                inactiveBackgroundColor: "#fafafc",
                activeBackgroundColor: "#ebebf5",
                inactiveTintColor: "#c1bccc",
                activeTintColor: "#283a69"
            }}
        >
            <Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="home" size={size} color={focused ? "#3670ff" : color} />
                        );
                    }
                }}
            />
            <Screen 
                name="Teste" 
                component={Teste}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="user" size={size} color={focused ? "#3670ff" : color} />
                        );
                    }
                }}
            />
        </Navigator>
    );
};

export default BottomTabNavigator;