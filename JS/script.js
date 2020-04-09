

 'use strict';

let money = +prompt('Your budget for mounth?'),
    date = prompt('Date in format YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


// Iteration statement - "for"

// for (let i =0; i < 2; i++) {
//     let expA = prompt("Enter expenses for this month ?");
//     let expB = prompt("How mutch it cost ?");

//     if (typeof(expA)==="string" && (typeof(expA) != null && typeof(expB) != null) &&
//     expA != "" && expB != "" && expA.length < 50 )
//     {
//         console.log("done");
//         appData.expenses[expA] = expB;
//     } else {
//         alert("Not allowed value!");
//         i--;
//     }
// }


// Iteration starement - "do"

// let i = 0;
// do {
//     let expA = prompt("Enter expenses for this month ?");
//     let expB = prompt("How mutch it cost ?");
//     i++;
//     appData.expenses[expA] = expB;
// if (typeof(expA) === "string" && typeof(expA) != null && typeof(expB) != null && expA != "" && expB != "") 
//     {
//     console.log("done");
// } else {
//     alert("Not allowed value!");
//     i--;
// }
// } 
// while (i < 2);


//Iteration statement - "while"

let i = 0;
while (i < 2) {
    let expA = prompt("Enter expenses for this month ?"),
        expB = prompt("How mutch it cost ?");
        i++;
        appData.expenses[expA] = expB;
    if (typeof(expA) === "string" && typeof(expA) != null && typeof(expB) != null && expA != "" && expB != "") {
        console.log("done");
    } else {
        alert("Not allowed value!");
        i--;
    }
}

appData.budgetPerDay = (appData.budget / 30).toFixed(2);

alert(`Your budget for day: ${appData.budgetPerDay}`);

if (appData.budgetPerDay < 15) {
    alert("Low prosperity!");
} else if (appData.budgetPerDay < 25 ) {
    alert("Middle-income!");
} else if (appData.budgetPerDay > 25 ) {
    alert("High prosperity!");
} else {
    alert("wrong value!");
} 
