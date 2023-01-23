const shipTwo = 2;
const shipFive = 5;
const shipThree = 3;
const shipFour = 4

const boardSize = 10;
let numberOfFoes = 2;
const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
const boardValues = ['1','2','3','4','5','6','7','8','9','10'];
const shotLocations = [];
let endGame = false;


// This function builds an array of objects that represent the plots of the board.
function gameBoardData(size) {
  let gameBoardData = [];
  let plotCount = 1;
  for(let i = 0; i < size; i++) {
    let xChar = boardLetters[i];
    for(let j = 0; j < size; j++) {
      let yNumber = boardValues[j];
      gameBoardData.push({
        index : plotCount,
        id:xChar + yNumber,
        plotLetter : xChar,
        plotNumber : yNumber
      })
      plotCount++
    }
  }
  return gameBoardData;
 }

const plots = gameBoardData(boardSize);
 
function shipBuild(ship){
  for(let i = 0; i < ship; i++){
    start = Math.floor(Math.random()*100)
    console.log(start);
  }
}

shipBuild(shipFive);

function chooseDirection(){
  let theWay = (Math.random > .5) ? 'vertical' : 'horizontal'
  }

  console.log(chooseDirection())
