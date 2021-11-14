/*Update rates with real time user changes */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
/*Script for the Compute Interest Button function*/
function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Check if the Principal is not 0 or under
    var properPrincipal = parseInt(principal) > 0;
    if (!properPrincipal) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        //Print the Interest Results
        document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
            "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
            "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
            "in the year <mark>" + yearInTheFuture + "</mark>" + "<br><br>";
    }
}
