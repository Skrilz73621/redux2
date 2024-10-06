import React from 'react'
import { types } from '../types'

const initialState = {
    firstInput: '',
    secondInput: '',
    result: 0
}

export default function MainPageReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_FIRST_INPUT:
            return { ...state, firstInput: action.payload }

        case types.GET_SECOND_INPUT:
            return { ...state, secondInput: action.payload }

        case types.SUMMARIZE :
            return { ...state, result: action.payload }

        case types.DIFFERENCE:
            return { ...state, result: action.payload }

        case types.MULTIPLIES:
            return { ...state, result: action.payload }

        case types.DIVISION:
            return { ...state, result: action.payload }



        default: return state
    }

}
