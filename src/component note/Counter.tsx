// src/components/Counter.tsx
import { useState, useEffect } from 'react';

interface CounterProps {
  initialValue?: number;
  step?: number;
}

export const Counter: React.FC<CounterProps> = ({ 
  initialValue = 0, 
  step = 1 
}) => {
  const [count, setCount] = useState<number>(initialValue);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    setHistory(prev => [...prev, count]);
  }, [count]);

  const increment = (): void => {
    setCount(prev => prev + step);
  };

  const decrement = (): void => {
    setCount(prev => prev - step);
  };

  const reset = (): void => {
    setCount(initialValue);
    setHistory([]);
  };

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h3>History:</h3>
        <ul>
          {history.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;