import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    containHeader: {
        paddingTop: 33,
        width,
        backgroundColor: "#000",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#777",
    },

    logoImg: {
        width: width * 0.3,
        height: 50,
        resizeMode: "contain",
    },

    containIcons: {
        width: width * 0.4,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default styles;
