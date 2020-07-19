let myEmail = "nimra555@gmail.com"; 
let myPassword = "pakistanzindabad";


function inputEmail(){
    let email = document.querySelector("#email").value;
    console.log(email);
    if(email===myEmail){
       
        let login = document.querySelector("#login");
        login.innerHTML = window.open('password.html'); 
    }
    else{
        let outputEmail = document.querySelector("#email-output");
        outputEmail.innerHTML = "Incorrect email!";
        outputEmail.style.color = "red";
        outputEmail.style.fontWeight = "bold";
        console.log(outputEmail);
    }
}

function inputPassword(){
    let password = document.querySelector("#password").value;
    console.log(password);

    if(password===myPassword){
            let login = document.querySelector("#passwd-login");
             login.innerHTML = window.open('welcome.html');
    }
    else{
            let output = document.querySelector("#password-output");
            output.innerHTML = "Incorrect password!";
            output.style.color = "red";
            output.style.fontWeight = "bold";
            console.log(output)
        }
}
