import { View, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";

import styles from "./styles";
import Short from "./components/Short";

import { videoDataStatic, IVideoData } from "../../Utils";

const { height } = Dimensions.get("window");

const Shorts: React.FC = () => {
    const [videoData] = useState<IVideoData[]>(videoDataStatic);

    return (
        <View style={[styles.contain]}>
            <FlatList
                data={videoData}
                renderItem={() => <Short />}
                keyExtractor={item => item.id.toString()}
                snapToInterval={height-10}
                snapToAlignment="end"
                decelerationRate="fast"
            />
        </View>
    );
};

export default Shorts;
