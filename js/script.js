/* --------------------------------------------- */
/************* Genric Script JS ******************/
/* --------------------------------------------- */

// reload the page on click header link 
var h1Reload = document.getElementById('myLink');

// Function for reload the page on click h1 
h1Reload.addEventListener('click',  (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
});

// event for the button generate
var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click", () => {

    // Ask the user to insert a word 
    var userWord = document.getElementById("InsertWord");
    console.log("Word inserted from user: ", userWord);
    document.getElementById("userWord").innerHTML = userWord;
    // Function to recognize if it's palindrome or not 
    function isPalindrome(str) {
        
        var newStr = "";

        for (var i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }

        if (str == newStr) {
            return true;
        } else {
            return false;
        }
    }

    if (isPalindrome(InsertWord)) {
        console.log("Word inserted from user is palindrome");
        document.getElementById("isPalindrome").innerHTML = "is palindrome";
    } else {
        console.log("Word inserted from user is not palindrome");
        document.getElementById("isPalindrome").innerHTML = "is not palindrome";
    }

    // Ask the user to choose between even or odd
    var userSelection = document.getElementById("evenOrOdd");
    console.log("Choice between even or odd: ", userSelection);
    document.getElementById("userChoice").innerHTML = userSelection;

    // Ask the user to choose a number between 1 and 5
    var userNumber = document.getElementById("choiceNumber");
    console.log("Choice a number between 1 and 5: ", userNumber);
    document.getElementById("userNumber").innerHTML = userNumber;

    // Fucntion to generate a random number
    function randomNumber(min, max) {
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate a random number between 1 and 5 for PC
    var pcNumber = randomNumber(1, 5);
    console.log("Random number between 1 and 5 for PC: ", pcNumber);
    document.getElementById("pcNumber").innerHTML = pcNumber;

    // sum between user number and PC number
    var sum = userNumber + pcNumber;
    console.log("Sum between user number and PC number is: ", sum);
    document.getElementById("sum").innerHTML = sum;

    // Function to recognize if the sum is even or odd 
    function isEven(sum) {
        if (sum % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    var result = isEven(sum);

    if (result == true) {
        result = "even";
        console.log("Sum is:", result);
        document.getElementById("result").innerHTML = result;

    } else {
        result = "odd";
        console.log("Sum is:", result);
        document.getElementById("result").innerHTML = result;
    }


    // Recognize if the user has won or lost
    if (userSelection == result) {
        console.log("User has won");
        document.getElementById("winner").innerHTML = "You won";
    } else {
        console.log("User has lost");
        document.getElementById("winner").innerHTML = "You lost, PC won";
    }
});

// event for the button cancel
var btnGenerate = document.getElementById("cancel");
btnGenerate.addEventListener("click",
    function () {
        // null value
        document.getElementById("InsertWord").value = "";
        document.getElementById("evenOrOdd").value = "";
        document.getElementById("choiceNumber").value = "";

        document.getElementById("userWord").innerHTML = "";
        document.getElementById("isPalindrome").innerHTML = "";
        document.getElementById("userChoice").innerHTML = "";
        document.getElementById("userNumber").innerHTML = "";
    }
);






















