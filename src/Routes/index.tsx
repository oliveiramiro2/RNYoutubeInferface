import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";

import Home from "../Pages/Home";
import Shorts from "../Pages/Shorts";
import ModalNewPost from "../Pages/ModalNewPost";
import Subscripber from "../Pages/Subscriber";
import Library from "../Pages/Library";

export type StackParams = {
    Home: object | undefined;
    Shorts: object | undefined;
    NewPost: object | undefined;
    Subscripber: object | undefined;
    Library: object | undefined;
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
                                size={size + 3}
                                color={color}
                            />
                            <Text style={{ color }}>Início</Text>
                        </View>
                    );
                }
                if (route.name === "Shorts") {
                    return (
                        <View>
                            <Ionicons
                                name={
                                    navigation.isFocused()
                                        ? "home"
                                        : "home-outline"
                                }
                                size={size + 3}
                                color={color}
                            />
                            <Text style={{ color }}>Shorts</Text>
                        </View>
                    );
                }
                if (route.name === "NewPost") {
                    return (
                        <View>
                            <AntDesign
                                name="pluscircleo"
                                size={size + 10}
                                color={color}
                            />
                        </View>
                    );
                }
                if (route.name === "Subscripber") {
                    return (
                        <View>
                            <Ionicons
                                name={
                                    navigation.isFocused()
                                        ? "home"
                                        : "home-outline"
                                }
                                size={size + 3}
                                color={color}
                            />
                            <Text style={{ color }}>Shorts</Text>
                        </View>
                    );
                }

                if (route.name === "Library") {
                    return (
                        <View>
                            <Ionicons
                                name={
                                    navigation.isFocused()
                                        ? "home"
                                        : "home-outline"
                                }
                                size={size + 3}
                                color={color}
                            />
                            <Text style={{ color }}>Shorts</Text>
                        </View>
                    );
                }
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#eee",
            tabBarStyle: {
                backgroundColor: "#000000",
                borderTopWidth: 2,
                borderTopColor: "#f00",
            },
            headerShown: false,
            tabBarShowLabel: false,
        })}
        initialRouteName="Home"
    >
        <TabStack.Screen name="Home" component={Home} />
        <TabStack.Screen name="Shorts" component={Shorts} />
        <TabStack.Screen name="NewPost" component={ModalNewPost} />
        <TabStack.Screen name="Subscripber" component={Subscripber} />
        <TabStack.Screen name="Library" component={Library} />
    </TabStack.Navigator>
);

export default Routes;
