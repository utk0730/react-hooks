import React, { useState, useRef, useEffect } from "react";

/**
 * useRef is used if you want to persist some value across rendering cycle.
 * A ref changing value doesn’t trigger a re-render
 * It is also used to access dom nodes.
 *
 */

export default function UseRef() {
  const [count, setCount] = useState(1);
  const prevCount = useRef(null);

  const handleCounterUpdate = () => {
    setCount((c) => {
      prevCount.current = c;
      return c + 1;
    });
  };

  return (
    <div>
      <h2>UseRef Example</h2>
      <p>
        useRef persists across rendering cycle. It returns a reference object
        that has a property current
      </p>
      <p>
        Lets use useRef to keep track prev Value of counter after counter update
      </p>
      <div>
        <p> Counter value : {`${count}`}</p>
        <p>Previous counter value : {`${prevCount.current}`}</p>
        <button onClick={handleCounterUpdate}>Update counter</button>
      </div>
    </div>
  );
}
