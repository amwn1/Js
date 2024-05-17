# Project related to DOM

## project link
[click here]()

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button")
console.log(buttons);
const body = document.querySelector("body")

buttons.forEach(function(button) {
  button.addEventListener('click' , function(e){
    switch(e.target.id){
      case 'grey' : body.style.backgroundColor = e.target.id ;
      break;
      case 'white' : body.style.backgroundColor = e.target.id ;
      break;
      case 'blue' : body.style.backgroundColor = e.target.id ;
      break;
      case 'yellow' : body.style.backgroundColor = e.target.id ;
      break;
    }
  });
});

```
## project 2 code with homework
``` javascript
const form = document.querySelector('form')
const tip = document.querySelector('#tip')
form.addEventListener('submit' , function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if( height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
  }else if( weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
  }
  else {
    const bmi =(weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}<span>`
    additional(bmi);
  }
  function additional( bmi ){
  if(bmi<=18.6){
    tip.innerHTML = "You are underweight";
  }
  else if(bmi > 18.6 && bmi < 24.9){
    tip.innerHTML = "You are Healthy"
  }
  else{
    tip.innerHTML = "You are overweight"
  }}
})
```
## project 3 solution code 

```javascript 
const clock = document.getElementById('clock')
// document.querySelector('#clock')



setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```
## ASSIGNMENT 3

```javascript 
let randomNumber = Math.floor(Math.random() * 100) + 1;


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Correct Number: ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You win!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Higher');
  } else if (guess > randomNumber) {
    displayMessage('Lower');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remain.innerHTML = `${10 - numGuess + 1}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remain.innerHTML = `${10 - numGuess + 1}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```
## ASSIGNMENT 4 (digital Clock)
```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')



setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```
## ASSIGNMENT 5
```javascript
console.log('Project 5');

window.addEventListener('keydown',(e) => {
  insert.innerHTML = `<div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 </table>
  </div>`
})
```
## ASSIGNMENT 6
```javascript
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i = 0 ; i < 6 ; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color 
};

let intervalId = null;

const startChangingColor = function(){
   if (intervalId === null) { 
    intervalId = setInterval(changeBGcolor, 1000);
  }
    function changeBGcolor(){
      document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function(){
  if (intervalId !== null) { // Only clear interval if it's set
    clearInterval(intervalId);
    intervalId = null;
  }
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)


```