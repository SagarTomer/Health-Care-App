import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import colors from './Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const Register = ({navigation}) => {

    const [state, setState] = useState("");

    return (
        <View style={styles.main}>

            <ScrollView style={styles.mainContaienr}>

                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Register</Text>
                </View>

                <View style={styles.userInfo}>

                    <View style={styles.inputContainer}>
                        <Image style={styles.logo} source={require('./Images/person.png')} />
                        <TextInput placeholder="First Name" style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.logo} source={require("./Images/person.png")} />
                        <TextInput placeholder='Last Name' style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.logo} source={require("./Images/call.png")} />
                        <TextInput placeholder='Mobile' style={styles.input} />
                    </View>


                    <View style={styles.inputContainer}>
                        <Image style={styles.logo} source={require("./Images/mail.png")} />
                        <TextInput onChangeText={(value) => { setState(value) }} placeholder='Email' style={styles.input} />
                    </View>

                    <View style={styles.otpContainer}>
                        <TouchableOpacity>
                            <Text style={styles.otpText}>
                                OTP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >

            <View style={styles.footer}>



                <View>
                    <TouchableOpacity style={styles.button} 
                     onPress={()=>{ 
                        Alert.alert("Registration Successfull","Your Account has been Created Please Login your Account")

                        setTimeout(()=>{
                            navigation.navigate('loadingScreen')
                        },2000)
                       
                     }}
                    >
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerTexts}> Already have an Accoun !</Text>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate('loadingScreen');}}
                    >
                        <Text style={[styles.footerTexts, styles.loginBtn]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    main: { flex: 1 },
    mainContaienr: {
        flex: 1
    },
    headingContainer: {
        flex: 0.2,
        // backgroundColor: colors.grayNew,
        marginHorizontal: moderateScale(23),
        marginTop: 90,
    },
    heading: {
        fontSize: moderateScale(28),
        fontWeight: "bold",
        color: colors.Black,
    },

    userInfo: {
        // backgroundColor:"grey",
        flex: 0.5,
        marginTop: verticalScale(5),
        marginHorizontal: moderateScale(23)
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical:verticalScale(20),
        marginRight: moderateScale(20),
    },
    logo: {
        width: moderateScale(17.2),
        height: verticalScale(17.2),
        marginRight:moderateScale(15)
    },
    input: {
        fontSize: moderateScale(16),
        borderColor: colors.addressInputPlaceholder,
        borderBottomWidth: moderateScale(0.7),
        flex: 1,
    },
    otpContainer: {
        alignItems: "flex-end"

    },
    otpText: {
        fontSize: moderateScale(16),
        color: colors.purpleLike,
    },


    footer: {
        // backgroundColor:"grey",
        marginHorizontal: moderateScale(23),
        flex: 0.2,
    },


    button: {
        padding: scale(16),
        borderRadius: 15,
        backgroundColor: colors.purpleLike,
        // marginBottom: 70,
    },


    btnText: {
        color: "white",
        fontSize: moderateScale(16),
        fontWeight: "normal",
        fontFamily: "BalooThambiBold",
        alignSelf: "center"
    },


    footerTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: verticalScale(10),
    },
    footerTexts: {
        fontSize:moderateScale(20),
        fontFamily:"BalooThambi",
        color:colors.Black
    },
    loginBtn: {
        color: colors.purpleLike,
        marginLeft:moderateScale(5)
    }


})


export default Register;
