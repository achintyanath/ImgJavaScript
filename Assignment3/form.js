const email = document.getElementById("email");
const password = document.getElementById("password");
let inp = email.value;
var inp2 = password.value;
const button = document.getElementById("mybutton");

//button.addEventListener('click', fetch);


email.addEventListener("focus", () => {
    document.getElementById("errormessage5").style.display = "none";
});

email.addEventListener("blur", () => {
    let reg = /^[a-zA-Z0-9][a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]*[a-zA-Z0-9]@([a-zA-Z]+[.])+[a-zA-z]+$/;
    let inp = email.value;
    console.log(reg, inp);
    if (reg.test(inp)) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
        document.getElementById("errormessage5").style.display = "inline";
    }
});

password.addEventListener("focus", () => {
    document.getElementById("errormessage6").style.display = "none";
});

password.addEventListener("blur", () => {
    let reg = /^[a-zA-Z0-9\#\?\!\@\$\%\^\&\*\-\.]+$/;
    var inp2 = password.value;

    if (reg.test(inp2)) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
        document.getElementById("errormessage6").style.display = "inline";
    }
});
document.onkeydown = function () {
    if (window.event.keyCode == "13") {
        fetch();

    }
};

function fetch() {
    console.log("HIHI");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/login", true);

    xhr.setRequestHeader("Content-type", "application/json");
   const param={
    "email":`${email.value}` ,
    "password": `${password.value}`
};
const string = JSON.stringify(param);
console.log(string)
    xhr.send(string);
    xhr.onload = function () {
        var obj = JSON.parse(this.responseText);
        console.log(obj);
        if(this.status==200){
        
        window.alert("The received token is "+obj.token);
        }
        else{
            window.alert("Wrong email or password");
        }
    }
    
}
