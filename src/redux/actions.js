import React from "react";
import { types } from "./types";
 

export function getFirstInputAction(firstInput){
    return{
        type: types.GET_FIRST_INPUT,
        payload: firstInput
    }
}


export function getSecondInputAction(secondInput){
    return{
        type: types.GET_SECOND_INPUT,
        payload: secondInput
    }
}

export function sumAction(firstInput, secondInput){
    return{
        type: types.SUMMARIZE,
        payload:  parseInt(firstInput) + parseInt(secondInput)
    }
}


export function diffAction(firstInput, secondInput){
    return{
        type: types.DIFFERENCE,
        payload:  parseInt(firstInput) - parseInt(secondInput)
    }
}

export function multAction(firstInput, secondInput){
    return{
        type: types.MULTIPLIES,
        payload:  parseInt(firstInput) * parseInt(secondInput)
    }
}


export function divAction(firstInput, secondInput){
    return{
        type: types.DIVISION,
        payload:  parseInt(firstInput) / parseInt(secondInput)
    }
}