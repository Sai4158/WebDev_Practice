//async -2

async function fetchData() {
  return new Promise((resolve, reject) => {
    const grant = false;
    if (grant) {
      resolve(grant);
    } else {
      reject("error");
    }
  });
}

//async
async function fetchDataAndLog() {
  try {
    const result = await fetchData();
    console.log("result");
  } catch (error) {
    console.error(error);
  }
}

fetchDataAndLog();
