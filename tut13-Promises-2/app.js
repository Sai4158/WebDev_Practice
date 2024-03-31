// promises

let ac = new Promise((reslove, reject) => {
  let number = true;
  if (number) {
    reslove("operation reslove");
  } else {
    reject("operation reject");
  }
});

ac.then((res) => {
  console.log("operation good:" + res);
});
ac.catch((rej) => {
  console.log("operation error:" + rej);
});
