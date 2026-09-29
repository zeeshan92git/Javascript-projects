const toDoList = document.getElementById("toDoList");
const toDoInput = document.getElementById("newToDoItem");
const toDoToBtn = document.getElementById("toDoButton");

toDoToBtn.addEventListener("click",()=>{
    const newToDoInput = toDoInput.value;

    if (newToDoInput !== "") {
        const toDoItem = document.createElement("li");
        toDoItem.innerText = newToDoInput;

        const toDoDelBtn = document.createElement("button");
        toDoDelBtn.innerText = "X";

        toDoDelBtn.classList.add("del-todo-btn");
        toDoDelBtn.addEventListener("click",()=>{
            toDoItem.remove();
        });

        toDoItem.appendChild(toDoDelBtn);
        toDoList.appendChild(toDoItem);
        toDoInput.value = "";

    }else {
        alert("Add proper ToDo first!")
    }
});

