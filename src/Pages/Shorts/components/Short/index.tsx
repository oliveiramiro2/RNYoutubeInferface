import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
} from "react-native";
import {
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome5,
} from "@expo/vector-icons";
import { Avatar } from "native-base";

import styles from "./styles";

const subscription = require("../../../../Assets/imgs/inscrevase.png");
const subscriped = require("../../../../Assets/imgs/inscrito.png");

const Short: React.FC = () => {
    const [likeColor, setLikeColor] = useState<boolean>(false);
    const [dislikeColor, setDislikeColor] = useState<boolean>(false);
    const [imgSubs, setImgSubs] = useState<boolean>(false);

    return (
        <View style={[styles.contain]}>
            <ImageBackground
                source={{
                    uri: `https://api.lorem.space/image/movie?w=${
                        Math.round(Math.random() * 1960) + 40
                    }&h=${Math.round(Math.random() * 1960) + 40}`,
                }}
                resizeMode="cover"
                style={[styles.containShort]}
            >
                <Text>Shorts</Text>
                <View style={[styles.containShortInfo]}>
                    <Text style={[styles.textTitleShort]} numberOfLines={2}>
                        Short Title Short Title Short Title Short Title Short
                        Title Short Title Short Title Short Title fdsfdsfsd
                    </Text>
                    <View style={[styles.containChanelAndSubs]}>
                        <Avatar
                            bg="light.300"
                            source={{
                                uri: `https://api.lorem.space/image/face?w=${
                                    Math.round(Math.random() * 1200) + 40
                                }&h=${Math.round(Math.random() * 1200) + 40}`,
                            }}
                        />
                        <Text style={[styles.textChanelName]}>
                            @Chanel Name
                        </Text>
                        <TouchableOpacity onPress={() => setImgSubs(!imgSubs)}>
                            <Image
                                source={imgSubs ? subscriped : subscription}
                                style={[styles.imgSubs]}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.containAllIcons]}>
                    <TouchableOpacity
                        style={[styles.containIcons]}
                        onPress={() => {
                            setDislikeColor(false);
                            setLikeColor(!likeColor);
                        }}
                    >
                        <AntDesign
                            name="like1"
                            size={35}
                            color={likeColor ? "blue" : "white"}
                        />
                        <Text style={[styles.textUnderIcon]}>
                            {Math.round(Math.random() * 900) + 1} mil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.containIcons]}
                        onPress={() => {
                            setLikeColor(false);
                            setDislikeColor(!dislikeColor);
                        }}
                    >
                        <AntDesign
                            name="dislike1"
                            size={35}
                            color={dislikeColor ? "blue" : "white"}
                        />
                        <Text style={[styles.textUnderIcon]}>Não gostei</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.containIcons]}>
                        <MaterialCommunityIcons
                            name="message-reply-text"
                            size={35}
                            color="#fff"
                        />
                        <Text style={[styles.textUnderIcon]}>
                            {Math.round(Math.random() * 998) + 1}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.containIcons]}>
                        <MaterialCommunityIcons
                            name="share"
                            size={35}
                            color="#fff"
                        />
                        <Text style={[styles.textUnderIcon]}>Compartilhar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.containIcons]}>
                        <MaterialCommunityIcons
                            name="dots-horizontal"
                            size={35}
                            color="#fff"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.containIcons]}>
                        <FontAwesome5
                            name="user-circle"
                            size={35}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Short;
