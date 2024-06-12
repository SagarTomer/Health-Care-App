
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ViewBase } from 'react-native';
import LottieView from 'lottie-react-native';

const Loadingpage2 = ({navigation}) => {
    useEffect(()=>{
        
    const timer = setTimeout(() => {
        navigation.replace('Register');
      }, 1200);
      return () => clearTimeout(timer); 
    },[navigation])
  return(
<>

<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<LottieView source={require('./Images/animation2.json')} 
style={{height:100,width:100}}
autoPlay loop />
</View>

</>
  )}
export default Loadingpage2;