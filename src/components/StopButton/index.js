import React, { useState } from "react";
import { Button, ButtonBox } from "./styles";

const StopButton = ({ onButtonClick }) => {
  const [disabled, setDisabled] = useState(false);
  const handleButtonClick = () => {
    onButtonClick();
    setDisabled(true);
  };

  return (
    <ButtonBox>
      <Button disabled={disabled} onClick={handleButtonClick}>
        ¡Click Me!
      </Button>
    </ButtonBox>
  );
};

export default StopButton;
