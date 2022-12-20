import {
    View,
} from "react-native";
import React from "react";

import styles from "./styles";
import Short from "./components/Short";

const Shorts: React.FC = () => (
    <View style={[styles.contain]}>
        <Short />
    </View>
);

export default Shorts;
