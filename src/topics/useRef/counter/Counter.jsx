import { useRef } from "react";

export default function Counter() {
  console.log("rendering");
  let ref = useRef(0);

  function handleClick() {
    ref.current++;
    console.log(`You clicked ${ref.current} times`);
  }

  return <button onClick={handleClick}>Click me!</button>;
}
