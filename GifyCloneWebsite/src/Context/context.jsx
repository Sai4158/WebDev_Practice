import { createContext } from "react";

const Gifcontext = createContext();

const GifProvider = ({ children }) => {
  return <GifContext.GifProvider> {children}</GifContext.GifProvider>;
};

export default GifProvider;
