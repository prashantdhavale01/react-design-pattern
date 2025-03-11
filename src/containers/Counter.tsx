import useCounter from '../hooks/useCounter'

const Counter = () => {

  const {count, increment, decrement,reset} = useCounter(0);

  return (
    <>
      <div>Counter {count}</div>
      <button className='border-1 m-2 p-2 bg-gray-50' type='button' onClick={increment}>Increment</button>
      <button className='border-1 m-2 p-2 bg-gray-50' type='button' onClick={decrement}>Decrement</button>
      <button className='border-1 m-2 p-2 bg-gray-50' type='button' onClick={reset}>Reset</button>
    </>
  )
}

export default Counter