import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../actions'
import { ReducerType } from '../reducers'

const Counter = () => {

    const counter = useSelector((state: ReducerType) => state.counter)
    const dispatch = useDispatch()

    return (
        <div className='counter'>
            <h1>Counter</h1>
            <button onClick={() => dispatch(decrement(2))}>
                -
            </button>
            <span>{counter}</span>
            <button onClick={() => dispatch(increment(2))}>
                +
            </button>
        </div>
    )
}

export default Counter
