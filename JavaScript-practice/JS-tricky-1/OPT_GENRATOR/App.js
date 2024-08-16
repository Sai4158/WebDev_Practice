// Random OTP generator using Math.random
// Math.floor will remove the decimals

function GenOpt() {
  let otp = "";

  otp = Math.floor(Math.random() * 4343 + 1000);

  return otp;
}

console.log(GenOpt());
