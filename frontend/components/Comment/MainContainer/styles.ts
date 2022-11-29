import {StyleSheet} from "react-native";

const style =StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
    },
    PostHeaderContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    PostHeaderNames: {
        flexDirection: 'row',
    },
    username: {
        marginRight: 5,
        color: 'grey',
    },
    createdAt: {
        marginRight: 5,
        color: 'grey',
    },
    content: {
        marginTop: 5,
        lineHeight: 18,
    },
    image: {
        marginVertical: 10,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: "hidden",
    },
})

export default style;