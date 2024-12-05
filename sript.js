let form = document.getElementById("myForm")

let nameFieldSt=document.querySelector("#name")
let nameRegex=/^[A-Z][a-z]{2,}$/

let nameFieldSe=document.querySelector("#name2")
let name2Regex=/^[A-Z][a-z]{2,}$/

let emailField=document.querySelector("#email")
let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

let phoneField=document.querySelector("#phone")
let phoneRegex=/^(01)\d{9}$/


form.addEventListener("submit", function(e) {
   e.preventDefault();

   let fnameField=nameRegex.test(nameFieldSt.value)
   let lnameField=name2Regex.test(nameFieldSe.value)
   let emField=emailRegex.test(emailField.value)
let phoField=phoneRegex.test(phoneField.value)

if(!fnameField){
    alert("first name wrong");
}else if (!lnameField){
    alert("second name wrong");

}else if (!emField){
    alert("email is wrong");

}else if (!phoField){
    alert("phone is wrong");

}else if (!passField){
    alert("pass is wrong");

}else{
    Swal.fire({
        title: "Good job!",
        text: "You successfuly Submit!!",
        icon: "success"
      });
    }
    });

phoneField.addEventListener("input", function() {
    let phoisValid = phoneRegex.test(phoneField.value);
    let outputList4 = phoneField.parentElement.querySelector("ul"); // Select the corresponding <ul> for output

    
    outputList4.innerHTML = "";

    if (!phoisValid) {
        outputList4.innerHTML = `
            <li class="invalid-text">phone num must start with 01</li>
            <li class="invalid-text">phone num must be 11 number only</li>
            <li class="invalid-text">phone num must be only numbers</li>
        `;
    } else {
        outputList4.innerHTML = `<li class="valid-text">Valid Phone Number</li>`;
    }
});


nameFieldSt.addEventListener("input", function() {
    let fisValid = nameRegex.test(nameFieldSt.value);
    let outputList = nameFieldSt.parentElement.querySelector("ul"); // Select the corresponding <ul> for output

    // Clear previous messages
    outputList.innerHTML = "";

    if (!fisValid) {
        outputList.innerHTML = `
            <li class="invalid-text">Name must be letters</li>
            <li class="invalid-text">Name must be more than 2 letters</li>
            <li class="invalid-text">Name must start with a capital letter</li>
        `;
    } else {
        outputList.innerHTML = `<li class="valid-text">Valid Name</li>`;
    }
});

nameFieldSe.addEventListener("input",function(){
    let lisValid = name2Regex.test(nameFieldSe.value);
    let outputList2 = nameFieldSe.parentElement.querySelector("ul"); // Select the corresponding <ul> for output

    outputList2.innerHTML = "";

    if (!lisValid) {
        outputList2.innerHTML = `
            <li class="invalid-text">Name must be letters</li>
            <li class="invalid-text">Name must be more than 2 letters</li>
            <li class="invalid-text">Name must start with a capital letter</li>
        `;
    } else {
        outputList2.innerHTML = `<li class="valid-text">Valid Name</li>`;
    }
})

emailField.addEventListener("input",function(){
    let emisValid =emailRegex.test(emailField.value);
    let outputList3 = emailField.parentElement.querySelector("ul"); // Select the corresponding <ul> for output

    outputList3.innerHTML = "";

    if (!emisValid) {
        outputList3.innerHTML = `
            <li class="invalid-text">email must start with letter</li>
            <li class="invalid-text">must have @&.com</li>
        `;
    } else {
        outputList3.innerHTML = `<li class="valid-text">Valid Email</li>`;
    }
})

