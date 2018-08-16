# IFTTTdateJS
Convert IFTTT **OccurredAt** to Javascript (ECMAScript) **Date**.  

## What IFTTTdateJS do
Convert IFTTT **OccurredAt** string to JavaScript (ECMAScript standard) **[Date](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date)** Object.   
e.g. "July 27, 2018 at 11:30PM" => Date  

## How to Use
### install
```
npm install IFTTTdateJS
```
### use
```javascript
const IFTTTdateJS = require("IFTTTdateJS");
let OccurredAt; // by your preferred way
let output = IFTTTdateJS(OccurredAt);
console.log(output); // => converted Date Object
```
very simple!!
