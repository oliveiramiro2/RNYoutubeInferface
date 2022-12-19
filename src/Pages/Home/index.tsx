import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import Header from "../Components/Header";
import Videos from "./components/Videos";

import {
    underHeaderText,
    videoDataStatic,
    IUnderHeader,
    IVideoData,
} from "../../Utils";

const Home: React.FC = () => {
    const [dataUnderHeader] = useState<IUnderHeader[]>(underHeaderText);
    const [underHeaderSelected, setUnderHeaderSelected] = useState<number>(0);
    const [videoData] = useState<IVideoData[]>(videoDataStatic);

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView horizontal style={[styles.containUnderHeader]}>
                <View style={[styles.containUnderHeaderCompass]}>
                    <Ionicons
                        name="md-compass-outline"
                        color="#fff"
                        size={24}
                    />
                </View>
                <View style={[styles.lineUnderHeader]} />
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
            <FlatList
                data={videoData}
                keyExtractor={item => item.id.toString()}
                renderItem={() => <Videos />}
            />
        </View>
    );
};

export default Home;
