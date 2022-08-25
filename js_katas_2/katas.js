/*
Write JavaScript program that accepts a sentence and calculate the number of words, digits, uppercase letters and lowercase letters.

*/

// Code starts here

const strProperties = (myString) => {
  const words = myString.split(" ").length;
  const numbers = [];
  const upperCaseCharacters = [];
  const lowerCaseCharacters = [];
  const special = [];
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = alphabets.toUpperCase();
  for (let i of myString) {
    Number(i);
    if (i == Number(i) && i !== " ") {
      numbers.push(i);
    } else if (upperAlphabet.includes(i)) {
      upperCaseCharacters.push(i);
    } else if (alphabets.includes(i)) {
      lowerCaseCharacters.push(i);
    } else {
      special.push(i);
    }
  }

  console.log(`words are ${words}`);
  console.log(`numbers are ${nums.length}`);
  console.log(`uppercase are ${upperCaseCharacters.length}`);
  console.log(`lowercase are ${lowerCaseCharacters.length}`);
  // console.log(`special characters are ${special.length}`);
};

strProperties("@#$%Edwin Jones574");

// Code ends here/*

/*
Write JavaScript program to convert uppercase letters to lowercase and vice versa.


*/

// Code starts here
const toggleCase = (letter) => {
  const smallCaps = "abcdefghijklmnopqrstuvwxyz";
  const capital = smallCaps.toUpperCase();
  for (let i of letter) {
    if (smallCaps.includes(i)) {
      console.log(letter.toUpperCase())
    } else if (capital.includes(i)) {
      console.log(letter.toLowerCase())
    }
  }
}
toggleCase('Baba')

// Code ends here/*

/*
Write Javascript Program to count the number of times an item appears in an array.

*/

const countItems = (array, item) => {
  let counter = array.flat(Infinity).filter(currentItem => currentItem === item).length
  return counter
}
countItems([50, 50, 30, 40, 50, 50, 50], 50)
// Code ends here/*

/*
Write a Python program to check the validity of a password given by the user.
The Password should satisfy the following criteria:
1. Contain at least 1 letter between a and z
2. Contain at least 1 number between 0 and 9
3. Contain at least 1 letter between A and Z
4. Contain at least 1 character from $, #, @
5. Minimum length of password: 6
6. Maximum length of password: 12 

*/

// Code starts here
const passwordValidator = (password) => {
  const numbers = [];
  const upperCase = [];
  const lowerCase = [];
  const special = [];
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = alphabets.toUpperCase();
  const specialCharacter = ['$', '#', '@']
  for (let i of password) {
    if (i == Number(i) && i !== " ") {
      numbers.push(i);

    } else if (upperAlphabet.includes(i)) {
      upperCase.push(i);

    } else if (alphabets.includes(i)) {
      lowerCase.push(i);

    } else if (specialCharacter.includes(i)) {
      special.push(i);

    }
  }
  if (numbers.length >= 1) {
    console.log('Contain at least 1 number between 0 and 9')
  } if (upperCaseCharacters.length >= 1) {
    console.log('Contain at least 1 letter between A and Z')
  } if (lowerCaseCharacters.length >= 1) {
    console.log('Contain at least 1 letter between a and z')
  } if (special.length >= 1) {
    console.log('Contain at least 1 character from $, #, @')
  }

};

passwordValidator("@#$%Edwin Jones574");

// Code ends here/*
