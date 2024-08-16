// Random OTP generator using Math.random
// Math.floor will remove the decimals

function GenOpt() {
  let otp = "";

  otp = Math.floor(Math.random() * 4343 + 1000);

  return otp;
}

// this is will print it 5 times
for (let i = 0; i < 5; i++) {
  console.log(GenOpt());
}
