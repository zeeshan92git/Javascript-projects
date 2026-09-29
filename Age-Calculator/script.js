const dobInput = document.getElementById('dob');
const ageBtn = document.getElementById('ageBtn'); 
const resultAge = document.getElementById('result');

ageBtn.addEventListener('click', () => {
    const dob = new Date(dobInput.value);
    console.log(dob.getTime());
    const today = new Date();
    console.log(today.getTime());

    if (isNaN(dob.getTime())) {
        resultAge.textContent = "Please select a valid date of birth.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();

    // Check if birthday hasn't occurred yet this year
    const hasBirthdayPassed =
        today.getMonth() > dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    resultAge.textContent = `Your age is ${age} years`;
});
