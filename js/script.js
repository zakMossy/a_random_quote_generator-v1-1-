// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
{
  quote : "In football (soccer) as in watchmaking, talent and elegance mean nothing without rigour and precision.",
  source : "- Lionel Messi",
  position : ',Forward'
},
{
  quote : 'When people succeed, it is because of hard work. Luck has nothing to do with success.',
  source : "- Diego Maradona",
  position : ',Midfielder'
},
{
  quote : 'I see myself as the best footballer in the world. If you don’t believe you are the best, then you will never achieve all that you are capable of.',
  source : "- Cristiano Ronaldo",
  position : ',Forward'
},
{
  quote : 'I am constantly being asked about individuals. The only way to win is as a team. Football is not about one or two or three star players.',
  source : "– Pelé",
  position : ',Forward'
},
{
  quote : 'It is not just about the money, it is about what you achieve on the pitch.',
  source : "- Ronaldinho",
  position : ',Midfielder'
}
]


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * 5);                           // Gets a random number between 0 and 4
  var randomQuote = quotes[randomNumber];                                     // Retrieves the random quote
  return randomQuote;
}
function getRandomColor(){
  var randomR = Math.floor(Math.random() * 255);                            // Gets a random number between 1  and 254
  var randomG = Math.floor(Math.random() * 255);
  var randomB = Math.floor(Math.random() * 255);
  var randomRGB = 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';   // Retrieves the RBG Value
  return randomRGB;
}

function timeout(){
    printQuote();                 // times out after 30 seconds and prints Quote again
}

// Create the printQuote funtion and name it printQuote
function printQuote(){
  var string = '<p class="quote">' + getRandomQuote().quote + '</p>' + '<p class="source">' + getRandomQuote().source + ' ' + getRandomQuote().position + '</p>';     // Structures sentence
  document.getElementById('quote-box').innerHTML = string;                                                                                              // Loads string
  document.body.style.backgroundColor = getRandomColor();                                                                                                 // Changes background color
  var timeoutID = setTimeout(timeout, 30000);                                                                                                                                           // times out after 30 seconds
}




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
