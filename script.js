let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameErrMessageEl = document.getElementById("nameErrMessage"); 

let emailEl = document.getElementById("email");
let emailErrMessageEl = document.getElementById("emailErrMessage");

nameEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        nameErrMessageEl.textContent = "Required*";
    }
    else{
        nameErrMessageEl.textContent = "";
    }
});

emailEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        emailErrMessageEl.textContent = "Required*";
    }
    else{
        emailErrMessageEl.textContent = "";
    }
});

myFormEl.addEventListener("submit",function(event){
    event.preventDefault();
});