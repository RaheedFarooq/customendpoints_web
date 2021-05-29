var encoder = require("object-encrypt-decrypt");

export const generateHash = (data) => {
try{
    let hash = encoder.encrypt(data);
    // let tiny =  shorten(`https://mytest.com/${hash}`);
    return hash;
}
catch(e){

}
}