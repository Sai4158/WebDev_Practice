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

let abhi = 5;
function abhi1() {
  if (abhi > 0) {
    console.log(abhi);
    abhi--;
    setTimeout(abhi1, 100);
  } else {
    console.log("ABHI IS FAT");
  }
}
abhi1();
newyear();
