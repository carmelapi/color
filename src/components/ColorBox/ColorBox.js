import { HuePicker } from "react-color";
import { useContext } from "react";
import { ColorContext } from "./colorProvider";
import "./ColorBox.css";

function ColorBlock() {
  const { color, handleColorChange } = useContext(ColorContext);

  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <HuePicker color={color} onChange={handleColorChange}></HuePicker>
      <h2 className="hex-info">{color}</h2>
    </div>
  );
}
export default ColorBlock;
