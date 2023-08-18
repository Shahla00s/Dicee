 function load() {
         setTimeout(myURL, 5000);
         clearTimeout(myURL);
      }

      function myURL() {
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource = "./images/" + randomDiceImage1;
document.querySelectorAll("img")[0].setAttribute("src" ,randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2 );

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆Player 1 wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🏆Player 2 wins!"
    } else if (randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw!"
    }
            }
