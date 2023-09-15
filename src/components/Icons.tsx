import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export type IconName = keyof typeof Ionicons.glyphMap;

export const Icon:React.FC<{
    name: IconName,
    size: number,
    color: string
}> = (props) => {

    return (
        <Ionicons 
            name={props.name} 
            size={props.size} 
            color={props.color}
        />
    )
}