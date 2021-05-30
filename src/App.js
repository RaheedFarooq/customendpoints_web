import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Docs from "./components/docs";
import NewComp from "./components/newComp";
import Button from "./common/Button";

function App() {
  return (
    // <div className="flex flex-col h-screen justify-between">
    <div className="grid grid-cols-1 grid-rows-10 w-screen h-screen justify-between">
      <Header />
      
      <Home />

      {/* <Docs /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
