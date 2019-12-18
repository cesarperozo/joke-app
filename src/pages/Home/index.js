import React, { useState, useEffect } from "react";
import Countdown from "../../components/Countdown";
import StopButton from "../../components/StopButton";
import SouvenirColor from "../../container/SouvenirColor";
import colors from "../../styles/colors";
import useCountdown from "../../hooks/useCountdown";
import Statistics from "../../components/Statistics";
import COLOR_RANGES from "../../utils/color-ranges";
import useInterval from "../../hooks/useInterval";
import { randomDelay } from "../../utils/time";

const HomePage = () => {
  const [seconds, reset] = useCountdown(60);
  const [delay, setDelay] = useState(randomDelay());
  const [color, setColor] = useState(colors.grey);

  const handleStopButtonClick = () => {
    const color = resetCounterAndIncrement();
    setColor(color);
  };

  const resetCounterAndIncrement = () => {
    reset();
    let color = null;
    COLOR_RANGES.forEach(range => {
      if (range.min <= seconds && range.max >= seconds) {
        range.clicks += 1;
        color = range.color;
      }
    });

    return color;
  };

  useInterval(() => {
    setDelay(randomDelay());
    resetCounterAndIncrement();
  }, delay);

  return (
    <SouvenirColor color={color}>
      <Countdown seconds={seconds} />
      <StopButton onButtonClick={handleStopButtonClick} />
      <Statistics ranges={COLOR_RANGES} />
    </SouvenirColor>
  );
};

export default HomePage;
