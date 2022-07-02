function verifiedPalindrom(string) {
  if(!string) return "string doesn't exists";

	return string.split('').reverse().join('') === string;
}
function verifiedPalindrom2(string) {
  if(!string) return "string doesn't exists";

  for(let i =0; i <string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]){
    return false;
    }
  }

  return true;
}
console.log(verifiedPalindrom2('abba'));