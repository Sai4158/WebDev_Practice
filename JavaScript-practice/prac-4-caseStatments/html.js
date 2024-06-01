//students results
let name = prompt("please enter your name");
let marks = prompt("Enter yours marks");

//let will change
let result;

//switch when this becomes true
switch (true) {
  case marks > 90 && marks <= 100:
    result = " you are a topper";
    break;

  case marks > 80 && marks <= 90:
    result = "good";

    break;
  case marks > 70 && marks <= 80:
    result = "you can do better";

    break;
  case marks > 60 && marks <= 70:
    result = "bad";

    break;
  case marks < 60:
    result = "you failed";

    break;

  default:
    result = " enter data to process";
    break;
}

document.write(result);
