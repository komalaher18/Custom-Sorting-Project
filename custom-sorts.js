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

  return arr.sort((a,b) =>{
    let aBase = a.toString().length;
    let bBase = b.toString().length
    if(aBase > bBase) return -1;
    else if(aBase < bBase) return 1;
    else return (a - b);
  })

}

function frequencySort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    let aFreq = 0;
    let bFreq = 0;
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (a === num) aFreq++;
      if (b === num) bFreq++;
    }

    // const aFreq = arr.reduce((acc, num) => {
    //   if (a === num) return ++acc;
    //   return acc;
    // }, 0);
    // const bFreq = arr.reduce((acc, num) => {
    //   if (b === num) return ++acc;
    //   return acc;
    // }, 0);
    if(aFreq < bFreq) return -1;
    else if(aFreq > bFreq) return 1;
    else return (b - a);
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
