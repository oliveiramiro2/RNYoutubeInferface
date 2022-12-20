import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: "center",
    },

    containVideo: {
        height: 150,
        backgroundColor: "#111",
        marginHorizontal: 10,
        width: 150,
        marginLeft: 25,
        resizeMode: "cover",
        marginTop: 10,
    },

    containTime: {
        backgroundColor: "#000",
        maxWidth: 50,
        justifyContent: "center",
        position: "absolute",
        right: 0,
        bottom: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },

    containViewBar: {
        height: 5,
        width: 147,
        backgroundColor: "#f00",
        position: "relative",
        top: 147,
    },

    textWhite: {
        color: "#fff",
    },

    containInfoVideo: {
        flexDirection: "row",
        marginTop: 5,
        alignItems: "center",
        minWidth: 150,
        maxWidth: 150,
        marginLeft: 15,
    },

    containTitleVideo: {
        flexDirection: "row",
        minWidth: 150,
        maxWidth: 150,
        paddingRight: 10,
    },

    textTitleVideo: {
        fontWeight: "bold",
        fontSize: 14,
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
