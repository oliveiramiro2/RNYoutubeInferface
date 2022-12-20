import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containVideo: {
        height: 210,
        backgroundColor: "#111",
        marginHorizontal: 10,
    },

    containTime: {
        backgroundColor: "#000",
        maxWidth: 50,
        justifyContent: "center",
        position: "absolute",
        right: 5,
        bottom: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },

    textWhite: {
        color: "#fff",
    },

    containInfoVideo: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 25,
        alignItems: "center",
    },

    containImgAvatar: {
        marginHorizontal: 10,
        resizeMode: "center",
    },

    containTitleVideo: {
        flexDirection: "row",
        minWidth: "90%",
        maxWidth: "90%",
        paddingRight: 10,
    },

    textTitleVideo: {
        fontWeight: "bold",
        fontSize: 18,
    },

    iconsDots: {
        position: "absolute",
        top: 5,
        right: 0,
    },

    containChanelInfo: {
        minWidth: "90%",
        maxWidth: "90%",
    },

    textChanelInfo: {
        color: "#b8b8b8",
        fontSize: 12,
    },
});

export default styles;
