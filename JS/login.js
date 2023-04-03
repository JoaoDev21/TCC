function showPassword(){
    var eye = document.getElementById('eye');
    var eyeSlash =  document.getElementById('eyeSlash');
    var FieldPassword = document.getElementById('FieldPassword');

    if(eye.style.display === 'none')
    {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        FieldPassword.type = 'text';
    }
    else
    { 
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        FieldPassword.type = "password";
    }
}
const form = document.getElementById('form')
const email = document.getElementById('email')
const FieldPassword = document.getElementById('FieldPassword')

form.addEventListener('click', (e) => {

    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const emailValue = email.value.trim()
    const FieldPasswordValue = FieldPassword.value.trim()

    if(emailValue === ''){
        alert("Preencha o Campo E-mail")  
    }
    else if(FieldPasswordValue === ''){
        alert("Preencha o Campo Senha")
    }
    else{
        window.location = "dashboard.html";
    }
}
