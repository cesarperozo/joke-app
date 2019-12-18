import React from "react";
import { List, Item } from "./styles";

const Statistics = ({ ranges }) => {
  return (
    <List>
      {ranges.map(range => {
        return (
          <Item key={range.color} color={range.color}>
            {range.clicks}
          </Item>
        );
      })}
    </List>
  );
};

export default Statistics;
