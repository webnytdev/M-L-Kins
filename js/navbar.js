const hide = document.getElementById("hide");
const show = document.getElementById("show");
const ul = document.getElementById("ul");

show.addEventListener("click", function(){
    ul.classList.add("active");
    show.classList.add("active")
    hide.classList.add("active")
})

hide.addEventListener("click", function(){
    ul.classList.remove("active");
    show.classList.remove("active")
    hide.classList.remove("active")
})