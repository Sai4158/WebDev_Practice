// make sure this is let not const, so the value can change
let saicount = 3;

function funsai() {
  if (saicount > 0) {
    console.log(saicount);
    saicount--;
    // print this loop every 1sec
    setTimeout(funsai, 1000);
  } else {
    console.log("I am sai");
  }
}

funsai();
