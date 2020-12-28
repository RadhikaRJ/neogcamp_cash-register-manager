var btnref = document.querySelector("#btn");

var outputref = document.querySelector("#output");

btnref.addEventListener("click",clickHandler);

function clickHandler(){

var billAmt = document.getElementById('bill').value;
var cashAmt = document.getElementById('cash').value;
console.log("bill: "+billAmt+" cash: "+cashAmt);
var returnAmt=Number(cashAmt)-Number(billAmt);
console.log("return amt: "+cashAmt);

outputref.innerText = returnAmt;


}