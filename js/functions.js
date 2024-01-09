
const checkPalindrome = (palindrome) => {

  const palindromeEd = palindrome
    .replaceAll(' ', '')
    .toLowerCase();

  let palindromeReverse = '';

  for (let i = palindromeEd.length - 1; i >= 0; i--) {
    palindromeReverse += palindromeEd.at(i);
  }

  return palindromeReverse === palindromeEd;
};
checkPalindrome();

const getNumbers = (anyString) => {

  anyString = String(anyString);
  let anyNumber = '';

  for (let i = 0; i < anyString.length; i++) {

    if (Number.isInteger(parseInt(anyString.at(i), 10))) {
      anyNumber += parseInt(anyString.at(i), 10);
    }
  }
  return parseInt(anyNumber, 10);
};
getNumbers();

const checkStringLength = (str, length) => str.length <= length;
checkStringLength();


function makeName(sourse, minLength, addition) {

  const targetLength = minLength - sourse.length;

  if (targetLength <= 0) {
    return sourse;
  }
  return addition.slice(0, targetLength % addition.length) + addition.repeat(targetLength / addition.length) + sourse;
}

makeName();
