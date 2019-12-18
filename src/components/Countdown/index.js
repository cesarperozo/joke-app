import React from "react";
import { CircleBox, Time } from "./styles";

const Countdown = ({ seconds }) => {
  return (
    <CircleBox>
      <Time> {seconds} </Time>
    </CircleBox>
  );
};

export default Countdown;
