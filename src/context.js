import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://api.shrtco.de/v2/shorten?url=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [urlStr, setUrlStr] = useState("aaaa");
  const onUrlSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${urlStr}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return <AppContext.Provider>{children}</AppContext.Provider>;
  export const useGlobalContext = () => {
    return useContext(AppContext);
  };
};
