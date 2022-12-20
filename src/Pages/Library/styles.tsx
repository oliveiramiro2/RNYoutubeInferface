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
});

export default styles;
