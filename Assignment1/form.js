console.log("Hi");
const name = document.getElementById("username");
const city = document.getElementById("cityname");
const age = document.getElementById("age");
const phone = document.getElementById("phonenumber");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpass = document.getElementById("confirmpass");
const button = document.getElementById("button");
var flag =false;
var num=0;
name.addEventListener('focus',()=>{
    document.getElementById("errormessage").style.display="none"
})


name.addEventListener('blur',()=>{
  
    let reg = /^[A-Z][a-zA-Z\.\' ]*[a-zA-Z]$/;
    let inp = name.value;
    console.log(reg,inp);
    if(reg.test(inp)){
        console.log("Matched");
        num++;
        flag=true;
    }
    else{
        console.log("Not Matched");
        document.getElementById("errormessage").style.display="inline";
        flag=false;
    }
})

city.addEventListener('focus',()=>{
    document.getElementById("errormessage2").style.display="none"
})


city.addEventListener('blur',()=>{
  
    let reg = /^[A-Z][a-zA-Z ]*[a-zA-Z]$/;
    let inp = city.value;
    console.log(reg,inp);
    if(reg.test(inp)){
        console.log("Matched");
       num++
       flag=true;
    }
    else{
        console.log("Not Matched");
        document.getElementById("errormessage2").style.display="inline";
        flag=false;
    }
})



age.addEventListener('focus',()=>{
    document.getElementById("errormessage3").style.display="none"
})


age.addEventListener('blur',()=>{
  
    let reg = /^[1-9]$|^[1-9][0-9]$|^[1][0-1][0-9]$/;
    let inp = age.value;
    console.log(reg,inp);
    if(reg.test(inp)){
        console.log("Matched");
        num++;
        flag=true;
    }
    else{
        console.log("Not Matched");
        document.getElementById("errormessage3").style.display="inline";
        flag=false;
    }
})

phone.addEventListener('focus',()=>{
    document.getElementById("errormessage4").style.display="none"
})


phone.addEventListener('blur',()=>{
  
    let reg = /^(\+?91(\-)?)?(0)?[9876][0-9]{9}$/;
    let inp = phone.value;
    console.log(reg,inp);
    if(reg.test(inp)){
        console.log("Matched");
        num++;
        flag=true;
    }
    else{
        console.log("Not Matched");
        document.getElementById("errormessage4").style.display="inline";
        flag=false;
    }
})


email.addEventListener('focus',()=>{
    document.getElementById("errormessage5").style.display="none"
})


email.addEventListener('blur',()=>{
  
    let reg = /^[a-zA-Z0-9][a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]*[a-zA-Z0-9]@([a-zA-Z]+[.])+[a-zA-z]+$/;
    let inp = email.value;
    console.log(reg,inp);
    if(reg.test(inp)){
        console.log("Matched");
       num++
       flag=true;
    }
    else{
        console.log("Not Matched");
        document.getElementById("errormessage5").style.display="inline";
        flag=false;
    }
})


password.addEventListener('focus',()=>{
    document.getElementById("errormessage6").style.display="none"
})


password.addEventListener('blur',()=>{
  
    let reg = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\#\?\!\@\$\%\^\&\*\-\.]).{8,}$/;
   var inp2 = password.value;
    
    if(reg.test(inp2)){
        console.log("Matched");
       num++
       flag=true;
    }
    else{
        console.log("Not Matched");
        document.getElementById("errormessage6").style.display="inline";
        flag=false;
    }
})


confirmpass.addEventListener('focus',()=>{
    document.getElementById("errormessage7").style.display="none"
})


confirmpass.addEventListener('blur',()=>{
    var inp2 = password.value;
    var inp3 = confirmpass.value;
    
    if(inp2==inp3){
        console.log("Matched");
        num++
        flag=true;
        if(num>=7){
            button.style.display="inline";
        }
    }
    else{
        console.log("Not Matched");
        document.getElementById("errormessage7").style.display="inline";
        flag=false;
    }
})
button.addEventListener('click',submit);
function submit(){
    alert("Form Submiited successfully")
}
//console.log(nameid&&confirmpassid&&passwordid&&emailid&&phoneid&&phoneid&&ageid&&cityid)
//if(nameid&&confirmpassid&&passwordid&&emailid&&phoneid&&phoneid&&ageid&&cityid){
//button.style.display="inline";


