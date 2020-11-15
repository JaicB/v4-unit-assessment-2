//Step 1
const formBtn = document.getElementsByClassName('close-form')

const form = document.getElementsByTagName('form')

const classList = document.getElementsByClassName('hide')

function toggler(e) {
    if (formBtn.innerText === 'X') {
        return formBtn.innerText('+');          
    } else if (form.innerText !== 'X') {
        return formBtn.innerText('X')
}
}

//Step 2
const nameInput = document.getElementsByTagName('name')

const emailInput = document.getElementsByTagName('email')

var emailList = new Array();

function validateForm(e) {
    if (nameInput.value === false && emailInput.value === false) {
        nameInput.style = 'border: solid red 2px';
        emailInput.style = 'border: solid red 2px';
        nameInput.alert = 'You must enter a name and an email address to subscribe!';
    } else if (nameInput.value === false) {
        nameInput.style = 'border: solid red 2px';
        nameInput.alert = 'You must enter a name to subscribe!';
    } else if (emailInput.value === false) {
        emailInput.style = 'border: solid red 2px';
        emailInput.alert = 'You must enter an email address to subscribe!';
    } else {
        //I think it's asking for a function to push an object with name and email from nameInput and emailInput into the new emailList array. - not sure how to do this. 
    } return displayThankYou
}

form.addEventListener('submit', (e) => {
    e.preventDefault ()
    return validateForm
})

//Step 3
const formContainer = document.getElementsByClassName('form-container')

function displayThankYou(e) {
    formContainer.innerText = 'Thank you for subscribing!'
}

//Step 4
nameInput.addEventListener('form', toggle)

emailInput.addEventListener('form', toggle)