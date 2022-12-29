const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const bpIcon = document.querySelector(".boardingPassIcon");



btnEl.addEventListener("click", function(){
    toggle();
    setTimeout(toggle,2000);
    setTimeout(() => {
        bpIcon.innerHTML = `<i class="fa-solid fa-check fa-2x" style="color:rgb(77, 174, 77);"></i>`
    }, 2200);

    btnEl.innerHTML = ` <a href="searchPax.html">SEARCH NEW PAX</a>
    <a href="baggage.html">ADD BAGS</a>`
    
});


    function toggle() {
        containerEl.classList.toggle("hide");
        popupContainerEl.classList.toggle("hide");
    
    }


