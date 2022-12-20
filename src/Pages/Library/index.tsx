import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
    MaterialCommunityIcons,
    Foundation,
    MaterialIcons,
    Ionicons,
    AntDesign,
} from "@expo/vector-icons";

import Header from "../Components/Header";
import Video from "./components/Video";
import Playlist from "./components/Playlist";
import styles from "./styles";

import { videoDataStatic, IVideoData, playlistDataStatic } from "../../Utils";

const Library: React.FC = () => {
    const [viwedVideo] = useState<IVideoData[]>(videoDataStatic);
    const [playlistData] = useState<IVideoData[]>(playlistDataStatic);

    return (
        <View style={[styles.contain]}>
            <ScrollView>
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
                        disableVirtualization
                        renderItem={() => <Video />}
                    />
                </View>
                <View style={[styles.containAllYoursVideos]}>
                    <View
                        style={[styles.containRow, styles.containYoursVideos]}
                    >
                        <Foundation name="play-video" size={30} color="#fff" />
                        <Text style={[styles.textYoursVideos]}>
                            Seus vídeos
                        </Text>
                    </View>
                    <View
                        style={[styles.containRow, styles.containYoursVideos]}
                    >
                        <MaterialCommunityIcons
                            name="movie-open-outline"
                            size={30}
                            color="#fff"
                        />
                        <Text style={[styles.textYoursVideos]}>
                            Seus filmes
                        </Text>
                    </View>
                </View>
                <View style={[styles.containRow, styles.containPlaylistVideo]}>
                    <View>
                        <Text style={[styles.textTitle, styles.textPlaylist]}>
                            Playlist
                        </Text>
                    </View>
                    <View style={[styles.containRow]}>
                        <Text style={[styles.textYoursVideos]}>
                            Adicionado recentemente
                        </Text>
                        <View>
                            <MaterialIcons
                                name="keyboard-arrow-down"
                                size={25}
                                color="#fff"
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <View
                            style={[
                                styles.containRow,
                                styles.containNewPlaylist,
                            ]}
                        >
                            <MaterialCommunityIcons
                                name="plus"
                                size={30}
                                color="#2e75e0"
                            />
                            <Text
                                style={[
                                    styles.textShowALL,
                                    styles.textNewPlaylist,
                                ]}
                            >
                                Nova Playlist
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <View
                        style={[styles.containRow, styles.containLikedVideos]}
                    >
                        <Ionicons name="time-outline" size={25} color="#fff" />
                        <View style={[styles.containTextLiked]}>
                            <Text style={[styles.textLikedTitle]}>
                                Assistir mais tarde
                            </Text>
                            <Text style={[styles.textLiked]}>
                                40 vídeos não assistidos
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[styles.containRow, styles.containLikedVideos]}
                    >
                        <AntDesign name="like1" size={25} color="#fff" />
                        <View style={[styles.containTextLiked]}>
                            <Text style={[styles.textLikedTitle]}>
                                Vídeos marcados como &quot;Gostei&quot;
                            </Text>
                            <Text style={[styles.textLiked]}>150 vídeos</Text>
                        </View>
                    </View>
                </View>
                {playlistData.map(item => <Playlist key={item.id} />)}
                <View style={[styles.mb]} />
            </ScrollView>
        </View>
    );
};

export default Library;
