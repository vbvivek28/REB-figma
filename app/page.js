'use client';

import Airport from './Components/Airport'
import Outstation from './Components/Outstation'

import Modes from './Components/SelectMode/Modes';
import Local from './Components/Local';
import { AppContextProvider } from './Components/Content/AppContext';
import MainUi from './Components/MainUi/main-ui';
import Navbar from './Components/Navbar';

export default function Home() {

  
  return (
   <>
  <AppContextProvider>
    <Navbar/>
    <MainUi/>
    
  </AppContextProvider>
      
    
   </>
  )
}
