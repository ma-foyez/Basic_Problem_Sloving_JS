//inch to feet
document.getElementById("inchToFeet").addEventListener('click', display);
function display() {
    let inch = document.getElementById("inch").value;

    let inchToFeet = inch / 12;
    let feet = document.getElementById("feet").value = inchToFeet;
}


//Leap Year Program
document.getElementById("leapYear").addEventListener('click', LeapYears);
function LeapYears() {
    let year = document.getElementById("year").value;

    if (year === " ") {
        alert("Enter something");
    } else {
        if (year % 400 == 0) {
            let LeapYear = "Yes! This is a leap year."
            // let leapyear = document.getElementById("leapyear").value = LeapYear;
        } else if (year % 4 == 0 && year % 100 != 0) {
            let LeapYear = "Yes! This is a leap year."
            let leapyear = document.getElementById("leapyear").value = LeapYear;
        } else {
            let NotLeapYear = "Alas! This is not a leap year."
            let leapyear = document.getElementById("leapyear").value = NotLeapYear;
        }
    }
}

//Factorial Math Program
document.getElementById("Factorial").addEventListener('click', factorial);
function factorial() {
    let number = document.getElementById('number').value;
    let DefaultFact = 1;
    for (let i = 1; i <= number; i++) {

        DefaultFact = DefaultFact * i;
    }
    let setFactorial = document.getElementById('setFactorial').value = DefaultFact;

}

//Factorial Math Program
document.getElementById("Fibonacci").addEventListener('click', fibonacci);
function fibonacci() {
    let fiboNumber = document.getElementById('fiboNumber').value;
    let Fibo = [0, 1];
    for (let i = 2; i <= fiboNumber; i++) {

        Fibo[i] = Fibo[i - 1] + Fibo[i - 2];
    }
    let setFibonacci = document.getElementById('setFibonacci').value = Fibo;

}

//Factorial Math Program
document.getElementById("Prime").addEventListener('click', PrimeNumber);
function PrimeNumber() {
    let primeNum = document.getElementById('primeNumber').value;
    for (let i = 2; i < primeNum; i++) {
        if (primeNum % i === 0) {
            let notPrimeMessage = "Oh no! This is not a prime number."
            let setPrime = document.getElementById('setPrime').value = notPrimeMessage;
            console.log("not prime")
            break;
        }
        else {
            let primeMessage = "Yes! This is a prime number."
            let setPrime = document.getElementById('setPrime').value = primeMessage;
            console.log("prime");

        }
      
    }


}