// Async / Await

const holdTheFrontDoor = (time) => {
  return new Promise((resolve, reject) => {
    if (time > 4999) {
      reject('Sorry, I got tired');
    }
    setTimeout(() => resolve(`Take your time...(${time}ms)`), time);
  })
};


const iGotYou = async () => {
  try {
    const res = await holdTheFrontDoor(400);
    console.log('res');
    const res1 = await holdTheFrontDoor(1500);
    console.log('res1');
    const res2 = await holdTheFrontDoor(800);
    console.log('res2');
    const res3 = await holdTheFrontDoor(1500);
    console.log('res3');
    const res4 = await holdTheFrontDoor(5000);
    console.log('res4');
    const res5 = await holdTheFrontDoor(2000);
    console.log('res5');
  } catch(err) {
    console.error(err);
  }
};

iGotYou();