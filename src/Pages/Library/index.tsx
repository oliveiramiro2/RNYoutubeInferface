import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Header from "../Components/Header";
import styles from "./styles";

import { videoDataStatic, IVideoData } from "../../Utils";
import Video from "./components/Video";

const Library: React.FC = () => {
    const [viwedVideo] = useState<IVideoData[]>(videoDataStatic);

    return (
        <View style={[styles.contain]}>
            <Header />
            <View style={[styles.containTitleHistory, styles.containRow]}>
                <View style={[styles.containRow]}>
                    <MaterialCommunityIcons
                        name="history"
                        size={40}
                        color="#fff"
                    />
                    <Text style={[styles.textTitle]}>Histórico</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={[styles.textShowALL]}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <FlatList
                    data={viwedVideo}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    renderItem={() => <Video />}
                />
            </View>
        </View>
    );
};

export default Library;
