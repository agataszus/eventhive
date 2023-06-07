import { useState } from "react";
import { ButtonColor } from "./types";

type UseButtonColorProps = {
  initialColor: ButtonColor;
};

export const useButtonColor = ({ initialColor }: UseButtonColorProps) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    setColor("green");
  };

  return { color, changeColor };
};
