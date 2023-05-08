import { React, useState } from "react";

function useImput() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return { onChange: onChange, value: value };
}

export default useImput;
