import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import Home from "../Pages/Home";

export type StackParams = {
    Home: object | undefined;
};

const TabStack = createBottomTabNavigator<StackParams>();

const Routes = () => (
    <TabStack.Navigator
        screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size }) => {
                if (route.name === "Home") {
                    return (
                        <View>
                            <Ionicons
                                name={
                                    navigation.isFocused()
                                        ? "home"
                                        : "home-outline"
                                }
                                size={size}
                                color={color}
                            />
                            <Text>Início</Text>
                        </View>
                    );
                }
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "darkgray",
            tabBarStyle: {
                backgroundColor: "#000000",
                borderTopWidth: 2,
                borderTopColor: "#000000",
            },
            headerShown: false
        })}
        initialRouteName="Home"
    >
        <TabStack.Screen name="Home" component={Home} />
    </TabStack.Navigator>
);

export default Routes;
