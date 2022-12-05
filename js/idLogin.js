const password = document.querySelector("#password");
const username = document.querySelector("#username");

const eyeIcon = document.querySelector("#eye");
const btn = document.querySelector(".btn");
const link = document.querySelector(".link");





eyeIcon.addEventListener("click", () => {
    if(password.value == ""){
        alert("please enter password");
    }else if(eyeIcon.classList.contains("fa-eye")){
        password.setAttribute("type", "text");
        eyeIcon.classList.replace("fa-eye","fa-eye-slash");
    }else if(eyeIcon.classList.contains("fa-eye-slash")){
        password.setAttribute("type", "password");
        eyeIcon.classList.replace("fa-eye-slash","fa-eye");
    }


})

btn.addEventListener("click",() =>{
    if(username.value == "" || password.value == ""){
        alert("information incomplete!");
    }else if(username.value == "abc" && password.value == "1111"){
          change();
    }else{
        alert("faild to log in....try again")
    }
})

function change(){
    link.setAttribute("onclick", "change()")
    location.href ="loginSuccess.html"
}



// searchPax.html
// const agentName = document.querySelector("#agent");

// agentName.innertext == "ambrosia";