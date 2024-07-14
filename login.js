let logBtn=document.getElementById("logBtn");
logBtn.addEventListener("click",function(){
    document.querySelector(".loginPage").style.display="block";
});

let loged=document.getElementById("loged");
loged.addEventListener("click",function(){
    let email=document.getElementById("name");
    let pass=document.getElementById("pass");

    if(email.value=="" || pass.value==""){
        alert("please enter email and password");
    } else {
        alert("you logged in");
        document.querySelector(".loginPage").style.display="none";
    }
});
