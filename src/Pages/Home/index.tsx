import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";
import Header from "../Components/Header";

const Home: React.FC = () => (
    <View style={styles.container}>
        <Header />
        <Text style={{ color: "#fff" }}>
            Open up App.tsx to start working on your app!
        </Text>
    </View>
);

export default Home;
