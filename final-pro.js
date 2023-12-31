function _cmnRemoveAllErrorMessage()
{
    var allErrorBorder = document.getElementsByClassName('tool-error-border');
	var allErrorMessage = document.getElementsByClassName('tool-error-message');
	var i;
    // remove border
    for(i = (allErrorBorder.length) - 1; i>=0; i--)
    {
        allErrorBorder[i].classList.remove("tool-error-border");
    }
    // remove error message
    for(i = (allErrorMessage.length) - 1; i>=0; i--)
    {
        allErrorMessage[i].remove();
    }	  
}

function _cmnShowErrorMessageBottomOfTheInputField(fieldID,errorMessage)
{
    var inputField = document.getElementById(fieldID);   
    inputField.classList.add("tool-error-border"); // add border
    inputField.focus(); // focus error feild
    
}

function _cmnHideElement(elementId)
{
    var displayProperty = document.getElementById(elementId).style.display;
    if(displayProperty != 'none')
    {
        document.getElementById(elementId).style.display = "none";
    }
}

function _cmnShowElement(elementId, givenDisplayProperty)
{
    var displayProperty = document.getElementById(elementId).style.display;
    if(displayProperty != givenDisplayProperty)
    {
        document.getElementById(elementId).style.display = givenDisplayProperty;
    }
}