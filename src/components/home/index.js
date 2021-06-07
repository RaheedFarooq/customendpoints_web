import { useRef, useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { saveDataToStore } from "../../api";
import "./styles.scss";
import { generateHash, jsonCreator } from "./transformer";
// import LeftSidebar from "../left_sidebar";
import Button from "../../common/Button";
import "./styles.scss";
import { CODE_SAMPLES, UNCHANGED_JSON } from "../docs/constants";
import NewComp from "../newComp";
// var encoder = require("object-encrypt-decrypt");

export const Home = () => {
  const [val, setValue] = useState("");
  const [error, setError] = useState(null);
  const [url, setURL] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 2500);
    }
  }, [error]);

  const checkValueType = (value) => {
    try {
      setError(null);
      value = typeof value == "object" ? Object.keys(value) : JSON.parse(value);
      let hash = generateHash(value);
      generateUrl(hash, value);
    } catch (e) {
      console.log(e);
      setError(
        "Unable to Parse Input, please make sure the Input is a valid JSON "
      );
    }
  };

  const generateUrl = async (hash, object) => {
    let databaseId = await saveDataToStore({ hash, object });
    // setIsLoading(false);
    setURL(`${process.env.REACT_APP_BACKEND_URL}/${databaseId}`);
  };

  return (
    <section className="home col-span-full row-span-9 pt-4 lg:pt-8">
      {error && (
          <span className="absolute bg-red-700 text-prefered-white p-4 rounded-xl top-1">
            {error}
          </span>
        )}
      {url ? (
        <>
        <div className="response-area" style={{height:'80vh'}}>
          <NewComp url={url} onError={(error)=>setError(error) }/>
        </div>
        <Button
          text="GO BACK"
          onClick={() => setURL('')} />
        </>
      ) : (
      <>
        <div className="code-area">
          <div className="code-editor">
            <textarea
              ref={inputRef}
              className="code-text"
              id="input-textarea"
              placeholder="Enter JSON here"
              value={val}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="w-full h-auto">
              {UNCHANGED_JSON.map((customType) => (
                <button
                  key={customType.heading}
                  className="underline text-xs md:text-base tracking-wider mx-2 leading-normal font-normal cursor-pointer text-prefered-light"
                  onClick={() => {
                    try {
                      let jsonString = jsonCreator(
                        customType.code,
                        val ? JSON.parse(val) : null
                      );
                      setValue(jsonString);
                    } catch (e) {
                      console.log("caught an error");
                      setError(
                        "Oops! Please make sure the text currently in the editor below is in correct JSON Format"
                      );
                    }
                  }}
                >
                  {customType.heading}{" "}
                </button>
              ))}
            </div>
          </div>
          <div className="code-options-area">
            <p className="col-span-full para-text">
              You can create your JSON using the options below
            </p>
            {CODE_SAMPLES.map((dataType) => (
              <button
                key={dataType.heading}
                className="code-buttons"
                onClick={() => {
                  try {
                    let jsonString = jsonCreator(
                      dataType.code,
                      val ? JSON.parse(val) : null
                    );
                    setValue(jsonString);
                  } catch (e) {
                    console.log("caught an error");
                    setError(
                      "Oops! Please make sure the text currently in the editor below is in correct JSON Format"
                    );
                  }
                }}
              >
                {dataType.heading}
              </button>
            ))}
          </div>
        </div>
        <Button
          text="GENERATE"
          onClick={() => {
            checkValueType(val);
            // setIsLoading(true);
          }}
        />
        <footer className="w-screen bg-prefered-dark text-prefered-white text-center h-auto py-2 mt-2 tracking-wide shadow-md	ring-2 ring-prefered-neon" >
              Made with 💟 by <a href="https://www.linkedin.com/in/raheed-farooq/" rel="noreferrer" target="_blank"><strong> Raheed Farooq </strong></a>
            </footer>
      </>
    )}
    </section>
  );
};
