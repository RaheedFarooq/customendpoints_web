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
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="main absolute inset-0	bg-prefered-black">
            <div className="h-10p bg-prefered-dark"></div>

            <div className="code-area h-90p ">
              <textarea
                className="textarea bg-prefered-black"
                placeholder="Enter JSON here ( SEE THE DOCS for help )"
              />
            </div>
            <button type="button" className="submit-button">
              CREATE
            </button>
          </div>
        </Route>

        <Route exact path="/v2">
          {/* <div className="flex flex-col h-screen justify-between"> */}
          <div className="grid grid-cols-1 grid-rows-10 w-screen h-screen justify-between">
            <Header />
            <Home />
            {/* <Docs /> */}
            {/* <Footer /> */}
          </div>
        </Route>
        <Route exact path="/v3">
          <div className="grid grid-cols-1 grid-rows-10 w-screen h-screen justify-between">
          <header className="h-full bg-prefered-black"></header>
            <Home />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
