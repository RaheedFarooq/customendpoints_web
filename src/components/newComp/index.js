import React, { useEffect, useRef, useState } from "react";
import Button from "../../common/Button";
import "./styles.scss";

const NewComp = ({ url, onError }) => {
    const [apiResponse, setApiResponse] = useState('');
    let responseRef = useRef(null);
  useEffect(() => {
    (async function() {
      try {
        let response = {};
        // fetch(url)
        // .then(response => response.json())
        // .then((result) => {
        //     response = result;
        //     console.log(result);
        // }).catch((err) => {
        //     onError(err);
        // });
        response = await fetch(url).then(res=> res.json());
        if(responseRef && responseRef) responseRef.current.innerHTML = "<pre>" + JSON.stringify({response }, undefined, 2) + "</pre>";
        setApiResponse(JSON.stringify({response }, undefined, 2))
      } catch (e) {
        onError(
          "Oops! Something went wrong with the Api, try pasting it in the Address-bar"
        );
      }
    })();
  }, []);
  return (
    <>
      <div className="url">
        <p>YOUR API</p>
        {url}
      </div>
      <div className="response row-span-7 p-3 mb-3 h-full col-span-full">
        <p>YOUR RESPONSE</p>
        <span ref={responseRef}> </span>
      </div>
    </>
  );
};

export default NewComp;
