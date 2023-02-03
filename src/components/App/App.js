import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App/app.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import MainPoushkin from "../Main/MainPoushkin/MainPoushkin";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Routes>
          <Route exact path="/Stepik-diploma"
          element={<Main/>}>   
          </Route>
           <Route exact path="/poushkin" 
           element={<MainPoushkin/>}> 
           </Route> 
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
