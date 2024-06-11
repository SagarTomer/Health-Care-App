import React, { useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2000);

    return () => clearTimeout(timer); 
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.MainContainer}>
      <Animated.View style={[styles.circleContainer, { opacity: fadeAnim }]}>
        <Text style={styles.textStyle}>
          HealthCare
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  circleContainer: {
    backgroundColor: "#5391B4",
    width: "50%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    fontFamily: "BalooThambi",
  },
});

export default SplashScreen;