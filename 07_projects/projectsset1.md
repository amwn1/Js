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