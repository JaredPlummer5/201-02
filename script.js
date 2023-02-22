'use strict'

let name = prompt("What is your name?");

const x = document.querySelector("#Hello");

function displayName(username) {

    if (username === null || username.length == 0) {

        x.innerHTML = 'Hello';
        // .innerHTMl targets the HTML tag with the id set in line 5
    } else {
        x.innerHTML = `Hello ${username}`;
    }


}

displayName(name);
// This function takes the user's input and prints either Hello if the user types nothing 
// The else prints "Hello" and the user's input



let correctans = 0;
function quizGame() {

    let Q1 = prompt("Do I play sports?", "y or n");
    if (Q1.toLowerCase() == 'y' || Q1.toLowerCase() == "yes") {
        alert("Correct"), correctans++;
    }else{
        alert("wrong!!!!");
    }

    let Q2 = prompt("Do I like anime?", "y or n");

    if (Q2.toLowerCase() == 'y') {
        alert("Correct"), correctans++;
    }else{
        alert("wrong!!!!");
    }

    let Q3 = prompt("Do I not like coffee?", "y or n");

    if (Q3.toLowerCase() == 'n' || Q2.toLowerCase == 'no') {
        alert("Correct"), correctans++;
    }else{
        alert("wrong!!!!");
    }



    let Q4 = prompt("Do I ever talk to yourself?", "y or n");

    if (Q4.toLowerCase() == 'y'|| Q1.toLowerCase() == "yes") {
        alert("Correct"), correctans++;
    }else{
        alert("wrong!!!!");
    }



    let Q5 = prompt("Have I ever told an outrageous lie to a child?", "y or n");
    
    if (Q5.toLowerCase() == 'n' || Q1.toLowerCase() == "no") {
        alert("Correct"), correctans++;
    }else{
        alert("wrong!!!!");
    }
    
   
    

    alert(`Congrats ${name}. You made a ${correctans}/5`);
}





// function MakeShift(){

//     let MsPrompt = document.querySelector(".MsPrompt");
//     let question1 = document.querySelector("#question1");
//     let question2 = document.querySelector("#question2");
//     let question3 = document.querySelector("#question3");
//     let question4 = document.querySelector("#question4");
//     let question5 = document.querySelector("#question5");

//     MsPrompt.addEventListener({




//     });
    
// }



