import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet,Image } from 'react-native';
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';
import { TextInput } from 'react-native-paper';

const LoginPage = ({navigation}) => {
    return (

        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Login
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.subHeading}>
                    <Text style={styles.title}>Healthcare</Text>
                </View>
                <View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image
                        source={require('./Images/email.png')}
                        style={{height:20,width:20,marginLeft:moderateScale(5)}}
                        
                        />
                    <Text style={styles.EmailText}></Text>
              
                    </View>
                   
                    <TextInput
                        label="Email"
                        mode="outlined" 
                        outlineColor="#000000" 
                        selectionColor='#000000'
                        style={styles.input}
                    />
                </View>
                <View style={{marginTop:moderateScale(20)}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image
                        source={require('./Images/lock.png')}
                        style={{height:20,width:20,marginLeft:moderateScale(5)}}
                        
                        />
                    <Text style={styles.EmailText}></Text>
              
                    </View>
                    <TextInput
                        label="Password"
                        mode="outlined" 
                        // outlineColor="#000000" 
                        // selectionColor='#000000'
                        style={styles.input}
                        
                    >
                    </TextInput>
                </View>

                <View style={styles.forgotContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot Password !</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={styles.donthaveText}>
                        Don't Have an Account :
                    </Text>
                    <TouchableOpacity
                     onPress={()=>{ navigation.navigate('loadingScreen2');}}
                    >
                        <Text style={styles.register}>
                            Click here to register
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.loginButtonView}>
                <TouchableOpacity 
                onPress={()=>{ navigation.navigate('loadingScreen');}}
                style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(10),
    },
    title: {
        fontSize: moderateScale(20),
        marginBottom: verticalScale(20),
        fontFamily: "BalooThambiBold",
        fontSize: moderateScale(30),
        color: "#000000"
    },
    input: {
        width: scale(300),
        height: verticalScale(50),
        borderRadius: moderateScale(5),
        paddingHorizontal: moderateScale(10),
        marginBottom: verticalScale(10),
        justifyContent:"space-between",
    },
    forgotPassword: {
        color: '#04238E',
    },
    register: {
        color: '#04238E',
        marginLeft: moderateScale(5)
    },
    loginButton: {
        backgroundColor: '#5391B4',
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(10),
        marginVertical: verticalScale(10),
        marginHorizontal: moderateScale(10),
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: "BalooThambi",
        fontSize: moderateScale(25)
    },
    header: {
        // backgroundColor:"red",
        alignItems: "center",
        marginTop: verticalScale(30),
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),

    },
    loginButtonView: {
        flex: 0.4,
        justifyContent: "center",
        // backgroundColor:"green"
    },
    headerText: {
        fontSize: moderateScale(24),
        fontFamily: "BalooThambi",
        color: "#000000"
    },
    subHeading: {
        // backgroundColor:"green",
        width: "100%",
        flex: 0.3,
        alignItems: "center"

    },
    forgotContainer: {
        alignItems: "flex-end",
        flex: 0.1,
        width: "100%",
        marginRight: moderateScale(10),
        // backgroundColor:"red",
        paddingVertical: verticalScale(5),
    },
    registerContainer: {
        flexDirection: "row",
        marginTop: verticalScale(20),
        // backgroundColor:"green",
        width: "100%",
        height: "auto",
        justifyContent: "center"

    },
    donthaveText: {
        color: "#000000",
        fontFamily: "BalooThambiBold"
    },
    EmailText:{
        marginLeft:moderateScale(5),
         fontFamily:"BalooThambiBold",
         fontSize:15,
         color:"#000000",
    }
});

export default LoginPage;
