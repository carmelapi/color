import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#ffffff"); // Imposta un valore iniziale per il colore

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <ColorContext.Provider value={{ color, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

//In this file, I'm creating a ColorContext and a ColorProvider.
//The provider wraps the components and allows them to access context data (color and handleColorChange).
