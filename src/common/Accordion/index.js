import React, { Fragment, useState, useRef, useEffect } from "react";
import "./styles.scss";

const Accordion = ({ heading, description , code }) => {
  
  const [open, setOpen] = useState(false);
  const accordionHeaderClass =
    "text-xl font-medium bg-white hover:bg-gray-100 hover:bg-opacity-50 duration-300 p-3 pl-4 rounded-lg flex justify-between text-2xl font-bold cursor-pointer";
  const codeRef = useRef(null);
  useEffect(() => {
    if (codeRef && codeRef.current && !codeRef.current.innerHTML) {
      codeRef.current.innerHTML =
        "<pre>" + JSON.stringify(code, undefined, 2) + "</pre>";
    }
  }, [open]);
  return (
    <div className="my-2">
      {open ? (
        <>
          <div
            className={accordionHeaderClass}
            role="alert"
            onClick={() => setOpen(!open)}
          >
            {heading}
            <i class="fa fa-minus mt-1"></i>
          </div>
          <div class="accordion_desc">
            <p>
              {description}
            </p>
            <div className="code" id="myInput" ref={codeRef}></div>
          </div>
        </>
      ) : (
        <div
          className={`${accordionHeaderClass} bg-gray-50`}
          role="alert"
          onClick={() => setOpen(!open)}
        >
          {heading}
          <i class="fas fa-plus mt-1"></i>
        </div>
      )}
    </div>
  );
};

export default Accordion;
