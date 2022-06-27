function comparisonNumber(num1, num2) {
  const firstPhrase = createFirstPhrase(num1,num2);
	const secondPhrase = createSecondPhrase(num1,num2);

	return `${firstPhrase} ${secondPhrase}`
}
function createFirstPhrase(num1,num2) {
	let areEqual = '';

	if(num1 !== num2) {
		areEqual = 'not';
	}
	return `The numbers ${num1} and ${num2} are ${areEqual} equal.`
};

function createSecondPhrase(num1,num2) {
	const sum = num1 + num2;

	let result10 = 'lower';
	let result20 = 'lower';
	const compare10 = sum > 10; 
	const compare20 = sum > 20;

	if(compare10) {
		result10 = 'bigger';
	}
	if(compare20) {
		result20 = 'bigger';
	}

	return`Its sum is ${sum} wich is ${result10} than 10 and ${result20} than 20`;
}
console.log(comparisonNumber(5,10));