import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Avatar } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

const Videos: React.FC = () => (
    <View>
        <ImageBackground
            source={{
                uri: `https://api.lorem.space/image/movie?w=${
                    Math.round(Math.random() * 1960) + 40
                }&h=${Math.round(Math.random() * 1960) + 40}`,
            }}
            resizeMode="cover"
            style={[styles.containVideo]}
        >
            <View style={[styles.containTime]}>
                <Text style={[styles.textWhite]}>
                    {(Math.random() * 30)
                        .toFixed(2)
                        .toString()
                        .replace(".", ":")}
                </Text>
            </View>
        </ImageBackground>
        <View style={[styles.containInfoVideo]}>
            <Avatar
                bg="light.300"
                source={{
                    uri: `https://api.lorem.space/image/face?w=${
                        Math.round(Math.random() * 1200) + 40
                    }&h=${Math.round(Math.random() * 1200) + 40}`,
                }}
                style={[styles.containImgAvatar]}
            />
            <View>
                <View style={[styles.containTitleVideo]}>
                    <Text
                        style={[styles.textWhite, styles.textTitleVideo]}
                        numberOfLines={2}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris maximus sit amet lorem at pretium. Integer id
                        odio aliquet, hendrerit lacus id, laoreet justo.
                        Praesent sem libero, auctor ac ullamcorper quis,
                        bibendum id ipsum.
                    </Text>
                    <MaterialCommunityIcons
                        name="dots-vertical"
                        color="#fff"
                        size={17}
                        style={[styles.iconsDots]}
                    />
                </View>
                <View style={[styles.containChanelInfo]}>
                    <Text style={[styles.textChanelInfo]} numberOfLines={2}>
                        Canal Lorem Ipsum •{" "}
                        {Math.round(Math.random() * 100)} mil visualizações • há{" "}
                        {Math.round(Math.random() * 10) + 1} meses
                    </Text>
                </View>
            </View>
        </View>
    </View>
);

export default Videos;
