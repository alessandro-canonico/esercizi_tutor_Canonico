import { useState, useEffect, useRef } from 'react';

export function Counter ({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef(null);
  const previousDirectionRef = useRef(null);

  function increment () {setCount(count + 1)};
  function decrement () {setCount(count - 1)};

  useEffect(() => {
    if (count > initialValue) {
      directionRef.current = 'up';
    } else if (count < initialValue) {
      directionRef.current = 'down';
    } else {
      directionRef.current = null;
    }
    
    if (directionRef.current !== previousDirectionRef.current) {
      console.log(directionRef.current);
      previousDirectionRef.current = directionRef.current;
    }
  }, [count, initialValue]);


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
