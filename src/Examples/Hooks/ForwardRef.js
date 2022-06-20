import React, { useRef, forwardRef } from "react";

export default function ForwardRef() {
  const inputRef = useRef();
  // const handleInputFocus = () => {
  //   const inputNode = inputRef.current;
  //   if (!inputNode.value.trim().length) {
  //     inputNode.focus();
  //     return;
  //   }
  //   alert(`Input Value - ${inputNode.value}`);
  // };
  return (
    <div>
      <h2>Forward Ref Example</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="enter name"
        style={{ marginRight: "10px" }}
      />
      {/* <button onClick={handleInputFocus}> Simple button</button> */}
      <ButtonComponent ref={inputRef} text="Button as component" />
    </div>
  );
}

/**
 * The above example works demonstrate the use of 'useRef' hook.
 * Now lets put that button and its on click handler into a seprate component.
 * ref is a special property that is being passed to Button component
 * you can't access this ref inside the Button component unless you wrap Button component
 * with forwardRef function.
 *
 *
 * Note : ref forwarding can also be achieved by passing ref as normal prop.
 * React forwarding is just another way of doing this
 *
 */

const ButtonComponent = forwardRef((props, ref) => {
  const handleInputFocus = () => {
    const inputNode = ref.current;
    if (!inputNode.value.trim().length) {
      inputNode.focus();
      return;
    }
    alert(`Input Value - ${inputNode.value}`);
  };
  return <button onClick={handleInputFocus}> {props.text}</button>;
});
