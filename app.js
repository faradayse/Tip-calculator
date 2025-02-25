function calculateTip() {
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        resultDiv.innerHTML = "Please enter valid positive numbers.";
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    resultDiv.innerHTML = `
        Tip Amount: $${tipAmount.toFixed(2)}<br>
        Total Bill: $${totalAmount.toFixed(2)}
    `;
}

function setTip(percentage) {
    document.getElementById("tip-percentage").value = percentage;
    calculateTip(); // Auto-calculate when a tip button is clicked
}

function resetForm() {
    document.getElementById("bill-amount").value = "";
    document.getElementById("tip-percentage").value = "";
    document.getElementById("result").innerHTML = "";
}

