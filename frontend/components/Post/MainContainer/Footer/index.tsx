import React from 'react';
import {Text, View} from "react-native";
import {PostType} from "../../../../types";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export type FooterProps = {
    post: PostType
}

const Footer = ({post}: FooterProps) => {
    const navigation = useNavigation();

    const onCommentButton = () => {
        navigation.navigate('NewComment', {id: post._id});
    }

    const onNumberOfComments = () => {
        navigation.navigate('CommentList', {id: post._id});
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Feather name={'message-circle'} size={20} color={'grey'} onPress={onCommentButton}/>
                <Text style={styles.number} onPress={onNumberOfComments}>{post.comments.length}</Text>
            </View>
        </View>
    )
}

export default Footer;