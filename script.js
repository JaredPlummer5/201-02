'use strict'




const MsPrompt = document.querySelector(".MsPrompt");
const greyBG = document.querySelector(".greyedBackground")
const takeQuiz2 = document.querySelector("#TakeQuiz2");

//const question6 = document.querySelector("Question6").style.display;
const x = document.getElementsByClassName("Yes");
const y = document.getElementsByClassName("No");

function quizCheck() {
    const question1 = document.querySelector("#Question1").style.display;
    const question2 = document.querySelector("#Question2").style.display;
    const question3 = document.querySelector("#Question3").style.display;
    const question4 = document.querySelector("#Question4").style.display;
    const question5 = document.querySelector("#Question5").style.display;
    const QandA = [question1, question2, question3, question4, question5];
    let currentQuestion = 0;
    for (let i = 0; i < QandA.length; i++) {
        // Starts a for loop that iterates over 
        // the elements of the "QandA" array.

        if (QandA[i] == 'block') {
            // Checks if the "display" CSS property value of 
            // the current element is equal to "block".

            currentQuestion = i;
            // If the current element has a "display" 
            // CSS property value of "block", 
            // sets the value of the variable "currentQuestion" to the 
            // index of the current element.

        }

    }
    console.log(currentQuestion);
    console.log(QandA);
    if (event.target.classList == 'Yes') {
        // event.target is set to the target of the event listener
        // And in this case its getting the attriubute of the target of the eventlistener.
        // Checks if the clicked element has 
        // the class name "Yes".

        // event.target refers to the element that triggered the event, 
        // in this case, the element that was clicked

        // classList is a property of the element that returns a 
        // DOMTokenList object representing the class 
        // attribute of the element.

        // event.target.classList is essentially an array-like object
        // containing all the class names of the clicked element. 
        // You can use methods like add(), remove(), and toggle() 
        // to manipulate the class list.

        // In the code, event.target.classList is being used to check whether 
        // the clicked element has the class "Yes" or "No". 
        // This is being done using the == operator to compare 
        // the classList to the string "Yes" or "No". 
        // If the classList contains the class "Yes" or "No", 
        // the corresponding quiz answer is being checked.


        if (currentQuestion == 0 || currentQuestion == 1 || currentQuestion == 3 || currentQuestion == 4) {
            // If the current question is 1, 2, 4, or 5, 
            // executes the code inside the block.

            alert("Correct")



        } else {
            // If the current question is not 1, 2, 4, or 5, 
            // shows an alert with the message "Incorrect".
            alert("Incorrect")
        }

    } else if (event.target.classList == 'No') {

        // checks if the clicked element has a class of "No".

        if (currentQuestion == 2) {

            // checks if the current question is 
            // the question whose correct answer is "No".

            alert("Correct")
        } else {
            alert("Incorrect")
        }

    }

}
function yes() {
    alert(event.target)

}
// The yes function simply displays an alert 
// containing the target element that was clicked. 

function no() {
    alert(event.target)
}

// The no function simply displays an 
// alert containing the target element that was clicked. 

for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", quizCheck);
    y[i].addEventListener("click", quizCheck);

}
// This loop adds event listeners to all 
// elements with the class Yes and No. 
// When a click event occurs on one of these elements, 
// the quizCheck function will be called.

const cerealSubBtn = document.querySelector("#CerealSubmitBtn");
const cereal = document.getElementsByClassName("Cereal");

function loop6() {

    if (cereal[0].checked || cereal[3].checked) {
        alert("You got it!!!");
        //   console.log(cereal[0].checked);
        //   console.log(cereal[3].checked);


    } else {
        alert("You're incorrect. Try again");
        //   console.log(cereal[1].checked);

    }
}


