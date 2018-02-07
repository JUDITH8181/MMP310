const submitButton = document.getElementById("submit");
const nameInput= document.getElementById("name");
const bioInput= document.getElementById("bio");

const boroughSelect= document.getElementById("borough");

submitButton.onclick = function(event)
{
    const messgae= document.createElement("p");
    message.textContent = "Hello, " + nameInput.value+ boroughSelect.value+ " welcome to my website.";
    document.body.appendChild(messgae);
}