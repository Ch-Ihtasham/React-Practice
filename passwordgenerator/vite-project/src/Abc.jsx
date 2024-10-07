import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // useCallback ensures the function is memoized, preventing it from being recreated on every render
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <ChildComponent onClick={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Increment</button>;
}

export default ParentComponent;
