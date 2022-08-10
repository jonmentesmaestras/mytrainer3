import { useReducer } from "react"

const types = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
}

const reducer = (state, action) => {
    switch(action.type){
        case types.INCREMENT:
            return state+1
        case types.DECREMENT:
            return state-1
        case types.RESET:
            return 0
        default:
            return state
    }
    
}


const CounterApp = () => {
    //const [state, setState] = useState(initState)
    const [counter, dispatch] = useReducer(reducer, 0)

  return (
    <div>
        <h1>Clicks: {counter}</h1>
        <button onClick={()=>dispatch({type: types.INCREMENT})}>
            Increment
        </button>
        <button onClick={()=>dispatch({type: types.DECREMENT})}>
            Decrement
        </button>
        <button onClick={()=>dispatch({type: types.RESET})}>
            Reset
        </button>

    </div>
  )}

export default CounterApp