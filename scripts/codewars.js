// const string = 'The greatest victory is one two three that which requires no battle.'

// function reversedWords(str) {
//   return (str.split(' ').reverse()).join(' ');
// }

// console.log(reversedWords(string));

const betweenThis = -1;
const betweenThat = 2;

function getSum (firstNum, secondNum) {
  if(firstNum != secondNum) {
    console.log(firstNum);
    console.log(secondNum);
    let bigNum = 0;
    console.log(bigNum);
    let smallNum = 0;
    console.log(smallNum);

    if (firstNum < secondNum) {
      smallNum = firstNum;
    console.log(smallNum);

      bigNum = secondNum;
    console.log(bigNum);

    } else {
      bigNum = firstNum;
      console.log(bigNum);

      smallNum = secondNum;
      console.log(smallNum);

    }
    if((bigNum - smallNum) != 1){
      let nextNum = smallNum + 1;
      let total = smallNum;
      console.log(total);
      for( let i = smallNum; i < bigNum; i++) {
        
        console.log(i);
        
        total = total + nextNum;

        console.log(total);
        nextNum++
        console.log(nextNum)
      }
      return total;

    } else {
      return bigNum + smallNum
    }
  } else {
    return firstNum
  }
}

console.log(getSum(betweenThis, betweenThat));