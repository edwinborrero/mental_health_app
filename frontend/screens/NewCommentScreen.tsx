import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput, Alert
} from 'react-native';

import { View } from '../components/Themed';
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";
import {RouteProp, useNavigation} from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import {Params} from "../types";
import axios from "axios";
import Filter from 'bad-words';

export default function NewCommentScreen() {
    const [comment, setComment] = useState('');
    const navigation = useNavigation();
    const route = useRoute<RouteProp<Params, 'A'>>();
    const filter = new Filter();
    filter.addWords('bullshit');
    filter.removeWords('sex');

    const createOneButtonSuccessAlert = () =>
        Alert.alert(
            "Posted new comment!",
            "Please refresh your screen to see your new comment.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    const onPostButton = async () => {
        try{
            const newComment = {
                text: filter.clean(comment),
            }
            const response = await axios.post(`/post/${route.params.id}/createComment`, newComment, {withCredentials: true});
            setComment(response.data);
            createOneButtonSuccessAlert();
            onCloseButton();
        } catch (e) {
            console.log(e);
        }
    };

    const onCloseButton = () => {
        navigation.navigate('Feed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name={'close'} size={30} color={Colors.light.tint} onPress={onCloseButton}/>
                <TouchableOpacity style={styles.button} onPress={onPostButton} >
                    <Text style={styles.buttonText}>Comment</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newPostContainer}>
                <ProfilePicture image={'https://www.clipartkey.com/mpngs/m/146-1461473_default-profile-picture-transparent.png'} />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={comment}
                        onChangeText={(value) => setComment(value)}
                        multiline={true}
                        numberOfLines={3}
                        style={styles.postInput}
                        placeholder={'Add a comment...'}
                    />
                </View>
            </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 15,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: "bold",
        fontSize: 16,
    },
    newPostContainer: {
        flexDirection: "row",
        padding: 15,
    },
    inputContainer: {
        marginLeft: 10,
        width: '85%',
    },
    postInput: {
        height: 100,
        maxHeight: 300,
        fontSize: 18,
    },
    imageInput: {

    },
});
