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

    document.body.appendChild(message);
    
    
    if(exclamationInput.value && adverbInput.value && nounInput.value && adjectiveInput.value){
        message.textContent = exclamationInput.value
                         +" he said "
                         + adverbInput.value
                         + " as he jumped into his convertible "
                         + nounInput.value   
                         +" and drove off with his "
                         + adjectiveInput.value
                         +" wife." 
        
    }
    else if(!exclamationInput.value && adjectiveInput.value && nounInput.value && adjectiveInput.value){
        message.textContent = "You forgot to add an exclamation!";  
    } 
    else if(!adverbInput.value){
        message.textContent = "You forgot to add an adverb!";  
    }  
    else if(!nounInput.value){
        message.textContent = "You forgot to add an noun!";  
    } 
    else(){
        message.textContent = "You forgot to fill in the blank";
};
