const menuTrigger = document.getElementById("menuTrigger");
const dropdownMenu = document.getElementById("dropdownMenu");

menuTrigger.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdownMenu.classList.toggle("active")
});

window.addEventListener("click", function (event) {
    if(dropdownMenu.classList.contains("active")&& !dropdownMenu.contains(event.target)){
        dropdownMenu.classList.remove("active")
    }
});


const userNameEl = document.querySelector(".user-name");
const userEmailEl = document.querySelector(".user-email");

function LoadUserDetails(){
    const storedUser = localStorage.getItem("loggedUser");

    if(storedUser){
        try{
            const user = JSON.parse(storedUser);
                        userNameEl.textContent = user.Username || "Guest";
            userEmailEl.textContent = user.Email || "";
        } catch (e) {
            console.error("Error parsing user data:", e);
        }
    } else {
        userNameEl.textContent = "Guest";
        userEmailEl.textContent = "Not logged in";
    }
}
  LoadUserDetails()      
    
  document.querySelector(".logout-btn").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("loggedUser"); 
    window.location.href = "/index.html";
});

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.navbar > a[href]').forEach(link => {
    const linkPage = link.getAttribute('href').replace('./', '');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});