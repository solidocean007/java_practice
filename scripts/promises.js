// console.log('start');

// const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

// pokemon
// .then((data) => data.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// console.log('finish');
// console.log(pokemon);


// Create your own promises

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject({});
//   }, 3000);
// });

// promise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err, 'No data'));


  //Working with multiple promises

  // const youTubePost = { id: 1, comment: 'You Rock!'};
  // const hobbies = ['Skateboarding', 'Coding'];

  // const post = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(youTubePost);
  //   }, 4000);
  // });


  // const hobby = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(hobbies);
  //   }, 1000);
  // });

  // Promise
  //   .all([post, hobby])
  //   .then((data) => {
  //     const [ytPost, myHobbies] = data;
  //     console.log(ytPost, myHobbies);
  //   });


  // const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  // const chuckNorris = fetch('https://api.chucknorris.io/jokes/random');


  // Promise
  //   .all([pokemon, chuckNorris])
  //   .then((response) => {
  //     return Promise.all(response.map((res) => res.json()));
  //   })
  //   .then((data) => {
  //     const [poke, joke] = data;
  //     console.log(`
  //       ${poke.name}
      
  //       ${joke.value}
  //     `);
  //   });

