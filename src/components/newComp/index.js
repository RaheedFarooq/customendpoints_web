import React, { useEffect, useRef, useState } from "react";
// import Button from "../../common/Button";
import "./styles.scss";

const NewComp = ({ url, onError }) => {
    const [apiResponse, setApiResponse] = useState('');
    let responseRef = useRef(null);
    // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    (async function() {
      try {
        let response = {};
        response = await fetch(url).then(res=> res.json());
        if(responseRef && responseRef) responseRef.current.innerHTML = "<pre>" + JSON.stringify({response }, undefined, 2) + "</pre>";
        setApiResponse(JSON.stringify({response }, undefined, 2))
      } catch (e) {
        onError(
          "Oops! Something went wrong with the Api, try pasting it in the Address-bar"
        );
      }
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="url">
        <p>HERE'S YOUR API</p>
        <h6>{url}</h6>
      </div>
      <div className="response row-span-7 p-3 mb-3 h-full col-span-full">
        <p>API RESPONSE</p>
        <textarea value={apiResponse} ref={responseRef} readOnly className="text-xs sm:text-sm focus:outline-none w-full h-90p mt-2 bg-prefered-black border-none p-1"/>
        {/* <span > </span> */}
      </div>
    </>
  );
};

export default NewComp;
