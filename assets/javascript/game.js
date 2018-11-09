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
 
    // generate a random letter for the  computerGuess
    var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)]; 
    console.log(computerGuess); 





    
    if (userGuess) {
        

        // saves every userGuess in an array 
        used.push(userGuess);
       
       //if the user pick matches the computers pick
        if (userGuess === computerGuess) {
            
            //up the win count by one
            wins++; 
           
            // reset attemps 
            attempts = 10; 
            
            // clear array 
            used = []; 
            // console.log(wins); 
        }

             //if the user pick does not matches the computers pick
            else if (userGuess !== computerGuess) {
                  
                // decrmeant attemps by 1 
                attempts -= 1; 
                
                // when user is out attempts 
                if (attempts === 0) {

                    // up the loss count by 1
                    losses ++ ; 
                    
                    // reset attemps 
                    attempts = 10; 
                   
                    // clear array 
                    used = []; 
                }


            }
        
                // if (used.indexOf(userGuess) >= 0) {

                    
                // }
                // else {
                    
                //     used.push(userGuess); 
                    
                //     console.log(used); 
                // }







        


            // call the wins , losses , guesses left and the letter array 
            winsText.textContent = "wins: " + wins; 
            lossesText.textContent = "losses: " + losses; 
            guessesLeft.textContent = "guesses left: " + attempts; 
            lettersUsed.textContent = "letters used: " + used; 
           
            }
    }
