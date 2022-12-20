import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: "#000",
    },

    containAllAvatar: {
        flexDirection: "row",
        marginVertical: 10,
    },

    imgAvatar: {
        marginLeft: 15,
        height: 55,
        width: 55,
    },

    containShowAll: {
        width: 80,
        justifyContent: "center",
        alignItems: "center",
    },

    textShowALL: {
        fontWeight: "bold",
        color: "#0066ff",
    },

    containUnderHeader: {
        paddingVertical: 10,
        paddingRight: 10,
        borderBottomColor: "#302f2f",
        borderBottomWidth: 1,
        borderTopColor: "#302f2f",
        borderTopWidth: 1,
        maxHeight: 58,
        minHeight: 58,
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
