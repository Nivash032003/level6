import React, { useState, useCallback } from 'react';


const ChildComponent = React.memo(({ onAction }) => {
  console.log('ChildComponent rendered');
  return (
    <div>
      <button onClick={onAction}>Perform Action</button>
    </div>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);


  const handleAction = useCallback(() => {
    console.log('Action performed');
  }, 
  []
);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent onAction={handleAction} />
    </div>
  )
}

export default ParentComponent
