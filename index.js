




function startGame()
{
    window.location.href = "dice.html";
}

function getRandom(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  
    var RandomImage1 = "Images/" + "dice" + randomNumber1 +".png";
    var RandomImage2 = "Images/" + "dice" + randomNumber2 +".png"; 

   var img1 = document.querySelectorAll("img")[0];
   img1.setAttribute("src",RandomImage1);

   var img2 = document.querySelectorAll("img")[1];
   img2.setAttribute("src",RandomImage2);

   if(randomNumber1 > randomNumber2)
   {
       document.querySelector("h2").innerHTML = "Player1 wins!";
   }
   else if(randomNumber2>randomNumber1)
   {
       document.querySelector("h2").innerHTML = "Player2 wins!";
   }
   else{
       document.querySelector("h2").innerHTML = "Game Draw!"
   }
  } 