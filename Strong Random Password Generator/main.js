function getPassword() {
  var chars = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP`@!”?$?%^&*()_–+={[}]:;‘~#|<,>.?/'

  var passwordLength = 16;
  var password = '';

  for(var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random()* chars.length);
    password += chars.slice(random,random+1);
  }
  document.getElementById('password').value= password;
}

