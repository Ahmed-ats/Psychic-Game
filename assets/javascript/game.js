var wins = 0; 
var losses = 0; 
var attempts = 10; 
var used = []; 



//the computer picks a random letter from the alphabet
var alphabets = ["a", "b", "c", "d", "e", 
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]; 



var winsText = document.getElementById("wins-text"); 
var lossesText = document.getElementById("losses-text"); 
var guessesLeft = document.getElementById("guesses-left"); 
var lettersUsed = document.getElementById("letters-used"); 





document.onkeyup = function (event) {
   
   //the user picks a random letter from the alphabet
    var userGuess = event.key; 
    console.log(userGuess); 

    var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)]; 
    console.log(computerGuess); 





    //if the user pick matches the computers pick
    //up the win count by one
    if (userGuess) {
        used.push(userGuess);
        if (userGuess === computerGuess) {
            wins++; 
            attempts = 10; 
            used = []; 
            console.log(wins); 
        }


            else if (userGuess !== computerGuess) {

                attempts -= 1; 
                if (attempts === 0) {

                    losses ++ ; 
                    attempts = 10; 
                    used = []; 
                }


            }
        
                // if (used.indexOf(userGuess) >= 0) {

                    
                // }
                // else {
                    
                //     used.push(userGuess); 
                    
                //     console.log(used); 
                // }







        



            winsText.textContent = "wins: " + wins; 
            lossesText.textContent = "losses: " + losses; 
            guessesLeft.textContent = "guesses left: " + attempts; 
            lettersUsed.textContent = "letters used: " + used; 
           
            }
    }
