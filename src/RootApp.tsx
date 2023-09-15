import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Typography } from "./components/Typography";
import { NavigationContainer } from "@react-navigation/native";
import { RootStacknavigation } from "./navigations/RootStacknavigation";
import { SplashView } from "./SplashView";

export const RootApp:React.FC = (props)=>{
    const [ initialize, setInitialize ] = useState(false);
    if(!initialize) return (
        <SplashView 
            onFinishLoad={()=> setInitialize(true)}
        />
    )
    return(
        <NavigationContainer>
            <RootStacknavigation />
        </NavigationContainer>
    )
}