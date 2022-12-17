import { View, Image } from "react-native";
import React from "react";
import { MaterialIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";

const youtubeLogo = require("../../../Assets/imgs/youtube-logo.png");

const Header: React.FC = () => (
    <View style={[styles.containHeader]}>
        <Image
            source={youtubeLogo}
            style={[styles.logoImg]}
            resizeMode="contain"
        />
        <View style={[styles.containIcons]}>
            <MaterialIcons
                name="cast"
                color="#fff"
                size={25}
            />
            <MaterialIcons
                name="notifications-none"
                color="#fff"
                size={25}
            />
            <Entypo
                name="magnifying-glass"
                color="#fff"
                size={25}
            />
            <FontAwesome5
                name="user-circle"
                color="#fff"
                size={25}
            />
        </View>
    </View>
);

export default Header;
