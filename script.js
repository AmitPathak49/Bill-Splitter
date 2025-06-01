const billAmountInput = document.querySelector("#bill-amount");
const customTipInput = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const generateBillBtn = document.querySelector(".generate-bill-btn");
const tipAmountOutput = document.querySelector(".tip-amount span");
const totalBillOutput = document.querySelector(".total-amount span");
const eachPersonBillOutput = document.querySelector(".each-person-bill span");
const tipsContainer = document.querySelector(".tip-container");
const resetBtn = document.querySelector(".reset-btn");

let tipPercentage = 0; // Initialize tip percentage

generateBillBtn.addEventListener("click", () => {
    const billAmount = parseInt(billAmountInput.value);
    // const customTip = parseInt(customTipInput.value); 
    const numberOfPeople = parseInt(numberOfPeopleInput.value); 

    const tipAmount = billAmount * (tipPercentage / 100) // Calculate tip amount, default to 0 if customTip is empty
    const totalBill = billAmount + tipAmount; // Calculate total bill
    const eachPersonBill = totalBill / numberOfPeople; // Calculate each person's share of the bill
    // Update the output fields with the calculated values
    
    tipAmountOutput.innerText = `₹ ${tipAmount}`; // Display tip amount
    totalBillOutput.innerText = `₹ ${totalBill}`; // Display total bill
    eachPersonBillOutput.innerText = `₹ ${eachPersonBill}`; // Display each person's share of the bill

    resetBtn.disabled = false // Enable the reset button after generating the bill
    
});

tipsContainer.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target !== tipsContainer) {
        tipsContainer.querySelectorAll(".tip").forEach((tip) => {
            tip.classList.remove("selected"); // Remove 'selected' class from all tips
        });
        e.target.classList.add("selected");
        tipPercentage = parseInt(e.target.innerText);
        customTipInput.value = ""; // Clear custom tip input when a predefined tip is selected
    }
    
});

customTipInput.addEventListener("input", () => {
    tipPercentage = parseInt(customTipInput.value); // Update tip percentage based on custom input
    tipsContainer.querySelectorAll(".tip").forEach((tip) => 
            tip.classList.remove("selected"));
});

resetBtn.addEventListener("click", () => {
    tipPercentage = 0; // Reset tip percentage to 0
    billAmountInput.value = ""; // Clear bill amount input
    customTipInput.value = ""; // Clear custom tip input
    numberOfPeopleInput.value = ""; // Clear number of people input
    tipAmountOutput.innerText = "₹ 0"; // Reset tip amount output
    totalBillOutput.innerText = "₹ 0"; // Reset total bill output
    eachPersonBillOutput.innerText = "₹ 0"; // Reset each person's share output
    tipsContainer.querySelectorAll(".tip").forEach((tip) => 
            tip.classList.remove("selected")); // Remove 'selected' class from all tips

    resetBtn.disabled = true; // Disable the reset button after resetting
});































