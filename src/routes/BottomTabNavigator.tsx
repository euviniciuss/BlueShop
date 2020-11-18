import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import Categories from '../pages/Categories';
import ShoppingCart from '../pages/ShoppingCart';
import Register from '../pages/Register';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                },

                iconStyle: {
                    flex: 0,
                    width: 25,
                    height: 25
                },
                labelStyle: {
                    fontFamily: "Archivo_700Bold",
                    fontSize: 12,
                },

                inactiveBackgroundColor: "#fafafc",
                activeBackgroundColor: "#fafafc",
                inactiveTintColor: "#95abd8",
                activeTintColor: "#3670ff"
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
                name="Categorias"
                component={Categories}
                options={{
                    tabBarLabel: "Categorias",
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="list" size={size} color={focused ? "#3670ff" : color} />
                        );
                    }
                }}
            />
            <Screen
                name="Carrinho"
                component={ShoppingCart}
                options={{
                    tabBarLabel: "Carrinho",
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="shopping-cart" size={size} color={focused ? "#3670ff" : color} />
                        );
                    }
                }}
            />
            <Screen
                name="Conta"
                component={Register}
                options={{
                    tabBarLabel: "Conta",
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