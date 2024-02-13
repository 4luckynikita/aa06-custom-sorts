function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if(a%2===1 && b%2===0) return -1;
    if(a%2===0 && b%2===1) return 1;
    return a - b;
  })
}

function validAnagrams(s, t) {
  // Your code here
  let first = s.split("").sort();
  let second = t.split("").sort();
  for(let i = 0; i < first.length; i++){
    if(first[i] != second[i]){
      return false;
    }
  }
  return true;
}

function reverseBaseSort(arr) {
  // Your code here
  let triple = [];
  let double = [];
  let single = [];
  for(let i = 0; i < arr.length; i++){
    if( arr[i].toString().length === 3){
      triple.push(arr[i])
    } else if( arr[i].toString().length === 2){
      double.push(arr[i])
    } else{
      single.push(arr[i])
    }
  }
  triple.sort();
  double.sort();
  single.sort();
  return triple.concat(double.concat(single))
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
