import React from 'react';

export const TOGGLE_TOKEN='TOGGLE_TOKEN';

interface toggleTokenProps{
    token:String
}
export const toggleToken=(props:toggleTokenProps)=>{
    return {type:TOGGLE_TOKEN,token:props.token}
}