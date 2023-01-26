const shipTwo = 2;
const shipFive = 5;
const shipThree = 3;
const shipFour = 4;

const boardSize = 10;
let numberOfFoes = 2;
const boardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const boardValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const shotLocations = [];
let endGame = false;
let theWay = "";

// This function builds an array of objects that represent the plots of the board.
function gameBoardData(size) {
  let gameBoard = [];
  let plotCount = 1;
  for (let i = 0; i < size; i++) {
    let xChar = boardLetters[i];
    for (let j = 0; j < size; j++) {
      let yNumber = boardValues[j];
      gameBoard.push({
        index: plotCount,
        plotData: {
          id: xChar + yNumber,
          occupied: false,
          hit: false,
        },
      });
      plotCount++;
    }
  }
  return gameBoard;
}
let gameBoard = gameBoardData(boardSize); // assign gameBoard to the data of the board.


function randomSpotToBuild(boardObject) {
  do {
    startBuild = Math.floor(Math.random() * 100);
  } while(boardObject[startBuild].plotData.occupied === true);
  console.log(startBuild);
  return startBuild;
}

function whichWay() {
  theWay = Math.random() > 0.5 ? "vertical" : "horizontal";
  console.log(theWay);
  return theWay;
}

function upOrDown() {
  let downOrUp = Math.random() > 0.5 ? "goDown" : "goUp";
  console.log(downOrUp);
  return downOrUp;
}

function leftOrRight() {
  let rightOrLeft = Math.random() > 0.5 ? "goLeft" : "goRight";
  console.log(rightOrLeft);
  return rightOrLeft;
}

function shipBuilder2point0(obj) {
  randomSpotToBuild(obj);
  whichWay();
  if (theWay === "vertical") {
    upOrDown();
  } else {
    leftOrRight();
  }
  obj[startBuild].plotData.occupied = true;
}

for(let i = 0; i < 5; i++){
  shipBuilder2point0(gameBoard);
}
console.log(gameBoard);

// console.log(Math.random() + ' : random number')
