// get elements by id from html template
const firstName =  document.querySelector("#firstName");
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const phoneNumber = document.querySelector('#phoneNumber');

const submitBtn = document.querySelector('#submitBtn');

// get elements by class name from html template
const fName = document.querySelector(".fName");
const lName = document.querySelector(".lName");
const emailAddress = document.querySelector(".emailAddress");
const bDate = document.querySelector(".bDate");
const pNumber = document.querySelector(".pNumber");


// When submit Button is clicked, getForm() function will be executed.
// Because line 20 is already setup, there is no need to include the getForm() function inside the button tag in HTML template
submitBtn.addEventListener('click', getForm)

addStyle()


// create a function named getForm 
function getForm(){

// when called, a confirm pop-up will appear
// I used an if-statement

// if an "ok" button is pressed, the form will be submitted
// Data will display in the Output section

    if(confirm("Are you sure?")){

        fName.textContent = firstName.value
        lName.textContent = lastName.value
        emailAddress.textContent = email.value
        bDate.textContent = birthdate.value
        pNumber.textContent = phoneNumber.value

    
// Utilized few string methods and Date object 
        fName.innerHTML = fName.textContent.toUpperCase()
        lName.innerHTML = lName.textContent.toUpperCase()
        emailAddress.innerHTML = emailAddress.textContent.toLowerCase()
        bDate.innerHTML = new Date(bDate.textContent).toDateString()
        pNumber.innerHTML = pNumber.textContent

// Used Alert pop-up to say Hi to the registered user
// used template literal in substitute to string concatenation
// another way to write line 50: alert("Hello, " + fName.textContent + "!")
        alert(`Hello, ${fName.textContent.toLowerCase()}!`)

    
// if 'cancel' button is pressed, then all input fields will be cleared
// output will be empty

    }else{
        firstName.value = ""
        lastName.value = ""
        email.value = ""
        birthdate.value.Date = ""
        phoneNumber.value = ""
    }
}


// Create addStyle() function to display some styling
function addStyle(){

    // get all span tags that has class Name "custom-span.font"
    const spans = document.querySelectorAll(".custom-span-font")

    // For-loop statement. I suggest not to focus too much on this function for now. 
    // This will be discussed  by Vinson on the next lectures. 

    for (let i = 0; i < spans.length; i++){
     // Focus rather on how I style custom-span-font using JSS
        spans[i].style.color = "green"
        spans[i].style.fontStyle ="italic"
        spans[i].style.fontSize = "10pt"
    }



}