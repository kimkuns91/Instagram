import React, { useEffect } from "react";
import { View } from "react-native";
import { Typography } from "./components/Typography";

export const SplashView:React.FC<{ onFinishLoad:()=>void }> = (props)=>{
    useEffect(()=>{
        setTimeout(() => {
            props.onFinishLoad()
        }, 1000);
    })
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Typography fontSize={ 36 }>SPLASH VIEW</Typography>
        </View>
    )
}