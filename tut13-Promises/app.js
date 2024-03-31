//Promise
let pr = new Promise((reslove, reject) => {
  let operationSuccesful = true;
  //if else
  if (operationSuccesful) {
    reslove("operation Succesful");
  } else {
    reject("operation failed");
  }
});

pr.then((result) => {
  // result will print in reslove
  console.log("Success: " + result);
});
pr.catch((reason) => {
  // result will print in reject
  console.log("Error: " + reason);
});

// second promise
let ac = new Promise((reslove, reject) => {
  let opernationsucessfull = true;

  if (opernationsucessfull) {
    reslove("hello");
  } else reject("hqwfqw");
});

ac.then((a1) => {
  console.log("done: " + a1);
});

ac.catch((a2) => {
  console.log("not done: " + a2);
});
