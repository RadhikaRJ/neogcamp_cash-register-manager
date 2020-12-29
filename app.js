var btnref = document.querySelector("#btn");

var outputref = document.querySelector("#output");

btnref.addEventListener("click", clickHandler);

function clickHandler() {

    var outputDiv = document.getElementById("output1"); //get reference of output div by id
    outputDiv.innerHTML = ""; // (without user refreshing the screen, instead of updating, another table is appended. This fixes that issue.)
    outputref.innerHTML="";
    
    var billAmt = document.getElementById('bill').value;    
    var cashAmt = document.getElementById('cash').value;

    if (Number(cashAmt) < Number(billAmt)) {
        alert("Please enter Cash Amount greater than or equal to Bill Amount.");
    } 
    else 
    {
        console.log("bill: " + billAmt + " cash: " + cashAmt);
        var returnAmt = Number(cashAmt) - Number(billAmt);
        console.log("return amt: " + returnAmt);

        var count_of_1 = 0; //7 denominations of the currency.
        var count_of_5 = 0;
        var count_of_10 = 0;
        var count_of_20 = 0;
        var count_of_100 = 0;
        var count_of_500 = 0;
        var count_of_2000 = 0;

        var amt_for_return = returnAmt;
        switch (amt_for_return > 0) {

            case amt_for_return > 2000:
                count_of_2000 = Math.floor(amt_for_return / 2000);
                amt_for_return = Math.floor(amt_for_return % 2000);
                console.log("no of 2000 notes: " + count_of_2000 + " amt_for_return= " + amt_for_return);

            case amt_for_return > 500:
                count_of_500 = Math.floor(amt_for_return / 500);
                amt_for_return = Math.floor(amt_for_return % 500);
                console.log("no of 500 notes: " + count_of_500 + " amt_for_return= " + amt_for_return);

            case amt_for_return > 100:
                count_of_100 = Math.floor(amt_for_return / 100);
                amt_for_return = Math.floor(amt_for_return % 100);
                console.log("no of 100 notes: " + count_of_100 + " amt_for_return= " + amt_for_return);

            case amt_for_return > 20:
                count_of_20 = Math.floor(amt_for_return / 20);
                amt_for_return = Math.floor(amt_for_return % 20);
                console.log("no of 20 notes: " + count_of_20 + " amt_for_return= " + amt_for_return);

            case amt_for_return > 10:
                count_of_10 = Math.floor(amt_for_return / 10);
                amt_for_return = Math.floor(amt_for_return % 10);
                console.log("no of 10 notes: " + count_of_10 + " amt_for_return= " + amt_for_return);

            case amt_for_return > 5:
                count_of_5 = Math.floor(amt_for_return / 5);
                amt_for_return = Math.floor(amt_for_return % 5);
                console.log("no of 5 notes: " + count_of_5 + " amt_for_return= " + amt_for_return);

            case amt_for_return >= 1:
                count_of_1 = Math.floor(amt_for_return / 1);
                amt_for_return = Math.floor(amt_for_return % 1);
                console.log("no of 1 notes: " + count_of_1 + " amt_for_return= " + amt_for_return);
                break;
        }

        var denom_dict = {
            "1": count_of_1,
            "5": count_of_5,
            "10": count_of_10,
            "20": count_of_20,
            "100": count_of_100,
            "500": count_of_500,
            "2000": count_of_2000
        };

        var keys = Object.keys(denom_dict);
        console.log("keys: " + keys);
        var length = keys.length;

        
        var tb = document.createElement("table");
        var tb_body = document.createElement("tbody");

        var header = tb.createTHead();
        var header_row = header.insertRow(0);
        var header_cell1 = header_row.insertCell(0);
        header_cell1.innerHTML = "<b>Denomination</b>";
        var header_cell2 = header_row.insertCell(1);
        header_cell2.innerHTML = "<b>Minimum Notes Required</b>"

        //creating cells
        for (var i = 0; i < length; i++) {
            //create ith table row
            var row = document.createElement("tr");

            //we have 2 columns: denomination & count
            for (var j = 0; j < 2; j++) {
                if (j == 0) {
                    var cell1 = document.createElement("td");
                    var cellText1 = document.createTextNode(keys[i]);
                    cell1.appendChild(cellText1);
                    row.appendChild(cell1);
                } else {
                    var cell2 = document.createElement("td");
                    var obj_key = keys[i];
                    var cellText2 = document.createTextNode(denom_dict[obj_key]);
                    cell2.appendChild(cellText2);
                    row.appendChild(cell2);
                }
            }

            //add this row to table body
            tb_body.appendChild(row);

        }

        //put tbody in table
        tb.appendChild(tb_body);

        //append table to outputdiv
        outputDiv.appendChild(tb);
        // set border attributes to table
        tb.setAttribute("border", "2");

        outputref.innerText = "Return Amount: " + returnAmt;


    }
}