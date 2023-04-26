/* <!--------w-----------

    Project 4
    Name: Khoi Dong	
    Date: 15 April, 2023
    Description: Website Development & Deployment

---------------------> */
document.addEventListener("DOMContentLoaded", load);

function load()
{
    let messageForm = document.getElementById("message_form");
    messageForm.addEventListener('submit', function(e) {
        validateFields(e)
    });

    let clearButton = document.getElementById("reset");
    clearButton.addEventListener('click', clearFields);

    let sendButton = document.getElementById("submit");
    sendButton.addEventListener('click', validateFields)
    hideErrors();
}

function validateFields(e)
{
        // if(formFieldsAreEmpty())
        // {
        //     e.preventDefault();
        // };
        e.preventDefault();
        
        if(!formHasErrors())
        {
            goToHomePage();
        };
}
function formFieldsAreEmpty()
{
    let fieldsAreEmpty = false;
    let inputs = document.querySelectorAll("input");
    let messageTextArea = document.getElementById("message");

    for(let i=0; i<inputs.length; i++)
    {
        if(inputs[i].value == "")
        {
            document.getElementById(`${inputs[i].id}_error`).style.display = "block";
            
            fieldsAreEmpty = true;
        }
        else
        {
            document.getElementById(`${inputs[i].id}_error`).style.display = "none";
        }
    }
    if(messageTextArea.value == "")
    {
        document.getElementById(`${messageTextArea.id}_error`).style.display = "block";
        fieldsAreEmpty = true;
    }
    else
    {
        document.getElementById(`${messageTextArea.id}_error`).style.display = "none";
    }
    return fieldsAreEmpty;
}

function formHasErrors()
{
    let hasErrors = false;

    if(formFieldsAreEmpty())
    {
        hasErrors = true;
    }
    else
    {
        let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        let phoneRegex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

        let emailInput = document.getElementById("email");
        let phoneInput = document.getElementById("phonenum");
        if(!emailRegex.test(emailInput.value))
        {
            document.getElementById("invalid_email").style.display = "block";
            hasErrors = true;
        }
        else
        {
            document.getElementById("invalid_email").style.display = "none";
        }

        if(!phoneRegex.test(phoneInput.value))
        {
            document.getElementById("invalid_phonenum").style.display = "block";
            hasErrors = true;
        }
        else
        {
            document.getElementById("invalid_phonenum").style.display = "none";
        }
    }

    

    return hasErrors;

}
function hideErrors()
{
    let errors = document.getElementsByClassName("contactError_error");
    for(let i=0; i<errors.length; i++)
    {
        errors[i].style.display = "none";
    }
}

function goToHomePage()
{
    window.location.replace("https://khoidong.github.io");
}

function clearFields()
{
    document.getElementById("fullname").value ="";
    document.getElementById("email").value = "";
    document.getElementById("phonenum").value = "";
    document.getElementById("message").value = "";
    document.getElementById("fullname").focus();
    hideErrors();
}