import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

export const Icon: React.FC<PropsType> = (props) => {
    return (
        <svg width={props.width || "16"}
             height={props.height || "16"}
             viewBox={props.viewBox || "0 0 16 16"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};


type PropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
