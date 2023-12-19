'use client';
import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};


export const AppContextProvider = ({ children }) => {

const[mode,setMode]=useState("Outstation")

const changeMode=(value)=>{
    setMode(value)
}


  return (
    <AppContext.Provider value={ {mode,changeMode}  }>
      {children}
    </AppContext.Provider>
  );
};
