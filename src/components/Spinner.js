import * as React from "react";
import { cssValue } from "../helper/unitConverter";
import { createAnimation } from "../helper/animation";
import './Spinner.css';

const scale = createAnimation(
  "ScaleLoader",
  "0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}",
  "scale"
);

const ScaleLoader = ({
  loading = true,
  color = "#6265fb",
  speedMultiplier = 1,
  cssOverride = {},
  height = 35,
  width = 4,
  radius = 2,
  margin = 2,
  ...additionalprops
}) => {
  const wrapper = {
    display: "inherit",
    ...cssOverride,
  };

  const style = (i) => {
    return {
      backgroundColor: color,
      width: cssValue(width),
      height: cssValue(height),
      margin: cssValue(margin),
      borderRadius: cssValue(radius),
      display: "inline-block",
      animation: `${scale} ${1 / speedMultiplier}s ${i * 0.1}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
      animationFillMode: "both",
    };
  };

  if (!loading) {
    return null;
  }

  return (
    <span id="loader-container" style={wrapper} {...additionalprops}>
      <span style={style(1)} />
      <span style={style(2)} />
      <span style={style(3)} />
      <span style={style(4)} />
      <span style={style(5)} />
    </span>
  );
};

export default ScaleLoader;
