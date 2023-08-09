const form = document.getElementById('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

function setErrorForUser(input, message) {
	const main = input.parentElement;
	const small = main.querySelector('small');
	main.className  = 'main error';
	small.innerText = message;
}
function setErrorForPass(input, message) {
	const main = input.parentElement;
  const bigMain = main.parentElement;
	const small = bigMain.querySelector('small');
	bigMain.className  = 'main error';
	small.innerText = message;
}

function setSuccessForUser(input) {
	const main = input.parentElement;
	main.className = 'main success';
}
function setSuccessForPass(input) {
	const main = input.parentElement;
  const bigMain = main.parentElement;
	bigMain.className = 'main success';
}

function isUsername(username) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username);
}
function isPassword(password) {
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();	
	if(usernameValue === '') {
		setErrorForUser(username, 'Username cannot be blank');
	} else if (!isUsername(usernameValue)) {
		setErrorForUser(username, 'Not a valid username');
    } else {
      setSuccessForUser(username);
	}
	
	if(passwordValue === '') {
		setErrorForPass(password, 'Password cannot be blank');
	} else if (!isPassword(passwordValue)) {
    setErrorForPass(password, "Password must be at least 8 characters long, \ncontain at least one lowercase letter, \ncontain at least one uppercase letter, \ncontain at least one number, \ncontain at least one special character from the set '[@!%*?&]'.");
    } else {
      setSuccessForPass(password);
	}
}

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

/*=============== Input focus sticky top label ===============*/
const label1 = document.querySelector('.user');
const label2 = document.querySelector('.pass');


username.onfocus = function(){
    label1.style.top ='-8px';
}
username.onblur = function(){
    if (username.value) {
        label1.style.top = '-8px';
    } else {
        label1.style.top = '18px';
    }
}

password.addEventListener('focus', () => { 
    label2.style.top = '-8px';
});

password.addEventListener('blur', () => {
    if (password.value) {
        label2.style.top = '-8px';
    } else {
        label2.style.top = '18px';
    }
});

/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (password, loginEye) =>{
    const input = document.getElementById(password),
    iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
       // Change password to text
        if(input.type === 'password'){
          // Switch to text
            input.type = 'text'

          // Icon change
            iconEye.classList.add('fa-eye')
            iconEye.classList.remove('fa-eye-slash')
        } else{
          // Change to password
            input.type = 'password'

          // Icon change
            iconEye.classList.remove('fa-eye')
            iconEye.classList.add('fa-eye-slash')
        }
    })
}

showHiddenPass('password','login-eye');