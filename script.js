// Age Calculation
function calculateAge() {
    var yearOfBirthInput = document.getElementById('yearOfBirth');
    var ageInput = document.getElementById('age');

    var yearOfBirth = parseInt(yearOfBirthInput.value);
    var currentYear = new Date().getFullYear();

    if (isNaN(yearOfBirth) || yearOfBirth <= 0) {
        ageInput.value = "Invalid year of birth";
    } else {
        var age = currentYear - yearOfBirth;
        ageInput.value = age;
    }
}

<!-- Second Member - Age Calculation -->

function calculateAge2() {
    var yearOfBirthInput2 = document.getElementById('yearOfBirth2');
    var ageInput2 = document.getElementById('age2');

    var yearOfBirth2 = parseInt(yearOfBirthInput2.value);
    var currentYear2 = new Date().getFullYear();

    if (isNaN(yearOfBirth2) || yearOfBirth2 <= 0) {
        ageInput2.value = "Invalid year of birth";
    } else {
        var age2 = currentYear2 - yearOfBirth2;
        ageInput2.value = age2;
    }
}

 <!-- Third Member - Age Calculation -->
function calculateAge3() {
    var yearOfBirthInput3 = document.getElementById('yearOfBirth3');
    var ageInput3 = document.getElementById('age3');

    var yearOfBirth3 = parseInt(yearOfBirthInput3.value);
    var currentYear3 = new Date().getFullYear();

    if (isNaN(yearOfBirth3) || yearOfBirth3 <= 0) {
        ageInput3.value = "Invalid year of birth";
    } else {
        var age3 = currentYear3 - yearOfBirth3;
        ageInput3.value = age3;
    }
}


<!-- Fourth Member - Age Calculation -->
function calculateAge4() {
    var yearOfBirthInput4 = document.getElementById('yearOfBirth4');
    var ageInput4 = document.getElementById('age4');

    var yearOfBirth4 = parseInt(yearOfBirthInput4.value);
    var currentYear4 = new Date().getFullYear();

    if (isNaN(yearOfBirth4) || yearOfBirth4 <= 0) {
        ageInput4.value = "Invalid year of birth";
    } else {
        var age4 = currentYear4 - yearOfBirth4;
        ageInput4.value = age4;
    }
}
// Income Calculation
function calculateIncome(memberNumber) {
var name = document.getElementById('name' + memberNumber).value;
var company = document.getElementById('company' + memberNumber).value;
var salary = parseFloat(document.getElementById('salary' + memberNumber).value);
var frequency = document.getElementById('frequency' + memberNumber).value;
var resultElement = document.getElementById('result' + memberNumber);

if (!isNaN(salary) && salary > 0) {
 var result;
 switch (frequency.toLowerCase()) {
     case 'weekly':
         result = salary * 52;
         break;
     case 'bi-weekly':
         result = salary * 26;
         break;
     case 'twice-a-month':
         result = salary * 24;
         break;
     case 'monthly':
         result = salary * 12;
         break;
     case 'annual':
         result = salary;
         break;
     default:
         resultElement.innerHTML = "Invalid frequency. Please choose weekly, bi-weekly, monthly, twice-a-month or annual.";
         return;
 }

 resultElement.innerHTML = `<label>${name}</label> of <label>${company}</label> has total income $${result.toFixed(2)} per ${frequency}.`;
} else {
 resultElement.innerHTML = "Please enter a valid salary.";
}
}

// Total Calculation
function calculateTotal() {
var totalIncome = [1, 2, 3, 4].reduce(function (total, memberNumber) {
 var result = parseFloat(document.getElementById('result' + memberNumber).innerHTML.replace(/[^\d.]/g, '')) || 0;
 return total + result;
}, 0);

var familyCount = parseInt(document.getElementById('familyCount').value);

// Display qualification status
displayQualificationStatus(totalIncome, familyCount);

// Update total input field with the calculated totalIncome
document.getElementById('total').value = totalIncome.toFixed(2);
}

// Qualification Status
function displayQualificationStatus(totalIncome, familyCount) {
// Get the qualification status element
let qualificationStatusElement = document.getElementById('qualificationStatus');

// Determine qualification status based on total income and family count
let qualificationStatus = (familyCount == 1 && totalIncome < 47000) ||
                       (familyCount == 2 && totalIncome < 64000) ||
                       (familyCount == 3 && totalIncome < 80000) ||
                       (familyCount == 4 && totalIncome < 96600)
                       ? 'qualify'
                       : 'not-qualify';

// Update the element with the appropriate class and message
let message = (qualificationStatus === 'qualify') ? 'Qualify for Premium Assistance' : 'Not Qualify for Premium Assistance';
qualificationStatusElement.className = 'qualification-status ' + qualificationStatus;
qualificationStatusElement.innerText = message;
}
