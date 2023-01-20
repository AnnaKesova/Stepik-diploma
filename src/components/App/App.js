import React from "react";
import "../App/app.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
