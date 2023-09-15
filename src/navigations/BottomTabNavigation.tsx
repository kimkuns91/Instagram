import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { MyPageScreen } from "../screens/MyPageScreen";
import { IconName } from "../components/Icons";
import { TabIcon } from "../components/TabIcon";

export type BottomTabParamList = {
    Home: undefined,
    MyPage: undefined,
}
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigation =()=>{
    return(
        <BottomTab.Navigator screenOptions={({ route })=>{  
            const getIconName = ():IconName =>{
                if(route.name === 'MyPage'){
                    return 'person'
                }
                return 'home'
            }
            const routeIconName = getIconName();
            return {
                headerShown: false,
                tabBarIcon:({ color })=>{
                    return(
                        <TabIcon 
                            visibleBadge={ false }
                            iconName = { routeIconName }
                            iconColor={ color }
                        />
                    )
                }
            }
        }}>
            <BottomTab.Screen name='Home' component={ HomeScreen }></BottomTab.Screen>
            <BottomTab.Screen name='MyPage' component={ MyPageScreen }></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}