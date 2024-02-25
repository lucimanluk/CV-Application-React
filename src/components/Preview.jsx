import { useState } from "react";

function Preview({ name }) {
  const [value, setValue] = useState("+");

  function handleClick() {
    if (value === "+") {
      setValue("-");
    } else {
      setValue("+");
    }
  }

  return (
    <div className="w-full flex justify-between px-1.5">
      <h1 className="text-white">{name}</h1>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
}

export default Preview;
