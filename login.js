const form = document.getElementById('form-detail');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(username == " " || password == " ") {
        alert("please enter your username or password")
     }
     else {
        alert("Success")
    }
})