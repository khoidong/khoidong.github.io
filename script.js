/* <!--------w-----------

    Project 4
    Name: Khoi Dong	
    Date: 15 April, 2023
    Description: Website Development & Deployment

---------------------> */
document.addEventListener("DOMContentLoaded", load);

function load()
{
    let sendButton = document.getElementById("submit");
    sendButton.addEventListener('click', goToHomePage);
    let clearButton = document.getElementById("reset");
    clearButton.addEventListener('click', clearFields);
}

function goToHomePage()
{
    window.location.replace("/");
}
function clearFields()
{
    document.getElementById("fullname").value ="";
    document.getElementById("email").value = "";
    document.getElementById("phonenum").value = "";
    document.getElementById("message").value = "";
    document.getElementById("fullname").focus();
}