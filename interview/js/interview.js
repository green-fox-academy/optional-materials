// What is a “closure” in JavaScript? Provide an example
const CashMachine = initialVaule => {
  var cash = initialVaule;
  return {
    info: () => console.log(`Cash: ${cash}`),
    deposit: value => {cash += value > 0 ? value : 0},
  };
}

// const cm = CashMachine(0);
// cm.info();
// cm.deposit(100);
// cm.info();
// cm.deposit(-100);
// cm.info();

// var vs let
// if(false){
//   var a = 6;
// }

// if(true){
//   var a = 6;
// }

if(true){
  let a = 6;
}

if(false){
  let a = 6;
}
// console.log(a);

// How to empty an array in JavaScript?
let a = [1,2,3];
a = [];
a = [1,2,3];
a.length = 0;
// console.log(a);

const isInteger = value => value == Number.parseInt(value, 10)
// console.log(isInteger('5'));
// console.log(isInteger('5.1'));
// console.log(isInteger(5));
// console.log(isInteger(5.5));

// prototype
// console.log([1,2,3].forEach(e => console.log(e)))
// Array.prototype.forEach = () => console.log('cica');
// console.log([1,2,3,4].forEach())

const ajax = (command, url, callback, data=null) => {
  let xhr = new XMLHttpRequest();
  // xhr.readyState === 0
  xhr.open(command, url);
  // xhr.readyState === 1
  xhr.setRequestHeader("Content-type", "application/json");
  // xhr.readyState === 
  xhr.onreadystatechange = function (oEvent) {
    // xhr.readyState === 2, 3, 4  
    if (xhr.readyState === 4) {  
        if (xhr.status === 200) {  
          callback(JSON.parse(xhr.responseText));
        } else {  
          window.location.replace("https://52.57.196.190/error.html"); 
        }  
    }  
  }
  // xhr.readyState === 1
  xhr.send(JSON.stringify(data));
  // xhr.readyState === 2
}
