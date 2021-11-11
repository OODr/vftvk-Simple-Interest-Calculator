/*Variables for user input and script caculations */
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

/*Update rates with real time user changes */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
/*Script for the Compute Interest Button function*/
function compute()
{
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    /*Make sure principal values are proper
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById('principal').style.borderColor = "red";
        document.getElementById('principal').focus();
    }*/
    /*Print the results of the inquiery
    else if(principal > 0) {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }*/
}
document.getElementById("compute-int").addEventListener("click", compute());      
