// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById("btn").addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    // getting element by class name, both in hours worked  and pay rate, as well as the corresponding weekly pay span for each person
    overtimePayPeriod = 0;
    currentHoursWorked = document.getElementsByClassName("hoursWorked")[i].value;
    currentPayRate = document.getElementsByClassName("payRate")[i].value;
    // if currentHoursWorked is greater than 40, we get the amount of overtime hours worked, and change the amount of hours on the regular hourly rate to 40
    if (currentHoursWorked > 40) {
      overtimePayPeriod = currentHoursWorked - 40
      currentHoursWorked = 40
    }
    outputStatement = (currentHoursWorked * currentPayRate + overtimePayPeriod * 1.5 * currentPayRate).toFixed(2);
    document.getElementsByClassName("wage")[i].innerHTML = outputStatement;
  }
})

