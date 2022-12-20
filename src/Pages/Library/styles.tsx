import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: "#000",
    },

    containRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    containTitleHistory: {
        width,
        paddingHorizontal: 10,
        marginTop: 10,
    },

    textTitle: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
        marginLeft: 15,
    },

    textShowALL: {
        fontWeight: "bold",
        color: "#2e75e0",
    },

    containAllYoursVideos: {
        marginTop: 15,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#444",
        borderBottomColor: "#444",
        paddingHorizontal: 10,
    },

    containYoursVideos: {
        width: "40%",
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    textYoursVideos: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 15,
        marginLeft: 25,
    },

    containPlaylistVideo: {
        paddingHorizontal: 10,
        marginTop: 15,
    },

    textPlaylist: {
        marginLeft: 0,
    },

    containNewPlaylist: {
        width: "45%",
        marginTop: 20,
        marginLeft: 15,
    },

    textNewPlaylist: {
        fontSize: 18,
    },

    containLikedVideos: {
        justifyContent: "flex-start",
        marginTop: 15,
        marginLeft: 15,
    },

    containTextLiked: {
        marginLeft: 45,
    },

    textLikedTitle: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 18,
    },

    textLiked: {
        color: "#fff",
        fontWeight: "200",
    },

    mb: {
        marginBottom: 30,
    },
});

export default styles;
