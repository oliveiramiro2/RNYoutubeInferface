import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

import Home from "../Pages/Home";
import Shorts from "../Pages/Shorts";
import ModalNewPost from "../Pages/ModalNewPost";
import Subscripber from "../Pages/Subscriber";
import Library from "../Pages/Library";

import styles from "./styles";

const IconShorts = require("../Assets/imgs/youtube-shorts.png");
const IconShortsOutline = require("../Assets/imgs/youtube-shorts-outline.png");
const IconSubscription = require("../Assets/imgs/subscrition.png");
const IconSubscriptionOutline = require("../Assets/imgs/subscrition-outline.png");
const IconLibrary = require("../Assets/imgs/youtube-library.png");
const IconLibraryOutline = require("../Assets/imgs/youtube-library-outline.png");

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
                        <View style={[styles.contain]}>
                            <Ionicons
                                name={
                                    navigation.isFocused()
                                        ? "home"
                                        : "home-outline"
                                }
                                size={size}
                                color={color}
                            />
                            <Text style={{ color }}>Início</Text>
                        </View>
                    );
                }
                if (route.name === "Shorts") {
                    return (
                        <View style={[styles.contain]}>
                            <Image
                                source={
                                    navigation.isFocused()
                                        ? IconShorts
                                        : IconShortsOutline
                                }
                                resizeMode="cover"
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
                        <View style={[styles.contain]}>
                            <Image
                                source={
                                    navigation.isFocused()
                                        ? IconSubscription
                                        : IconSubscriptionOutline
                                }
                                resizeMode="cover"
                            />
                            <Text style={{ color }}>Inscrições</Text>
                        </View>
                    );
                }

                if (route.name === "Library") {
                    return (
                        <View style={[styles.contain]}>
                            <Image
                                source={
                                    navigation.isFocused()
                                        ? IconLibrary
                                        : IconLibraryOutline
                                }
                                resizeMode="cover"
                            />
                            <Text style={{ color }}>Biblioteca</Text>
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
