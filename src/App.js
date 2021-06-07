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
  console.log("%c If you like this app, please give us a shout-out on LinkedIn","text-shadow: 0 0 10px #fff,0 0 20px #fff,0 0 30px #fff,0 0 40px #41F9FB,0 0 70px #41F9FB,0 0 80px #41F9FB,0 0 100px #41F9FB,0 0 150px #41F9FB;padding:20px;font-size:30px;color:#fff;background:#000")

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
              {/* <div
                className=" col-span-1 sm:col-span-3 md:col-span-4 "
                style={{ height: "inherit" }}
              ></div> */}

              {/* <button className="hidden md:block col-span-2 md:col-span-1 bg-prefered-shade2 mx-3 p-1">
                Support Us
              </button> */}
              {/* <div className="col-span-1 px-5">
                <button className="focus:outline-none w-12 md:w-16 h-12 md:h-12 float-right" onClick={()=>setSupport(!support)}>
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://img.icons8.com/cotton/2x/like.png"
                  alt=""
                  ></img>
              </button>
              </div> */}

              {/* {support && (
                <>
                  <div
                    class="origin-top-right absolute right-0 top-14 right-0 mr-0 md:right-5 mt-2 rounded-md shadow-lg bg-prefered-neon ring-1 ring-black ring-opacity-5 focus:outline-none max-w-xs h-auto	"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="" role="none">
                      <img
                        src="https://i.ytimg.com/vi/9XfkZlcG8KU/maxresdefault.jpg"
                        className="rounded-lg border border-5"
                      />
                      <div className="text-center p-2 font-medium text-prefered-dark">
                        If you found this site useful, please give us a Shout
                        out on LinkedIn
                      </div>
                    </div>
                  </div>
                </>
              )} */}
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
    </BrowserRouter>
  );
}

export default App;
