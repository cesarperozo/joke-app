import { useEffect, useState } from "react";

const useCountdown = (initialSeconds = 60) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds < 0) {
      setSeconds(initialSeconds);
      return;
    }

    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const reset = () => {
    setSeconds(initialSeconds);
  };

  return [seconds, reset];
};

export default useCountdown;
