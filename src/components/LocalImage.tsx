import React from 'react';
import { ImageProps, Image as RNImage, StyleProp } from 'react-native';

export const LocalImage:React.FC<{
    localAsset: number,
    style?:StyleProp<ImageProps>,
    width: number,
    height: number,
}> = (props)=>{
    return (
        <RNImage 
            source={props.localAsset} 
            style={[props.style, {
                width:props.width, height:props.height
            }]}
        />
    )
}