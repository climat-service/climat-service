import { useState } from "react";

const useInput = (initial: any) => {
  const [state, setState] = useState(initial);
  const onChange = (e: any) => {
    setState(e.target.value);
  };
  return [state, onChange];
};

export default useInput;
