import { useState } from "react";
import { useHistory } from "react-router-dom";
import { saveDataToStore } from "../../api";
import "./styles.scss";
import { generateHash } from "./transformer";
import LeftSidebar from '../left_sidebar';
var encoder = require("object-encrypt-decrypt");

export const Home = () => {
  const [val, setValue] = useState("");
  const [error, setError] = useState("");
  const [url, setURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const checkValueType = (value) => {
    try {
      // setConverted('');
      setError("");
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
    setIsLoading(false);
    setURL(`${process.env.REACT_APP_BACKEND_URL}/${databaseId}`);
  };

  return (
    <section className="grid sm:grid-col-1 md:grid-col-7 gap-2 h-full md:grid-flow-col">
      <LeftSidebar />

      <div className="col-span-1 md:col-span-5 flex justify-center items-center">
        <div className="flex flex-col">
          {url ? (
            <>
              <div className="break-all m-auto bg-white p-4 border-gray-500 font-bold text-blue-500 border-4 rounded-3xl text-3xl">
                <a href={`${url}`} target="_blank" rel="noopener noreferrer">
                  {`${url}`}
                </a>
              </div>
              <button
                className=" my-2 py-2 bg-green-500 shadow-md focus:outline-none hover:bg-green-600 focus:ring-2 focus:ring-opacity-50 rounded-md text-gray-50 w-3/6 m-auto"
                type="button"
                disabled={isLoading}
                onClick={() => setURL("")}
              >
                GO BACK
              </button>
            </>
          ) : (
            <>
            <button
                className=" my-2 py-2 bg-gray-700 shadow-md focus:outline-none hover:bg-gray-600 focus:ring-2 focus:ring-opacity-50 rounded-md text-white w-2/6 self-end"
                type="button"
                disabled={isLoading}
                onClick={() =>window.open("/docs", "_blank")}
              >
                SEE THE DOCS
              </button>
              <textarea
                className="text-area text-area-focus bg-gray-100 resize-none m-auto"
                id="input-textarea"
                placeholder="Enter your JSON ( SEE THE DOCS for help )"
                value={val}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className=" my-2 py-2 bg-green-500 shadow-md focus:outline-none hover:bg-green-600 focus:ring-2 focus:ring-opacity-50 rounded-md text-gray-50 w-3/6 m-auto"
                type="button"
                disabled={isLoading}
                onClick={() => {
                  checkValueType(val);
                  setIsLoading(true);
                }}
              >
                {isLoading ? "Please Wait" : "GENERATE"}
              </button>
              {url && (
                <div className="w-3/6 break-all m-auto	">
                  <a href={`${url}`} target="_blank" rel="noopener noreferrer">
                    {`${url}`}
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* <div className="col-span-1  border-4 hidden md:block h-full break-normal"></div> */}
    </section>
  );
};
