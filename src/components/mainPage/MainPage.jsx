import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFirstInputAction, getSecondInputAction, sumAction, diffAction, divAction, multAction } from '../../redux/actions'
import MainPageReducer from '../../redux/reducers/MainPageReducer'

export default function MainPage() {

    const {firstInput, secondInput, result} = useSelector(state => state.MainPageReducer)

    const dispatch = useDispatch()


    return(
        <div>
            <input onChange={(event) => dispatch(getFirstInputAction(event.target.value))   } type="text" placeholder='write the first number'/>
            <input onChange={(event) => dispatch(getSecondInputAction(event.target.value)) } type="text" placeholder='write the second number'/>
            <button onClick={() => dispatch(sumAction(firstInput, secondInput))}>+</button>
            <button onClick={() => dispatch(diffAction(firstInput, secondInput))}>-</button>
            <button onClick={() => dispatch(multAction(firstInput, secondInput))}>*</button>
            <button onClick={() => dispatch(divAction(firstInput, secondInput))}>/</button>

            <p>{result}</p>
            
        </div>
    )
}
