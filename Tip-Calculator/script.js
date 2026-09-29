
function calculateTip() {

    const bill_amount = parseFloat(document.getElementById('bill-amount').value);
    const tip_percentage = parseFloat(document.getElementById('tip-percentage').value);
    
    if (isNaN(bill_amount) || isNaN(tip_percentage)) {
        alert("Please enter valid numbers for bill and tip.");
        return;
    }

    const totalTip = bill_amount * (tip_percentage/100) ;
    const totalAmount = bill_amount + totalTip;

    document.getElementById('tip-amount').textContent = '$' + totalTip.toFixed(2);
    document.getElementById('total-amount').textContent = '$' + totalAmount.toFixed(2);

};
