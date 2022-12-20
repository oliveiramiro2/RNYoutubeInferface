import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: "#000",
    },

    containShort: {
        flex: 1,
    },

    containShortInfo: {
        position: "absolute",
        bottom: 15,
        left: 10,
        maxWidth: width * 0.8,
    },

    textTitleShort: {
        color: "#fff",
        fontSize: 15,
        marginBottom: 10,
    },

    containChanelAndSubs: {
        flexDirection: "row",
        alignItems: "center",
    },

    textChanelName: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 15,
        marginHorizontal: 10,
    },

    imgSubs: {
        width: 120,
        height: 20,
        resizeMode: "contain",
    },

    containAllIcons: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },

    containIcons: {
        alignItems: "center",
        marginBottom: 20,
    },

    textUnderIcon: {
        color: "#fff",
        fontSize: 13,
    },
});

export default styles;
