//promise

let promise = new Promise((req, res) => {
  let operation = true;

  if (operation) {
    req("done");
  } else {
    res("err");
  }
});

promise.then((result) => {
  console.log("Success: " + result);
});
promise.catch((reject) => {
  console.log("Error: " + reject);
});
