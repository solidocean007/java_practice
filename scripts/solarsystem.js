


// function getGreatestDiscoveryYear(data) {
//   // Your code goes here...
//   // feel free to import your `maxBy` or `minBy` methods from previous lessons
//     const rockInfo = data.asteroids
//     let asteroidArray = {};
//   for(let item = 0; item < rockInfo.length; item++ ) {
//     let currYear = rockInfo[item].discoveryYear
//     if (!asteroidArray[currYear]) {
//       asteroidArray[currYear] = 0;
//     }
//     asteroidArray[currYear]++
//   }
//   let max = 0;
//   let mostFrequent = 0;

//   for(const i in asteroidArray) {
//     if (asteroidArray[i] > max) {
//     max = asteroidArray[i];
//     mostFrequent = i;
//   }
// }
//   return mostFrequent;
// }


// console.log(typeof (getGreatestDiscoveryYear(data)))
// console.log(getGreatestDiscoveryYear(data));



// function sampleFunction(data) {
//   const rockInfo = data.asteroids
//   .reduce((acc, year) => {
//     return { ...acc, [year.discoveryYear]: (acc[year.discoveryYear] || 0) + 1};
//     },{});
//     return rockInfo;
// }

// console.log(sampleFunction(data))



function sampleFunction2(data) {
  const rockInfo = data.asteroids              //assign rockInfo to the asteroid array of objects
    .reduce((acc, asteroid) => {               // reduce the array to an object of string keys with occurence as a value
      if (acc[asteroid.discoveryYear]) {       // check if the acc has a year present
        acc[asteroid.discoveryYear]++;         // if so add one to it
      } else {                                 // or
        acc[asteroid.discoveryYear] = 1;       // initialize it and assign it the value of 1.
      }
  //  console.log(acc)                             // log the value of acc

      return acc;                              // return that final object
    }, {});                                    // this sets the inital value of reduce to an empty object


  function maxBy(array, callback) {                  // create a function call maxBy with two parameters
    let max = 0;
    let maxKey = null;                       // assign max to the first index in the array
    for(let i = 0; i < array.length; i++) {    // iterate through the length of the array
      if(callback(array[i]) > callback(max)){              // if the discovery year
        max = array[i]
      }
    }
    return maxBy;
  }
}

const maxNumber = sampleFunction2(data);

console.log(maxNumber)