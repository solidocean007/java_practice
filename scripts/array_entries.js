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

  let spaceStuff = Object.keys(asteroids);

  console.log(spaceStuff)

  