import React from "react";
// import Index from './Components/Project_1/Index';
import Index from "./Components/Project_23/Index";
import { AppProvider } from "./Components/Project_23/context";



const App = () => {
  return (
  
    <AppProvider>
      <Index />
    </AppProvider>
   
      // <Index/>
  );
};

export default App;
