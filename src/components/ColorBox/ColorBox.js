import { HuePicker } from "react-color";
import { useContext } from "react";
import { ColorContext } from "./colorProvider";
import "./ColorBox.css";

function ColorBlock() {
  const { color, handleColorChange } = useContext(ColorContext);

  //   const mixColor = chroma.mix(color1, color2).hex();
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <HuePicker color={color} onChange={handleColorChange}></HuePicker>
      <h2 className="hex-info">{color}</h2>
    </div>

    //     <div className="color-box">
    //       <div className="boxbox" style={{ backgroundColor: color }}>
    //         <HuePicker
    //           className="picker"
    //           color={color}
    //           onChange={handleColorChange}
    //         />
    //         <h2 className="hex-info">{color}</h2>
    //       </div>
    //     </div>
  );
}
export default ColorBlock;
