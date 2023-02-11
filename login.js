const form = document.getElementById('form-detail');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(username.value.trim() === "" || password.value.trim() === "") {
        alert("Please enter your username or password");
     }
     else {
        alert("Success");
        window.location.href = './success.html';
    }
});









// function validate() {
//     // Get form elements
//     var username = document.getElementById("username");
//     var password = document.getElementById("password");

//     // Validate form inputs
//     if (username.value.trim() === "" || password.value.trim() ==="") {
//         alert("Please enter a username and password");
//         return false;
//     }

//     // Return true if form is valid
//     else{
//         alert("Success!!!");

//     }
//     return true;
// }
// document.getElementById("form-detail").onsubmit = validate;


// function validate() {
//     var userName = document.getElementById("username");
//     var password = document.getElementById("password");

//     if(userName.value.trim() === "" || password.value.trim() === "")
//     {
//         alert( "Enter username or password");
//         return false;
//     }
//     if(userName.value.length > 4 && password.value.length >= 6)
//     {
//         alert("Success!");
//         return true;
//     }
// }

