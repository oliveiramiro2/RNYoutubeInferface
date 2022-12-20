import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./styles";

const Playlist: React.FC = () => (
    <View style={[styles.contain]}>
        <View>
            <Image
                source={{
                    uri: `https://api.lorem.space/image/movie?w=${
                        Math.round(Math.random() * 1960) + 40
                    }&h=${Math.round(Math.random() * 1960) + 40}`,
                }}
                resizeMode="cover"
                style={[styles.imgPlaylist]}
            />
        </View>
        <View style={[styles.containTextPlaylist]}>
            <Text style={[styles.textPlaylistTitle]}>Nome Playlist</Text>
            <Text style={[styles.textPlaylistInfo]}>
                Nome canal • {Math.round(Math.random() * 100) + 2} vídeos
            </Text>
        </View>
    </View>
);

export default Playlist;
