import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
        marginTop: 25,
    },

    imgPlaylist: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },

    containTextPlaylist: {
        marginLeft: 20,
    },

    textPlaylistTitle: {
        color: "#fff",
        fontWeight: "800",
        fontSize: 18,
    },

    textPlaylistInfo: {
        color: "#fff",
        fontWeight: "200",
    },
});

export default styles;
