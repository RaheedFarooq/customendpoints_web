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
    // <div className="flex flex-col">
    //   <Header />
    //   <section className="home">
    //     <p>
    //       Describe the Structure of the JSON you would expect in the API's
    //       response
    //     </p>
    //     <textarea
    //       className="text-area text-area-focus bg-gray-100 resize-none m-auto"
    //       id="input-textarea"
    //       placeholder="Enter JSON here ( SEE THE DOCS for help )"
    //     />
    //     <Button text="GENERATE" />
    //   </section>

    //   <Docs/>
    //   <Footer />
    // </div>
    <Home/>
  );
}

export default App;
