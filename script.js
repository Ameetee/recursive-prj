//Leap Year Checker:

// function isLeapYear(year) {
//     // Leap year rules:
//     // 1. Divisible by 4
//     // 2. Not divisible by 100 unless also divisible by 400
    
//     // Check if the year is divisible by 4
//     const divisibleBy4 = year % 4 === 0;
    
//     // Check if the year is divisible by 100
//     const divisibleBy100 = year % 100 === 0;
    
//     // Check if the year is divisible by 400
//     const divisibleBy400 = year % 400 === 0;
    
//     // Determine if it's a leap year
//     if (divisibleBy4 && (!divisibleBy100 || divisibleBy400)) {
//         return true; // Leap year
//     } else {
//         return false; // Not a leap year
//     }
// }

// // Example usage:
// console.log(isLeapYear(2020)); // true (divisible by 4 and not by 100)
// console.log(isLeapYear(2021)); // false (not divisible by 4)
// console.log(isLeapYear(1900)); // false (divisible by 100 but not by 400)
// console.log(isLeapYear(2000)); // true (divisible by 400)




// Weather Clothing Adviser:
// function clothingAdviser(temperature, isRaining) {
//     let advice = "Wear ";

//     // Temperature-based clothing advice
//     if (temperature >= 25) {
//         advice += "light and breathable clothing"; // Hot weather
//     } else if (temperature >= 15 && temperature < 25) {
//         advice += "a light jacket or sweater"; // Mild weather
//     } else if (temperature >= 5 && temperature < 15) {
//         advice += "a jacket or coat"; // Cool weather
//     } else {
//         advice += "warm layers and a heavy coat"; // Cold weather
//     }

//     // Add rain advice if it's raining
//     if (isRaining) {
//         advice += " and bring an umbrella or raincoat";
//     }

//     return advice;
// }

// // Example usage:
// const currentTemperature = 18; // Example temperature
// const isRainingNow = false; // Example weather condition (true or false)

// console.log(`Current temperature: ${currentTemperature}°C`);
// console.log(`Is it raining? ${isRainingNow ? 'Yes' : 'No'}`);

// const clothingAdvice = clothingAdviser(currentTemperature, isRainingNow);
// console.log(`Advice: ${clothingAdvice}`);
