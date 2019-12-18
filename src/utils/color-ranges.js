import colors from "../styles/colors";
import { randomClicksCount } from "./time";

const COLOR_RANGES = [
  {
    min: 0,
    max: 11,
    color: colors.red,
    clicks: randomClicksCount()
  },
  {
    min: 12,
    max: 21,
    color: colors.orange,
    clicks: randomClicksCount()
  },
  {
    min: 22,
    max: 31,
    color: colors.yellow,
    clicks: randomClicksCount()
  },
  {
    min: 32,
    max: 41,
    color: colors.green,
    clicks: randomClicksCount()
  },
  {
    min: 42,
    max: 51,
    color: colors.blue,
    clicks: randomClicksCount()
  },
  {
    min: 52,
    max: 60,
    color: colors.purple,
    clicks: randomClicksCount()
  }
];

export default COLOR_RANGES;
