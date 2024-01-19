import React, { useState } from "react";

const Accordion = ({ controllerElement, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div onClick={() => setIsActive((prevIsActive) => !prevIsActive)}>
        {controllerElement(isActive)}
      </div>
      {isActive && <div>{children}</div>}
    </>
  );
};

export default Accordion;
