
function registerUser(event) {

  event.preventDefault();

  let Email = document.getElementById("reg-email").value.trim();
  let Username = document.getElementById("reg-username").value.trim();
  let Password = document.getElementById("reg-password").value;
  let Phone = document.getElementById("reg-phone").value.trim();
  let Error = document.getElementById("reg-error")

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  if (!emailRegex.test(Email)) {
    Error.style.color = "red";
    Error.innerHTML = "Please Enter a Valid EmailAddress";
    return;
  }
  if (!passwordRegex.test(Password)) {
    Error.style.color = "red";
    Error.innerHTML = "Password must be 8 characters long and include an uppercase letter,number,and special character.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || []
  let EmailExists = users.find(u => u.Email.toLowerCase() === Email.toLowerCase())

  if (EmailExists) {
    Error.innerText = "User already exists , Please Login!"
    return;
  }
  users.push({
    id: Date.now(),
    Email: Email,
    Username: Username,
    Password: Password,
    Phone: Phone,
    cart: []
  });
  localStorage.setItem("users", JSON.stringify(users));

  Error.style.color = "green";
  Error.innerText = "Registered Successfully! You can now Login!";

  document.getElementById("reg-email").value = ""
  document.getElementById("reg-username").value = ""
  document.getElementById("reg-password").value = ""
  document.getElementById("reg-phone").value = ""

}


// Logic for Login Users......

const showPasswordBtn = document.getElementById("ShowPassword");
if (showPasswordBtn) {
  showPasswordBtn.addEventListener("click", function () {
    const passInput = document.getElementById("login-Password");
    if (passInput.type === "password") {
      passInput.type = "text";
      this.innerText = "🙈";
    } else {
      passInput.type = "password";
      this.innerText = "👁️";
    }
  });
}

function LoginUser(event) {
  event.preventDefault();

  let loginId = document.getElementById("login-User").value.toLowerCase().trim();
  let loginPass = document.getElementById("login-Password").value;
  let logError = document.getElementById("login-Error");
  let logHelpers = document.getElementById("login-helpers");


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (loginId.includes("@") && !emailRegex.test(loginId)) {
    logError.style.color = "red";
    logError.innerHTML = "Invalid Email format!";
    logHelpers.style.display = "flex";
    return;
  }


  let users = JSON.parse(localStorage.getItem("users")) || [];

  let userFind = users.find((u) =>
    u.Username.toLowerCase() === loginId ||
    u.Email.toLowerCase() === loginId
  );

  if (!userFind) {
    logError.style.color = "red";
    logError.innerText = "Username or email address does not exist!";
    logHelpers.style.display = "flex";
    return;
  }

  if (userFind.Password !== loginPass) {
    logError.style.color = "red";
    logError.innerText = "Password is incorrect!";
    logHelpers.style.display = "flex"
    return;
  }

  logError.style.color = "green";
  logError.innerText = `Welcome, ${userFind.Username}`;
  localStorage.setItem("loggedUser",JSON.stringify(userFind));


if(typeof renderUserCart == "function"){
  renderUserCart()
}
if(typeof updateSavedCartCount == "function"){
  updateSavedCartCount()
}

    
    setTimeout(() => {
        window.location.href = "loader.html"; 
    }, 2000);

 logHelpers.style.display = "none"
}
const loggedUser = localStorage.getItem('loggedUser');
const isLoggedIn = loggedUser !== null;

const bookBtn = document.querySelector('.Book-tickets');

if (bookBtn) {
  if (isLoggedIn) {
    const user = JSON.parse(loggedUser);
    
    bookBtn.style.display = 'inline-flex';
    bookBtn.innerText = `🎟️ Book Tickets`;
    bookBtn.onclick = () => {
      window.location.href = 'Booktickets.html';
    };
  } else {
    bookBtn.remove(); 
  }
}