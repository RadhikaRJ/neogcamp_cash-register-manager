var btnref = document.querySelector("#btn");
var billref = document.querySelector("#bill");
var cashref = document.querySelector("#cash");
var outputref = document.querySelector("#output");

btnref.addEventListener("click",clickHandler);

function clickHandler(){

var billAmt = document.getElementById('bill').value;
var cashAmt = document.getElementById('cash').value;
console.log("bill: "+billAmt+" cash: "+cashAmt);
var returnAmt=Number(cashref)-Number(billref);
console.log("return amt: "+cashAmt);
outputref.innerText = returnAmt;
}