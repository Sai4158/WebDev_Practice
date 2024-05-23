import { Children, createContext, useContext, useState, useState } from "react";

const nameContext = createContext();
//use context
export const nameProvider = ({ children }) => {
  const [surprize, setsuprize] = useState("Apple");
  return (
    <nameContext.Provider value={{ surprize, setsuprize }}>
      {Children}
    </nameContext.Provider>
  );
};

export const useData = () => useContext(nameContext);
