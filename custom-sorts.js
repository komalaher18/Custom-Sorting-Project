function ageSort(users) {
  // Your code here
  return users.sort((a,b) => a.age - b.age);
}

function oddEvenSort(arr) {
  return arr.sort((a,b) =>{
    let aOdd = a % 2 !== 0;
    let bOdd = b % 2 !== 0;
    if(aOdd  && !bOdd) return -1;
    else if(!aOdd && bOdd) return 1;
    else return (a - b);
  })
}

function validAnagrams(s, t) {
  // Your code here
  const word1 = s.split('').sort().join('');
  const word2 = t.split('').sort().join('');

  return word1 === word2;
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
