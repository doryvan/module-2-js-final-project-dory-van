
<!-- Age Calculation -->
    <!-- First Member - Age Calculation -->

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
     <!-- Income Calculation -->
       function calculateIncome(memberNumber) {
           var salary = parseFloat(document.getElementById('salary' + memberNumber).value);
           var frequency = document.getElementById('frequency' + memberNumber).value;

           if (!isNaN(salary) && salary > 0) {
               var result;
               if (frequency.toLowerCase() === 'weekly') {
                   result = salary * 52;
               } else if (frequency.toLowerCase() === 'bi-weekly') {
                   result = salary * 26;
                } else if (frequency.toLowerCase() === 'twice-a-month') {
                   result = salary * 24;
               } else if (frequency.toLowerCase() === 'monthly') {
                   result = salary * 12;
               } else if (frequency.toLowerCase() === 'annual') {
                   result = salary;
               } else {
                   document.getElementById('result' + memberNumber).innerHTML = "Invalid frequency. Please choose weekly, bi-weekly, monthly, or annual.";
                   return;
               }

               document.getElementById('result' + memberNumber).innerHTML = `Your income is $${result.toFixed(2)} per ${frequency}.`;
           } else {
               document.getElementById('result' + memberNumber).innerHTML = "Please enter a valid salary.";
           }
       }

       function calculateTotal() {
   var result1 = parseFloat(document.getElementById('result1').innerHTML.replace(/[^\d.]/g, '')) || 0;
   var result2 = parseFloat(document.getElementById('result2').innerHTML.replace(/[^\d.]/g, '')) || 0;
   var result3 = parseFloat(document.getElementById('result3').innerHTML.replace(/[^\d.]/g, '')) || 0;
   var result4 = parseFloat(document.getElementById('result4').innerHTML.replace(/[^\d.]/g, '')) || 0;

   var totalIncome = result1 + result2 + result3 + result4;

   document.getElementById('total').value = totalIncome.toFixed(2);
    const qualify = document.getElementById("outputTarget");
    // Display qualification status
   displayQualificationStatus(totalIncome);
}

function displayQualificationStatus(totalIncome) {
   // Get the qualification status element
   let qualificationStatusElement = document.getElementById('qualificationStatus');

   // Determine qualification status based on total income
   let qualificationStatus = (totalIncome > 96600) ? 'not-qualify' : 'qualify';
   let message = (totalIncome > 96600) ? 'Not Qualify for Premium Assistance' : 'Qualify for Premium Assistance';

   // Update the element with the appropriate class and message
   qualificationStatusElement.className = 'qualification-status ' + qualificationStatus;
   qualificationStatusElement.innerText = message;     
           
       }
       