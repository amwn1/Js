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