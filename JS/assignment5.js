function CustomerInfo()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers"; //All customers from DB
    objRequest.onreadystatechange = function()
    {
    if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var output = JSON.parse(objRequest.responseText);
        GenerateOutput(output);
        }
    };   
    objRequest.open("GET", url, true);
    objRequest.send();

function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "<table><tr><th>Customer ID</th><th></th><th>Customer Name</th><th></th><th>Customer City</th></tr></table>";
    for (count = 0; count < result.GetAllCustomersResult.length; count++)
{
    displaytext += ("<tr><td>"+ result.GetAllCustomersResult[count].CustomerID + "<tr><td>" + result.GetAllCustomersResult[count].CustomerName + "<tr><td>" +result.GetAllCustomersResult[count].City+ "<br>");}
    displaytext += "</table>";
    document.getElementById("AllCustomers").innerHTML = displaytext;
}
}
/////////////////New Section/////////

function OrderHistory()
{
    {
    var objRequest = new XMLHttpRequest();
    var url ="https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    objRequest.onreadystatechange = function()
    {
    if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var output = JSON.parse(objRequest.responseText);
        GenerateOutput(output);
        }
    };   
    objRequest.open("GET", url, true);
    objRequest.send();
    
function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "<table><tr><th>Product Name</th><th></th><th>Quantities Ordered</th></tr></table>";
    for (count = 0; count < result.getCustomerOrderHistory.length; count++)
    {
    displaytext += ("<tr><td>"+ result.getCustomerOrderHistory[count].ProductName + "<tr><td>" + result.getCustomerOrderHistory[count].Total + "<br>");
    }
    displaytext += "</table>";
    document.getElementById("HistoryDisplay").innerHTML = displaytext;
}
    }
}

////////////New Section/////////

function GetOrders()
{
    var objRequest = new XMLHttpRequest();  //Create AJAX request object

//Create URL and Query string
var url ="https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
url += document.getElementById("custid2").value;

//Checks that the object has returned data
objRequest.onreadystatechange = function()
{if (objRequest.readyState == 4 && objRequest.status == 200)

{
    var output = JSON.parse(objRequest.responseText);
    GenerateOutput(output);
}
};
//Initiate the server request
objRequest.open("GET", url, true);
objRequest.send();

function GenerateOutput(result)
{
    var count = 0;
    var displaytext ="<table><tr><th>Order Date</th><th></th><th>Order ID</th><th>Shipping Address</th><th></th><th>Shipping City</th><th>Shipping Name</th><th></th><th>Shipping Postal Code</th><th>Shipped Date</th></tr></table>";
    //Loop to extract data from the response object
    for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
{
    displaytext += result.GetOrdersForCustomerResult[count].OrderDate + ", " + result.GetOrdersForCustomerResult[count].OrderID + ", " + result.GetOrdersForCustomerResult[count].ShipAddress + ", " + result.GetOrdersForCustomerResult[count].ShipCity + ", " + result.GetOrdersForCustomerResult[count].ShipName + ", " + result.GetOrdersForCustomerResult[count].ShipPostcode + ", " + result.GetOrdersForCustomerResult[count].ShippedDate + "<br>";
}
    document.getElementById("orderdisplay").innerHTML = displaytext;
}
}

function MenuChoice()
{
    if (document.getElementById("menu").value == "Display Section 1")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Display Section 2")
    {
    document.getElementById("section1").style.visibility = "hidden";
    document.getElementById("section2").style.visibility = "visible";
    document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value== "Display Section 3")
    {  
    document.getElementById("section1").style.visibility = "hidden";
    document.getElementById("section2").style.visibility = "hidden";
    document.getElementById("section3").style.visibility = "visible";
    }
    else
    {
    document.getElementById("section1").style.visibility = "hidden";
    document.getElementById("section2").style.visibility = "hidden";
    document.getElementById("section3").style.visibility = "hidden";
    }
}



