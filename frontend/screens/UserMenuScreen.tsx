import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Linking, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from "axios";


import {Text, View, } from '../components/Themed';

export default function UserMenuScreen(){

    const  navigation = useNavigation();

    const onButtonPressSchedule = () => {

        navigation.navigate('ScheduleScreen');
    }
    const onButtonPressVideoChat = () => {

        navigation.navigate('VideoPreCallScreen')
        //await?
    }
    const onButtonPressChats = () => {
        navigation.navigate('ChatScreen');
    }
    const onButtonPressVideo = () => {
        //navigation.navigate('LoginPsychologistScreen');
    }
    const onButtonPressShare = () => {
        //navigation.navigate('LoginPsychologistScreen');
    }
    const onButtonPressBoard = () => {
        navigation.navigate('InformationBoardScreen');
    }

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUser = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/user');
            //const response = await getDoctorList();
            console.log(response.data)
            setUser(response.data);

        } catch (e){
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchUser().then();
    }, [])

    return(

        <View style={styles.container}>

            <View>
                <TouchableOpacity >
                    <Text style={styles.customButton} onPress={onButtonPressSchedule} >SCHEDULE MEETING</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.customButton} onPress={onButtonPressVideoChat} >VIDEO CHAT WITH DOCTOR</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.customButton} onPress={onButtonPressChats} >GROUP CHATS</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.customButton} onPress={onButtonPressVideo} >WATCH MOTIVATIONAL VIDEOS</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.customButton} onPress={onButtonPressShare} >SHARE YOUR EXPERIENCE</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.customButton} onPress={onButtonPressBoard} >INFORMATION BOARD</Text>
                </TouchableOpacity>

            </View>
        </View>

    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {


    },
    headings:{
        //margin: "1em 0 0.5em 0",
        color: '#343434',
        fontSize: 22,
        lineHeight: 40,
        fontWeight: 'normal',
        textTransform: 'uppercase',
        fontFamily: 'Orienta',
        letterSpacing: 1,
        fontStyle: 'italic',

    },
    customInput:{
        borderWidth: 0,
        borderColor: 'black',
        borderStyle: 'solid',

        backgroundColor: "#f2f2f2",
        padding: 12,
        borderRadius: 3,
        width: 250,

        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'black',

        //alignSelf: 'stretch',
        //height: 40,
        marginBottom: 15,
        //color: '#fff',
        //borderBottomWidth: 1,




    },

    customButton:{
        alignItems: 'center',
        //userSelect: 'none',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        flexShrink: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        fontWeight: "500",
        backgroundColor: 'rgba(235, 87, 87, 0.03)',
        color: 'rgb(0, 128, 128)',
        borderWidth: 1,
        borderColor: 'rgb(0, 128, 128)',
        borderStyle: 'solid',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        width: '100%',
        marginTop: 6,
        marginBottom: 12,
        //cursor: 'pointer'

    },
    keyboard: {
        marginBottom: 100,
    }
});
