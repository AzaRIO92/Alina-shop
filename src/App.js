import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  
  return <div>
    <Navbar/>
    <MainRoutes/>
  </div>;
};

export default App;

