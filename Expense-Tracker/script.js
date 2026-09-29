const addExpenseEl = document.querySelector(".add-expense-btn");
const expenseListEl = document.querySelector(".expense-list");
const totalExpenseEl = document.querySelector(".total-expense p");

let expenses = [];
let totalAmount = 0;

function renderExpenses() {
    let html = "";

    expenses.forEach((expense) => {
        html += `
        <div class="expense-item">
        <div class="expense-item-description">${expense.description.toUpperCase()}</div>
        <div class="expense-item-amount">$${expense.amount.toFixed(2)}</div>
        <div class="delete-expense-btn">&times;</div>
        </div>`;
    });
    expenseListEl.innerHTML = html;
    totalExpenseEl.innerText = `Total Expense: $${totalAmount}`;

};

function addExpense() {
    const description = prompt("Enter expense description");
    const amount = parseFloat(prompt("Enter expense amount"));

    if(description &&  !isNaN(amount) && amount > 0 &&  amount)
    {
        const expense = {
            description:description,
            amount : amount
        };
        expenses.push(expense);
        totalAmount += amount;
        renderExpenses();
    }

}

function deleteExpense(index) {

    totalAmount -= expenses[index].amount;
    expenses.splice(index,1);
    renderExpenses();


};




addExpenseEl.addEventListener("click",addExpense);

expenseListEl.addEventListener("click",function(event){

    if(event.target.classList.contains("delete-expense-btn")){
        const index = Array.from(event.target.parentNode.parentNode.children).
                        indexOf(event.target.parentNode);
        
        deleteExpense(index);
    }
})