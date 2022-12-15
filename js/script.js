document.getElementById("register").onsubmit = function (e) {
  let userValid = false;
  let emailValid = false;
  let passwordValid = false;
  let confirmpasswordValid = false;
  let userInput = document.getElementById("user").value;
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;
  let confirmpasswordInput = document.getElementById("confirmpassword").value;
  let inputmsg = document.getElementById("usermessage");
  let emailmsg = document.getElementById("emailmessage");
  let passmsg = document.getElementById("passwordmessage");
  let confirmpassmsg = document.getElementById("confirmpasswordmessage");
  var userRegex = /^[a-zA-Z0-9]+$/;
  var usernameRegex = userRegex.toLowerCase();
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    userInput !== "" &&
    (userInput.length >= 5 || userInput.length <= 15) &&
    userInput.match(usernameRegex)
  ) {
    userValid = true;
  } else {
    inputmsg.textContent = "Not valid username";
  }
  if (emailInput.match(emailRegex)) {
    emailValid=true;
  }
  else{
    emailmsg.textContent = "Not valid email";
  }
    if (passwordInput.length != 0 && passwordInput.length >= 8) {
      passwordValid =true;
      if (confirmpasswordInput == passwordInput) {
        confirmpasswordValid = true;
        confirmpassmsg.textContent = "password match";
      } else {
        confirmpassmsg.textContent = "password dont match";
      }
    } else {
      passmsg.textContent = "password Too Short";
    }
 
   if (
     userValid === false ||
     emailValid === false ||
     passwordValid === false ||
     confirmpasswordValid === false
   ) {
     e.preventDefault();
   }
   fetch("https://goldblv.com/api/hiring/tasks/register", {
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },
   })
     .then((response) => response.json())
     .then((response) => console.log(JSON.stringify(response)));
};





// fetch("https://goldblv.com/api/hiring/tasks/register").then((result)=>{
//     console.log(result);
//     let myData=result.json();
//     return myData;
// }).then((myData)=>{
//     myData.length=10;
//     return myData;
// }).then((myData)=>{
//     console.log(myData[0].name);
// });

