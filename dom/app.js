window.addEventListener("load", Function(){
	var message= document.createElement("div");
	message.className= "message";
	message.classList.add("test");
	message.innerText= "Hello";
	document.body.appendChild(message);


	var messages=document.getElementByClassName("messages");
	console.log(messages);
	document.body.removeChild(messages[0]);
	messages[0].remove();

	var img = new Image();
});
