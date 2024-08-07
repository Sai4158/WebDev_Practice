// settime out
// printing happy new year in 3 2 1
//1000ms

let count = 3;

function newyear() {
  if (count > 0) {
    console.log(count);
    count--;
    setTimeout(newyear, 1000);
  } else {
    console.log("Happy new Year");
  }
}

newyear();
