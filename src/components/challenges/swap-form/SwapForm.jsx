import { useState } from "react";

export default function SwapForm() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field label="Last name" key="lname" />
        <Field label="First name" key="fname" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" key="fname" />
        <Field label="Last name" key="lname" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
