// Async/Await: Multiple Promises

const gitData = async () => {
  const p1 = fetch('https://api.github.comn/users/jradness');
  const p2 = fetch('https://api.github.comn/users/devslopes');
  const res = await Promise.all([p1, p2]);
  const gitPromises = res.map(r => r.json());
  const [jrad, devslopes] = await Promise.all(gitPromises);
  console.log(jrad, devslopes);
};

// gitData();

const getData = async (names) => {
  const promises = names
    .map(name => fetch(`https://api.github.com/users/${name}`)
    .then(r => r.json()));

  const accounts = await Promise.all(promises);
  console.log(accounts);  
}

getData(['jradness', 'devslopes', 'blockstart']);