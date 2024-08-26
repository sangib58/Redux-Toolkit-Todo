import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {
  const count=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>
        Increment By Amount
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
