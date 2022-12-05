const searchBtn = document.querySelector(".btn");
const search = document.querySelector(".search");

const flightNum = document.getElementById("flight-no");
const paxName = document.getElementById("name");
const etktNum = document.getElementById("etkt-no");
const stNum = document.getElementById("seat-no");

searchBtn.addEventListener("click",() =>{
    if(flightNum.value == "br30" && paxName.value == "kuo/weiwei"){
        searchOk();
    }else if(flightNum.value == "br30" && stNum.value == "20A"){
        searchOk();
    }else if(paxName.value == "kuo/weiwei" && stNum.value == "20A"){
        searchOk();
    }else if(etktNum.value ==666168 ){
        searchOk();
    }else if(paxName.value == "kuo/weiwei"){
        doubleName();
    }
    else{
        alert("NO MATCHING GUEST.")
    }
})


function searchOk(){
    search.setAttribute("onclick", "searchOk()");
    location.href ="paxReservation.html";
}

function doubleName(){
    search.setAttribute("onclick", "doubleName()");
    location.href ="doubleName.html";
}