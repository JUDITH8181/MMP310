/*
    HTML elecment references
*/
const submitButton = document.getElementById("submit");
const exclamationInput = document.getElementById("exclamation");
const adverbInput = document.getElementById("adverb");
const nounInput =document.getElementById("noun");
const adjectiveInput= document.getElementById("adjective");
/*
    Listen for button press
*/
submitButton.onclick= function(){
/*
    get all words and generate story
*/
    const message = document.createElement("p");
    message.textContent = exclamationInput.value
                         +" he said "
                         + adverbInput.value
                         + " as he jumped into his convertible "
                         + nounInput.value   
                         +" and drove off with his "
                         + adjectiveInput.value
                         +" wife."
    document.body.appendChild(message);
};