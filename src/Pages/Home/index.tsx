import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

const Home: React.FC = () => (
    <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
    </View>
);

export default Home;
