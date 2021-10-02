import logo from "./logo.png";
// import logo from "./mock-apis.png";
import "./App.scss";
// import { useState } from "react";
import { Header } from "./components/header";
// import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Docs from "./components/docs";
// import NewComp from "./components/newComp";
// import Button from "./common/Button";

function App() {
  console.log(`%c If you found this site useful, please give ME a shout-out on LinkedIn.
  https://www.linkedin.com/in/raheed-farooq/ 
  THANKS :)`, "text-shadow: 0 0 10px #fff,0 0 20px #fff,0 0 30px #fff,0 0 40px #41F9FB,0 0 70px #41F9FB,0 0 80px #41F9FB,0 0 100px #41F9FB,0 0 150px #41F9FB;padding:20px;font-size:30px;color:#fff;background:#000")

  // const [support, setSupport] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="grid grid-cols-1 grid-rows-10 w-screen h-screen justify-between">
            <header className="bg-prefered-black grid grid-cols-1 gap-0 items-center">
              <div
                className=" col-span-4 sm:col-span-full "
                style={{
                  height: "inherit",
                  overflow: "clip",
                  objectFit: "cover",
                }}
              >
                <img className="h-full m-auto mt-2" src={logo} alt="logo" />
              </div>
            </header>
            <Home />

          </div>
        </Route>

        <Route exact path="/v1">
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
      </Switch>
      <footer className="w-screen bg-prefered-dark text-prefered-white text-center h-auto py-2 mt-2 tracking-wide shadow-md	ring-2 ring-prefered-neon fixed bottom-0" >
        Made with 💟 by <a href="https://www.linkedin.com/in/raheed-farooq/" rel="noreferrer" target="_blank"><strong> Raheed Farooq </strong></a>
      </footer>
    </BrowserRouter>
  );
}

export default App;
