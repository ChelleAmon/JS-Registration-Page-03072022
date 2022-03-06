const firstName =  document.querySelector("#firstName");
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const phoneNumber = document.querySelector('#phoneNumber');

const submitBtn = document.querySelector('#submitBtn');

const fName = document.querySelector(".fName");
const lName = document.querySelector(".lName");
const emailAddress = document.querySelector(".emailAddress");
const bDate = document.querySelector(".bDate");
const pNumber = document.querySelector(".pNumber");



submitBtn.addEventListener('click', getForm)


function getForm(){

    if(confirm("Are you sure?")){

        fName.textContent = firstName.value
        lName.textContent = lastName.value
        emailAddress.textContent = email.value
        bDate.textContent = birthdate.value
        pNumber.textContent = phoneNumber.value


        fName.innerHTML = fName.textContent.toUpperCase()
        lName.innerHTML = lName.textContent.toUpperCase()
        emailAddress.innerHTML = emailAddress.textContent.toLowerCase()
        bDate.innerHTML = new Date(bDate.textContent).toDateString()
        pNumber.innerHTML = phoneNumber.textContent
    
    }else{

        firstName.value = ""
        lastName.value = ""
        email.value = ""
        birthdate.value.Date = ""
        phoneNumber.value = ""

    }

    firstName.value = ""
    lastName.value = ""
    email.value = ""
    birthdate.value =  new Date('','','');
    phoneNumber.value = ""
}