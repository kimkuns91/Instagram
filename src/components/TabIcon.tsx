import React from 'react';
import { Badge } from './Badge';
import { Icon, IconName } from './Icons';

export const TabIcon:React.FC<{
    visibleBadge: boolean,
    iconName: IconName,
    iconColor: string,
}> = (props)=>{
    if(props.visibleBadge){
        return (
            <Badge>
                <Icon 
                    name={props.iconName} 
                    size={20} 
                    color={props.iconColor}/>
            </Badge>
        )
    }

    return (
        <Icon 
            name={props.iconName} 
            size={20} 
            color={props.iconColor}/>
    )
}