function loop7() {
    const input = document.getElementById("inputBox");
    const submitButton = document.getElementById("submitButton");
    const question7 = document.querySelector("#Question7");
    let clickCount = 6;
    let alertShown = false;

    // These lines use const and let to declare variables. 
    // input is assigned the value of the element with ID "inputBox", 
    // submitButton is assigned the value of the element with ID "submitButton", 
    // question7 is assigned the value of the element with ID "Question7", 
    // clickCount is initialized to 6, and alertShown is initialized to false.




    submitButton.addEventListener("click", () => {
        // This adds an event listener to submitButton 
        // that listens for a click event. 
        // When the button is clicked, the function 
        // inside the curly braces is executed.
        if (clickCount <= 0) {
            return;
        }
        //   This line checks if clickCount is less than or equal to 0. 
        //   If it is, the function returns, which means that the 
        //   rest of the code in the function is not executed.

        clickCount--;
        console.log(`Button has been clicked ${clickCount} time(s).`);

        //   These lines decrease clickCount by 1 and 
        //   log a message to the console 
        //   indicating how many times the button has 
        //   been clicked.

        const guess = parseInt(input.value);

        //   This line parses the value of input as 
        //   an integer and assigns it to guess.

        // parseInt is a built-in JavaScript function that takes 
        // a string as input and converts it into an integer number. 
        // The function reads and returns an integer from the beginning 
        // of the string until it encounters a non-digit character.

        // For example, parseInt("123") would return the number 123, 
        // while parseInt("123abc") would return 123 as well. 
        // If the input string does not start with a valid number, 
        // parseInt will return NaN (not a number).



        if (guess > 19) {
            if (!alertShown) {
                alert("You're too high");
                alertShown = true;
            }
        } else if (guess < 19) {
            if (!alertShown) {
                alert("You're too low");
                alertShown = true;
            }
        } else {
            if (!alertShown) {
                alert("You're correct");
                alertShown = true;
            }
            clickCount = 0;
        }

        // These lines above check the value of guess 
        // and display an alert 
        // depending on whether the value 
        // is too high, too low, or correct. 
        // The if (!alertShown) statements ensure that 
        // each alert is only shown once. 
        // If guess is correct, clickCount is set to 0.

        if (clickCount === 0) {
            question7.style.display = 'none';
        }
        // This line checks if clickCount is equal to 0.
        // If it is, it sets the display style of question7 to 'none', 
        // which means that the element is hidden.
    });
}


function QuizGameQ1() {
    document.getElementById("Question1").style.display = 'block';

    document.getElementById("Question2").style.display = 'none'
    document.getElementById("Question3").style.display = 'none'
    document.getElementById("Question4").style.display = 'none'
    document.getElementById("Question5").style.display = 'none'
    document.getElementById("Question6").style.display = 'none'
    document.getElementById("Question7").style.display = 'none'


}

function QuizGameQ2() {
    document.getElementById("Question2").style.display = 'block';

    document.getElementById("Question1").style.display = 'none'
    document.getElementById("Question3").style.display = 'none'
    document.getElementById("Question4").style.display = 'none'
    document.getElementById("Question5").style.display = 'none'
    document.getElementById("Question6").style.display = 'none'
    document.getElementById("Question7").style.display = 'none'


}

function QuizGameQ3() {
    document.getElementById("Question3").style.display = 'block';

    document.getElementById("Question2").style.display = 'none'
    document.getElementById("Question1").style.display = 'none'
    document.getElementById("Question4").style.display = 'none'
    document.getElementById("Question5").style.display = 'none'
    document.getElementById("Question6").style.display = 'none'
    document.getElementById("Question7").style.display = 'none'



}

function QuizGameQ4() {
    document.getElementById("Question4").style.display = 'block';

    document.getElementById("Question2").style.display = 'none';
    document.getElementById("Question3").style.display = 'none';
    document.getElementById("Question1").style.display = 'none';
    document.getElementById("Question5").style.display = 'none';
    document.getElementById("Question6").style.display = 'none';
    document.getElementById("Question7").style.display = 'none';


}

function QuizGameQ5() {
    document.getElementById("Question5").style.display = 'block';

    document.getElementById("Question2").style.display = 'none';
    document.getElementById("Question3").style.display = 'none';
    document.getElementById("Question4").style.display = 'none';
    document.getElementById("Question1").style.display = 'none';
    document.getElementById("Question6").style.display = 'none';
    document.getElementById("Question7").style.display = 'none';


}

function QuizGameQ6() {
    document.getElementById("Question6").style.display = 'block'

    document.getElementById("Question2").style.display = 'none'
    document.getElementById("Question3").style.display = 'none'
    document.getElementById("Question4").style.display = 'none'
    document.getElementById("Question5").style.display = 'none'
    document.getElementById("Question1").style.display = 'none'
    document.getElementById("Question7").style.display = 'none'

}

function QuizGameQ7() {
    document.getElementById("Question7").style.display = 'block';

    document.getElementById("Question2").style.display = 'none';
    document.getElementById("Question3").style.display = 'none';
    document.getElementById("Question4").style.display = 'none';
    document.getElementById("Question5").style.display = 'none';
    document.getElementById("Question6").style.display = 'none';
    document.getElementById("Question1").style.display = 'none';

}


function MakeShift() {

    MsPrompt.classList.toggle("show");
    greyBG.classList.toggle("show2");

    document.getElementById("Question2").style.display = 'none'
    document.getElementById("Question3").style.display = 'none'
    document.getElementById("Question4").style.display = 'none'
    document.getElementById("Question5").style.display = 'none'
    document.getElementById("Question6").style.display = 'none'
    document.getElementById("Question7").style.display = 'none'


}





