const myBtn = document.getElementById("myBtn");
const myPopOver = document.getElementById("popover");
const closebtn = document.getElementById("closeBtn");

myBtn.addEventListener("click",()=>{
    myPopOver.classList.add("active");
    
});

closebtn.addEventListener("click",()=>{
    myPopOver.classList.remove("active");
    
});