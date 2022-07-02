function verifiedPalindrom(string) {
  if(!string) return "string doesn't exists";

	return string.split('').reverse().join('') === string;
}
