const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
//  console.log(x);
} 
/*[ 0, 'Banana' ]
  [ 1, 'Orange' ]
  [ 2, 'Apple' ] 
  [ 3, 'Mango' ] */

 const asteroids = {
  SkyRock : 2,
  DeathMoon : 1,
  AlienTrash : 4
  };

  function biggestValue (obj) {
    let result = [];
    let biggestRockName =  '';
    for(const [rockName, rockSize] of Object.entries(obj)) {
      // console.log(rockSize);
     if(rockSize > result){
      biggestRockName = rockName;
     }
    }
   return result;

  }

  console.log(biggestValue(asteroids));

  