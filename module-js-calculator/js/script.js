function calculator() {
  const operation = Number(prompt('Choose an operation:\n 1 - Addition (+)\n 2 - Subtraction (-)\n 3 - Multiplication (*)\n 4 - Division (/)\n 5 - Integer Division (%)\n 6 - Potentiation (**)'));

  if(!operation || operation >= 7) {
    alert('Error - Invalid operation');
    calculator()
  } else {
    let n1 = Number(prompt('Enter the first value: '));
    let n2 = Number(prompt('Enter the second value: '));
    let result;

    if(!n1 || !n2) {
      alert('Error - invalid parameters')
      calculator()
    } else {
      function addition() {
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`)
        newOperation()
      }
      function subtraction() {
        result = n1 - n2;
        alert(`${n1} - ${n2} = ${result}`)
        newOperation()
      }
      function multiplication() {
        result = n1 * n2;
        alert(`${n1} * ${n2} = ${result}`)
        newOperation()
      }
      function division() {
        result = n1 / n2;
        alert(`${n1} / ${n2} = ${result}`)
        newOperation()
      }
      function integerDivision() {
        result = n1 % n2;
        alert(`The remainder of the division between ${n1} and ${n2} is equal to ${result}`)
        newOperation()
      }
      function potentiation() {
        result = n1 ** n2;
        alert(`${n1} to the ${n2} is equal to ${result}`)
        newOperation()
      }
      function newOperation() {
        let option = prompt('Do you want to do another operation?\n 1 - Yes\n 2 - No');
  
        if (option == 1) {
          calculator();
        } else if (option ==2) {
          alert('See ya');
        } else {
          alert('Enter an valid option');
          newOperation()
        }
      }
    }

    switch (operation) {
      case 1:
        addition();
        break;
      case 2:
        subtraction();
        break;
      case 3:
        multiplication();
        break;
      case 4:
        division();
        break;
      case 5:
        integerDivision();
        break;
      case 6:
        potentiation();
        break;          
    }
  }  
}
calculator();