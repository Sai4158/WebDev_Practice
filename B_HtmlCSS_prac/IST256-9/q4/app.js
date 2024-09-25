let fullName = prompt("Enter your full name");
let username =
  "@" + fullName.toLowerCase().replace(/\s/g, "") + fullName.length;
alert(`Your generated username is: ${username}`);
