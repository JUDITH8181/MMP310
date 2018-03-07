//characters for password
const alpha= "abcdefghijklmnopqrstuvwxyz";
//rules
		//password length
//user clicks on button
const btn= document.getElementById('generate');
btn.onclick= generatePassword;
const message = document.getElementById('password');
const passwordLenthInput = document.getElementById('length');

//generate password
function generatePassword(){
	let password = "";
	let length= passwordLenthInput.value;
	for(let i = 0; i<10; i ++)
	{
	password += alpha[Math.floor(Math.random() *alpha.length)];
	}
	message.textContent = password;
}
// Display password