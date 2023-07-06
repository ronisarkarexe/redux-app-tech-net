import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex mt-5 ml-10">
      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        incrementByAmount
      </button>
      <div className="p-4">{count}</div>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
