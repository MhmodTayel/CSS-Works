function getPassword() {
  var chars =
    "0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP`@!”?$?%^&*()_–+={[}]:;‘~#|<,>.?/";

  var password = "";
  var passwordLength = document.getElementById("range").value;
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * (chars.length-3));
    password += chars.slice(random, random + 1);
  }
  document.getElementById("password").value = password;
}

function change() {

    var passwordLength = document.getElementById("range").value;
    document.querySelector('.Value').textContent=passwordLength;
  
}

