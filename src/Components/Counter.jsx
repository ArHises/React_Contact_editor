import { useEffect, useState } from 'react';

export function Counter({}) {
  const [counter, setCounter] = useState(0);
  
  const increase = () => {
    setCounter(counter => counter + 1);
  }
  
  const reset = () => {
    setCounter(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='counter'>
      <h2>Counter: {counter}</h2>
      <button onClick={increase}>increace</button>
      <button onClick={reset}>reset counter</button>
    </div>
  )
}