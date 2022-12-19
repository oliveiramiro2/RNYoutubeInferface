import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },

    containUnderHeader: {
        paddingVertical: 10,
        paddingRight: 10,
        borderBottomColor: "#302f2f",
        borderBottomWidth: 1,
        maxHeight: 53,
        minHeight: 53,
    },

    containUnderHeaderCompass: {
        marginHorizontal: 10,
        backgroundColor: "#302f2f",
        height: 33,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: "center",
    },

    lineUnderHeader: {
        height: 33,
        backgroundColor: "#302f2f",
        width: 1,
        marginHorizontal: 5,
    },

    containUnderHeaderBallon: {
        height: 33,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: "#302f2f",
        justifyContent: "center",
        marginLeft: 10,
    },

    containUnderHeaderBallonSelected: {
        backgroundColor: "#fff",
    },

    textUnderHeader: {
        color: "#fff",
        fontWeight: "500",
    },
});

export default styles;
