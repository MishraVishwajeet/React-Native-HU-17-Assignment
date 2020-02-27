import React from 'react';
import { State } from 'react-native-gesture-handler';
import { TOGGLE_TOKEN } from '../actions/login';
const initialState={
    token:"",
    email:"",
    password:""
};
const verifyReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case TOGGLE_TOKEN:
            return {...state,token:action.token}
        default: return State;
    }
}
export default verifyReducer;