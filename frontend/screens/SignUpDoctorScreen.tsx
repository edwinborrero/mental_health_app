import React from 'react';
import {
    Alert,
    CheckBox,
    KeyboardAvoidingView,
    Linking,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import CheckBox from '@react-native-community/checkbox';

import EditScreenInfo from '../components/EditScreenInfo';
import {  Text, View , } from '../components/Themed';
import {useState} from "react";
import {blue50} from "react-native-paper/lib/typescript/styles/colors";
import axios from "axios";

export default function SignUpDoctorScreen(){

    const [register, setRegister] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        username: '',
        phoneNumber: '',
        age: '',
        gender: '',
    })
    const  navigation = useNavigation();

    const createPopUp = ()=>{
        Alert.alert(
            "Your Account has been created",
            "Go Back to the Login Page",
            [

                {text: "OK",onPress: () => console.log("OK Pressed") }
            ]
        )
    }

    const onButtonRegister = async ()=>{
        try{
            const fields = {
                email: register.email,
                password: register.password,
                firstName: register.firstName,
                lastName: register.lastName,
                username: register.username,
                phoneNumber: register.phoneNumber,
                age: register.age,
                gender: register.gender,
            }
            console.log(fields);
            const response = await axios.post('/doctor_signup', fields);
            console.log(response.data);
            setRegister(response.data);
            //createPopUp()
           // navigation.navigate('LoginPsychologistScreen');
            const loginCredentials ={
                username: fields.username,
                password: fields.password
            }
            await axios.post('/doctor_login',loginCredentials, {withCredentials:true});
            //console.log(loginStatus.data);
            navigation.navigate('Root');
        } catch (e) {
            console.log(e)
        }
    }




    const onButtonBack = () => {
        navigation.navigate('LoginPsychologistScreen');
    }

    const onButtonToS = ()=>{
        Linking.openURL("https://pdfhost.io/v/Yql1Cwto7_FeelGoods_Terms_Of_Service.pdf");
    }


    return (

        <KeyboardAvoidingView
            style={{flex:1}}
            behavior={'padding'}
        >
            <ScrollView
                contentContainerStyle={{flex:1}} bounces={false}
            >
                <View style={styles.container}>
                    <Text style={styles.headings}>Enter Your Information</Text>
                    <TextInput
                       value={register.email || ''}
                       onChangeText={(event) => setRegister({...register, email: event})}
                       style={styles.customInput}
                       placeholder='E-Mail'
                       placeholderTextColor='rgba(0,128,128,0.6)'
                       underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput
                       value={register.password || ''}
                       onChangeText={(event) => setRegister({...register, password: event})}
                       style={styles.customInput}
                       placeholder='Password'
                       placeholderTextColor='rgba(0,128,128,0.6)'
                       underlineColorAndroid='transparent'
                       secureTextEntry={true}
                    >
                    </TextInput>
                    <TextInput
                       value={register.firstName || ''}
                       onChangeText={(event) => setRegister({...register, firstName: event})}
                       style={styles.customInput}
                       placeholder='First Name'
                       placeholderTextColor='rgba(0,128,128,0.6)'
                       underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput
                       value={register.lastName || ''}
                       onChangeText={(event) => setRegister({...register, lastName: event})}
                       style={styles.customInput}
                       placeholder='Last Name'
                       placeholderTextColor='rgba(0,128,128,0.6)'
                       underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput
                        value={register.username || ''}
                        onChangeText={(event) => setRegister({...register, username: event})}
                        style={styles.customInput}
                        placeholder='Username'
                        placeholderTextColor='rgba(0,128,128,0.6)'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput
                        value={register.phoneNumber || ''}
                        onChangeText={(event) => setRegister({...register, phoneNumber: event})}
                        style={styles.customInput}
                        placeholder='Phone Number, e.g: 17875557777'
                        placeholderTextColor='rgba(0,128,128,0.6)'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput
                        value={register.age || ''}
                        onChangeText={(event) => setRegister({...register, age: event})}
                        style={styles.customInput}
                        placeholder='Age'
                        placeholderTextColor='rgba(0,128,128,0.6)'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput
                        value={register.gender || ''}
                        onChangeText={(event) => setRegister({...register, gender: event})}
                        style={styles.customInput}
                        placeholder='Gender'
                        placeholderTextColor='rgba(0,128,128,0.6)'
                        underlineColorAndroid='transparent'>
                    </TextInput>

                    <View>
                        <Text onPress={onButtonToS}
                              style={{color:'blue'}}>
                            PLEASE READ TERMS OF SERVICE:
                        </Text>

                        <TouchableOpacity >
                            <Text style={styles.customButton} onPress={onButtonRegister}>                 REGISTER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.customButton} onPress={onButtonBack}>                 GO BACK</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </ScrollView>
        </KeyboardAvoidingView>


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
        //fontFamily: 'Orienta',
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
        marginBottom: 15,
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
