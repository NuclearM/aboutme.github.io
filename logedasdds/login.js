function check() {
  let password = document.getElementById('password').value;
  let username = document.getElementById('username').value;
  let form = document.getElementById("container");
  let button = document.getElementById('signbtn');
  let list = document.getElementById("list");
  if (password == "thegreatsakis" && username == "nuclear") {
    alert("Permission Granted!");
    window.location.replace("https://WorstSakis.gervase.repl.co/logedasdds/page/")
  } else {
    alert("Username or Password is Incorrect!");
  }
}