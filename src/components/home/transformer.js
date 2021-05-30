import { UNCHANGED_KEYS } from "../docs/constants";

var encoder = require("object-encrypt-decrypt");

export const generateHash = (data) => {
  try {
    let hash = encoder.encrypt(data);
    return hash;
  } catch (e) {}
};

export const jsonCreator = ( newObj , obj = null ) => {
  try {
    let currentKey = Object.keys(newObj)[0];
    let currentValue = Object.values(newObj)[0];

    let key = obj ? "key_" + Object.keys(obj).length : "key_0" ;

    if( UNCHANGED_KEYS.includes( currentKey ) ) key = currentKey;
    return JSON.stringify({...obj, [key]: currentValue }, undefined, 2);
  } catch (e) {
      console.log(e)
  }
};
