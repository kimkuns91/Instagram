import React from 'react';
import {Image as RNImage, ImageProps, StyleProp, ImageStyle} from 'react-native';

export const RemoteImage:React.FC<{
    url:string,
    style?:StyleProp<ImageStyle>,
    width:number,
    height:number,
}> = (props)=>{
    return (
        <RNImage 
            source={{uri:props.url}}
            style={[props.style, {width:props.width, height:props.height}]}
        />
    )
}