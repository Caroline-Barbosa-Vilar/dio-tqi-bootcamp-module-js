var modifiedNumber = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  modifiedNumber.innerHTML = currentNumber;
}
function decrement() {
  currentNumber = currentNumber - 1;
  modifiedNumber.innerHTML = currentNumber;
}