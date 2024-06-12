
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "./Colors";



export const Prescription = () => {


    return (
        <>

            <View style={{ flex: 1 }}>
                <View >
                    <View style={styles.container}>
                        <TouchableOpacity>
                            <Image style={styles.iamge}
                                source={require('./Images/tripleLine.png')}
                            />
                        </TouchableOpacity>

                        <Image
                            style={[styles.iamge, { marginLeft: moderateScale(30) }]}
                            source={require('./Images/logo.png')}
                        />
                        <View
                            style={styles.mic_container}
                        >
                            <TouchableOpacity>
                                <Image

                                    source={require('./Images/mic_logo.png')}
                                />
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={styles.secondContainer}>
                        <TouchableOpacity style={styles.boxContainer}>
                            <Text style={styles.boxContent}>
                                Questions
                            </Text>
                            <Image
                                source={require('./Images/QuestionMark.png')}
                            />
                            <View style={styles.box}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxContainer}>

                            <Text style={styles.boxContent}>
                                Reminder
                            </Text>


                            <Image
                                source={require('./Images/Reminder.png')}
                            />

                            <View style={styles.box}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.secondContainer}>
                        <TouchableOpacity style={styles.boxContainer}>
                            <Text style={styles.boxContent}>
                                Messages
                            </Text>
                            <Image
                                source={require('./Images/message.png')}
                            />
                            <View style={styles.box}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxContainer}>

                            <Text style={styles.boxContent}>
                                Calender
                            </Text>


                            <Image
                                source={require('./Images/calender.png')}
                            />

                            <View style={styles.box}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={styles.upload}>
                            UPLOAD PRESCRIPTION
                        </Text>
                        <Text style={styles.uploadDetails}>
                            Upload a Prescription and Tell Us What  you Need. We do the Rest. !
                        </Text>

                    </View>
                    <View style={styles.middleContainer2}>
                        <Text style={{ maxWidth: moderateScale(100), fontFamily: "BalooThambi", color: colors.Black, fontSize: moderateScale(15) }}>
                            Flat 25% OFF ON MEDICINES
                        </Text>
                        <TouchableOpacity style={styles.orderNow}>
                            <Text style={{ fontSize: moderateScale(16), fontFamily: "BalooThambi", color: colors.White }}>
                                ORDER NOW
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LastConatiner1}>
                        <View style={styles.lastSubConatiner1}>
                            <Text style={styles.medicalText}>
                                Get the Best
                                Medical Service
                            </Text>
                            <Text style={styles.medicalText2}>
                                Rem illum facere quo corporis Quis in saepe itaque ut quos pariatur. Qui numquam rerum hic repudiandae rerum id amet tempore nam molestias omnis qui earum voluptatem!
                            </Text>

                        </View>
                        <View style={styles.lastSubConatiner2}>
                            <Image
                                source={require('./Images/doctor.png')}
                            />
                        </View>

                    </View>
                    {/* <View style={styles.lastConatiner2}>
                        <Text style={{
                            fontFamily: 'BalooThambi',
                            fontSize: moderateScale(15),
                            marginLeft: moderateScale(20),
                            marginTop: moderateScale(10),
                            color: colors.Black
                        }}>
                            Upto
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'BalooThambi',
                                fontSize: moderateScale(20),
                                marginLeft: moderateScale(20),
                                // marginTop:moderateScale(10),
                                color: colors.Black
                            }}

                        >
                            80%
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'BalooThambi',
                                fontSize: moderateScale(20),
                                marginLeft: moderateScale(20),
                                // marginTop:moderateScale(10),
                                color: colors.Black
                            }}

                        >
                            Offer
                        </Text>

                        <Image
                            style={{
                                position: "absolute",
                                right: moderateScale(20),
                                marginTop: moderateScale(10)
                            }}
                            source={require('./Images/medicne.png')}
                        />
                        <TouchableOpacity style={styles.ShopNow}>
                            <Text style={{ fontSize: moderateScale(16), fontFamily: "BalooThambi", color: colors.White }}>
                                ORDER NOW
                            </Text>
                        </TouchableOpacity>
                    </View> */}

                </View>
            </View>

        </>


    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: verticalScale(20),
        textAlign: "center",
        // backgroundColor:"green"

    },
    iamge: {
        marginLeft: moderateScale(10),
        height: verticalScale(30),
        width: moderateScale(30),
    },
    mic_container: {
        borderWidth: 1,
        height: verticalScale(30),
        width: moderateScale(30),
        position: "absolute",
        right: moderateScale(10),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        overflow: "hidden"
    },
    secondContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(20),

    },
    boxContainer: {
        width: '45%',
        height: verticalScale(40),
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: moderateScale(10),
        flexDirection: "row",
        alignItems: "center",

    },
    boxContent: {
        fontSize: moderateScale(20),
        marginLeft: moderateScale(10),
        fontFamily: "BalooThambi",
        color: colors.Black

    },
    middleContainer: {
        marginLeft: moderateScale(20),
        marginTop: verticalScale(20),


    },
    upload: {
        fontFamily: "BalooThambiBold",
        fontSize: moderateScale(20),
        color: colors.Black

    },
    uploadDetails: {
        fontFamily: "BalooThambi",
        color: colors.Black,
        marginTop: verticalScale(8),
        fontSize: moderateScale(16)
    },
    middleContainer2: {
        // backgroundColor:"lightgreen",
        flexDirection: "row",
        marginTop: verticalScale(15),
        marginLeft: moderateScale(20),
        height: verticalScale(50),
        // justifyContent:"center",
        alignItems: "center"



    },
    orderNow: {
        position: "absolute",
        right: moderateScale(35),
        backgroundColor: "#1C82DF",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: verticalScale(5),
        padding: scale(10),

    },
    LastConatiner1: {
        flexDirection: "row",
        marginHorizontal: moderateScale(10),
        backgroundColor: "#C8F5C4",
        height: verticalScale(150),
        marginTop: verticalScale(15),
        borderRadius: 10

    },
    lastSubConatiner1: {
        width: "70%",
        marginLeft: moderateScale(15),
        marginTop: moderateScale(5)



    },
    lastSubConatiner2: {
        width: "30%",
        // backgroundColor: "red"
    },
    medicalText: {
        fontFamily: "BalooThambi",
        color: colors.Black,
        fontSize: moderateScale(16),
        maxWidth: moderateScale(120)
    },
    medicalText2: {
        fontFamily: "BalooThambi",
        color: colors.Black,
        textAlign: "justify"
    },
    lastConatiner2: {
        // flexDirection: "row",
        marginHorizontal: moderateScale(10),
        backgroundColor: "#C8F5",
        height: verticalScale(150),
        marginTop: verticalScale(15),
        borderRadius: 10
    },
    ShopNow: {
        // position: "absolute",
        // right: moderateScale(35),
        backgroundColor: "#1C82DF",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: verticalScale(5),
        padding: scale(10),
        position: "absolute",
        bottom: verticalScale(10),
        left: moderateScale(10),
        marginBottom: verticalScale(20)

    }


})