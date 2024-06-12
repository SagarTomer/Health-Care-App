import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "./Homepage";
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from "./Colors";
import { Prescription } from "./prescriptionpage";

const Tab= createBottomTabNavigator();


export const HomepageTab=()=>{
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor:"#47C2C4",
            tabBarInactiveTintColor:colors.Black
            
        }}
        >
            <Tab.Screen
            name="Homepage"
            component={HomePage}
            options={{headerShown:false,
            }}
            />
            <Tab.Screen
            name="Prescription"
            component={Prescription}
            options={{headerShown:false}}
            />
        </Tab.Navigator>
    )
}