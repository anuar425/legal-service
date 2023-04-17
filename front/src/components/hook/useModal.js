import { useState } from "react";

function useModal() {
  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible(!visible);
  }

  return { visible, toggle };
}

export default useModal;
