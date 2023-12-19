'use client';
import React from 'react';
import { useAppContext } from '../Content/AppContext';

function Modes() {
  const { mode, changeMode } = useAppContext();

  return (
    <>
      <div className='flex justify-center'>
        
        <button onClick={() =>changeMode("Outstation")} className={`m-2 w-36 shadow-md text-white rounded-md p-1.5 ${mode === "Outstation" ? "bg-[#38B000] text-white" : "bg-white text-[#7d7d7d]"}`}> Outstation </button>
        
        <button onClick={() =>changeMode("Local")} className={`m-2 w-36 shadow-md text-white rounded-md p-1.5 ${mode === "Local" ? "bg-[#38B000] text-white" : "bg-white text-[#7d7d7d]"}`}> Local </button>
        
        <button onClick={() => changeMode("Airport")} className={`m-2 w-36 shadow-md text-white rounded-md p-1.5 ${mode === "Airport" ? "bg-[#38B000] text-white" : "bg-white text-[#7d7d7d]"}`}> Airport </button>
      
      </div>
    </>
  );
}

export default Modes;
