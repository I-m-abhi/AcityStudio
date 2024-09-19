import purify from "purify-css"
const purify = require("purify-css")

let content = ""
let css = ""
let options = {
    output: "filepath/output.css"
}
purify(content, css, options)

// const purify = require('purify-css');

// const content = ['*.html'];
// const css = ['*.css'];

// const options = {
//     output: 'purifyAndMinified.css',
//     minify: true,
//     info: true
// };

// purify(content, css, options, function (purifiedAndMinifiedResult){
//     console.log(purifiedAndMinifiedResult);
// });