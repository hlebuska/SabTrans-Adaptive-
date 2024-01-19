const usersCheckbox = document.getElementById('users');
const usersInput = document.getElementById("users_input");
const usersNumbers = document.querySelector("#users_numbers .local_total .money");

const integrationCheckbox = document.getElementById('integration');
const integrationInput = document.getElementById("integration_input");
const integrationNumbers = document.querySelector("#integration_numbers .local_total .money");

const storageCheckbox = document.getElementById('storage');
const storageInput = document.getElementById("storage_input");
const storageNumbers = document.querySelector("#storage_numbers .local_total .money");

const specialistCheckbox = document.getElementById('specialist');
const specialistInput = document.getElementById("specialist_input");
const specialistNumbers = document.querySelector("#specialist_numbers .local_total .money");

const totalDay = document.getElementById('rubles_day');
const totalMonth = document.getElementById('rubles_month');


usersCheckbox.addEventListener("click", (event) => clickOnForm(usersCheckbox, usersInput));
usersInput.addEventListener("change", (event) => updateForm(usersCheckbox, usersInput, usersNumbers));

integrationCheckbox.addEventListener("click", (event) => clickOnForm(integrationCheckbox, integrationInput));
integrationInput.addEventListener("change", (event) => updateForm(integrationCheckbox, integrationInput, integrationNumbers));

storageCheckbox.addEventListener("click", (event) => clickOnForm(storageCheckbox, storageInput));
storageInput.addEventListener("change", (event) => updateForm(storageCheckbox, storageInput, storageNumbers));

specialistCheckbox.addEventListener("click", (event) => clickOnForm(specialistCheckbox, specialistInput));
specialistInput.addEventListener("change", (event) => updateForm(specialistCheckbox, specialistInput, specialistNumbers));


function clickOnForm(checkbox, input) {
    if(input.value == 0){
        checkbox.checked = false;
        input.focus();
    } else {
        checkbox.checked = true;
    }
}

function updateForm(checkbox, input, numbers){  
    if(input.value > 0){
        checkbox.checked = true;
        numbers.textContent = (20 * input.value);
    } else {
        checkbox.checked = false;
        numbers.textContent = "0";
    }
    totalDay.textContent = parseInt(usersNumbers.textContent) + parseInt(integrationNumbers.textContent) + parseInt(storageNumbers.textContent) + parseInt(specialistNumbers.textContent) + "₽";
    totalMonth.textContent = parseInt(totalDay.textContent) * 30 + "₽";
}