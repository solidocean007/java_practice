const size = 10;
const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];

// This function builds an array of objects that represent the plots of the board.
function gameBoardData(size) {
  let plotCount = 1;
  let gameBoardData = [];
  for(let i = 0; i < size; i++) {
    let xChar = boardLetters[i];
    for(let j = 0; j < size; j++) {
      let yNumber = i++;
      gameBoardData.push({id : xChar + yNumber, index : plotCount})
      plotCount++
    }
  }
  return gameBoardData;
 }

 class ship {
  constructor(length, direction){
    this.length = length;
    this.direction = direction;
  }
 }

 console.log(gameBoardData(size));
 



// const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
// const boardSize = 10;
// let enemyBoats = [];

//   for(let i = 0; i <= 20; i++) { 
//     let shipCount = 0;
//     let newShip;
//     let xCoord;
//     let yCoord;
//       xCoord = boardLetters[Math.floor(Math.random() * (boardSize))]
//       yCoord = Math.floor(Math.random() * (boardSize) + 1)
//       newShip = (xCoord + yCoord); 
//       if(enemyBoats.indexOf(newShip) === -1){
//         enemyBoats.push(newShip);
//         shipCount++
//       }
//     }  

//     console.log (enemyBoats);
// var readlineSync = require('readline-sync');

// let endGame = true;

// do {
// console.log('start code');
// endGame = readlineSync.keyInYN('Yes or No')
// if(endGame === 'Y') {
//   endGame = false;
// }

// } while (endGame)