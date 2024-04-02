//async -2

async function hello() {
  return new Promise((resolve, reject) => {
    let data = true;
    if (data) {
      resolve(data);
    } else {
      reject(data);
    }
  });
}

async function hi() {
  try {
    //will print this if its truew=
    const rs = await hello();
    console.log("this is " + rs);
  } catch (rs) {
    //this will be printed if its flase
    console.log(" this is " + rs);
  }
}

//call the function
hi();
