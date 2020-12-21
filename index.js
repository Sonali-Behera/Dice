let player1 = prompt("Enter 1st player name:");
let player2 = prompt("Enter 2nd player name:");

var randomNumber1 = (Math.floor(Math.random()*6))+1;
var randomNumber2 = (Math.floor(Math.random()*6))+1;
var randomDiceName  = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceName);
var randomDiceName2  = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceName2);
if(randomDiceName===randomDiceName2)
{
  document.querySelector("h1").innerHTML="Match draw!";
}
else if (randomDiceName>randomDiceName2)
{
  document.querySelector("h1").innerHTML="🚩" + player1 + " wins!!!";
}
else {
  document.querySelector("h1").innerHTML=player2 + " wins🚩!!!";
}
