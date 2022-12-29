const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");




btnEl.addEventListener("click", function(){
    toggle();
    setTimeout(toggle,2000);
    btnEl.innerHTML = `<a href="bagsDone.html" >DONE</a>`
    
});


    function toggle() {
        containerEl.classList.toggle("hide");
        popupContainerEl.classList.toggle("hide");
    
    }