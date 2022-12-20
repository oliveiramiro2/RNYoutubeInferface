import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Avatar } from "native-base";

import Header from "../Components/Header";
import Videos from "../Components/Videos";
import styles from "./styles";

import {
    videoDataStatic,
    IVideoData,
    underHeaderText,
    IUnderHeader,
} from "../../Utils";

const Subscripber: React.FC = () => {
    const [chanelSubs] = useState<IVideoData[]>(videoDataStatic);
    const [dataUnderHeader] = useState<IUnderHeader[]>(underHeaderText);
    const [underHeaderSelected, setUnderHeaderSelected] = useState<number>(0);
    const [videoData] = useState<IVideoData[]>(videoDataStatic);

    return (
        <View style={[styles.contain]}>
            <Header />
            <View style={[styles.containAllAvatar]}>
                <FlatList
                    data={chanelSubs}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={() => (
                        <Avatar
                            bg="light.300"
                            source={{
                                uri: `https://api.lorem.space/image/face?w=${
                                    Math.round(Math.random() * 1200) + 40
                                }&h=${Math.round(Math.random() * 1200) + 40}`,
                            }}
                            style={[styles.imgAvatar]}
                        />
                    )}
                />
                <View style={[styles.containShowAll]}>
                    <TouchableOpacity>
                        <Text style={[styles.textShowALL]}>Todos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <ScrollView
                    horizontal
                    style={[styles.containUnderHeader]}
                >
                   {dataUnderHeader.map(value => (
                    <TouchableOpacity
                        key={value.id}
                        style={[
                            styles.containUnderHeaderBallon,
                            value.id === underHeaderSelected &&
                                styles.containUnderHeaderBallonSelected,
                        ]}
                        onPress={() => setUnderHeaderSelected(value.id)}
                    >
                        <Text
                            style={[
                                value.id !== underHeaderSelected &&
                                    styles.textUnderHeader,
                            ]}
                        >
                            {value.text}
                        </Text>
                    </TouchableOpacity>
                ))}
                </ScrollView>
            </View>
            <FlatList
                data={videoData}
                keyExtractor={item => item.id.toString()}
                renderItem={Videos}
                disableVirtualization
            />
        </View>
    );
};

export default Subscripber;
