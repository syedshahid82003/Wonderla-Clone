const restaurants = [
  {
    "id": "waves",
    "name": "PARK VIEW RESTAURANT",
    "image": "./restaur-img1.webp",
    "location": "Kochi",
    "price": 450, // Added explicit placeholder price value
    "meta": "North & South Indian",
    "tags": ["Traditional breakfast", "Authentic flavours"],
    "description": "Kickstart your day right with our delicious breakfast options at park view restaurant! From idlis....",
    "button": "EXPLORE MENU",
    "link": "./index8.html",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
     "id": "spice-trail",
    "name": "WAVES RESTAURANT",
    "image": "./restaur-img2.webp",
    "location": "Kochi",
    "price": 650,
    "meta": "Continental & Seafood",
    "tags": ["Global flavours", "Wave pool view"],
    "description": "Enjoy global cuisines with a stunning wave pool view while you dine.",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
        "id": "tropical-bites",
    "name": "SPICE GARDEN RESTAURANT",
    "image": "./restaur-img3.webp",
    "location": "Kochi",
    "price": 550,
    "meta": "Tandoori & Mughlai",
    "tags": ["Authentic taste", "World cuisine"],
    "description": "A garden dining experience with authentic spices and world-class cuisine.",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
      "id": "garden-grill",
    "name": "VINTAGE KITCHEN RESTAURANT",
    "image": "./restaur-img4.webp",
    "location": "Kochi",
    "price": 600,
    "meta": "Gourmet Multi-cuisine",
    "tags": ["Multi-cuisine", "Exquisite dishes"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
     "id": "cafe-bliss",
    "name": "PARK VIEW RESTAURANT",
    "image": "./restaur-img5.webp",
    "location": "Hyderabad",
    "price": 450,
    "meta": "Hyderabadi Specials",
    "tags": ["Traditional breakfast", "Authentic flavours"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
      "id": "bengaluru-dhaba",
    "name": "GREEN RESTAURANT",
    "image": "./restaur-img6.webp",
    "location": "Hyderabad",
    "price": 350,
    "meta": "Pure Vegetarian",
    "tags": ["Vegetarian delights", "Indian & Chinese"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
     "id": "dum-pukht",
    "name": "CHILLIES RESTAURANT",
    "image": "./restaur-img7.webp",
    "location": "Hyderabad",
    "price": 400,
    "meta": "Fast Food & Snacks",
    "tags": ["Quick snacks", "Heartwarming meals"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
     "id": "nizam-corner",
    "name": "COURTYARD RESTAURANT",
    "image": "./restaur-img8.webp",
    "location": "Hyderabad",
    "price": 700,
    "meta": "Fine Dining Fusion",
    "tags": ["Indian & Oriental", "Fusion feast"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
    "id": "pearl-buffet",
    "name": "CHILLIES RESTAURANT",
    "image": "./restaur-img9.webp",
    "location": "Bengaluru",
    "price": 400,
    "meta": "Fast Food Cafe",
    "tags": ["Quick bites", "Hearty meals"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
    "name": "GALAXY AC RESTAURANT",
    "image": "./restaur-img10.png",
    "location": "Bengaluru",
    "price": 850,
    "meta": "Premium Buffet Space",
    "tags": ["Buffet", "Veg & Non-Veg"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
    "name": "BIRYANI ZONE",
    "image": "./restaur-img11.png",
    "location": "Bengaluru",
    "price": 500,
    "meta": "Authentic Dum Biryani",
    "tags": ["Spicy rice", "Indian cuisine"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
    "name": "MIRCHI MASALA",
    "image": "./restaur-img12.png",
    "location": "Bengaluru",
    "price": 480,
    "meta": "North Indian Cuisine",
    "tags": ["Desi flavors", "Tandoori specials"],
    "description": "Gallop around on colourful horses like a seasoned cowboy!",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
    "name": "FOOD COURT",
    "image": "./restaur-img13.png",
    "location": "Chennai",
    "price": 300,
    "meta": "Multi-station Hub",
    "tags": ["Veg & Non Veg Pizza", "Chinese"],
    "description": "Dive into an immersive Galactic dining experience at Galaxy, our signature space themed Buffet restaurant.",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
    "name": "PORIYAL RESTAURANT",
    "image": "./restaur-img14.png",
    "location": "Chennai",
    "price": 250,
    "meta": "Traditional South Indian",
    "tags": ["Veg Meals", "Dosa"],
    "description": "A potpourri of Chinese, Indian, Tandoor, South Indian, Pizzas, Burgers, Shawarma, Beverages served via live stations.",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
    "name": "GALAXY BUFFET RESTAURANT",
    "image": "./restaur-img15.png",
    "location": "Chennai",
    "price": 899,
    "meta": "Unlimited Mega Buffet",
    "tags": ["Veg & Non-Veg Unlimited Buffet"],
    "description": "Indulge in our exclusive South Indian vegetarian only fare situated in our Food Court.",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  },
  {
    "name": "BIRYANI ZONE",
    "image": "./restaur-img16.png",
    "location": "Chennai",
    "price": 550,
    "meta": "Regional Rice Dishes",
    "tags": ["Veg & Non Veg", "DINDIGUL, AMBUR"],
    "description": "Authentic Biryani fare ranging from Dindigul, Ambur to the famed Hyderabadi Dum Biryani all prepared fresh & served hot.",
    "button": "EXPLORE MENU",
    "link": "#",
    "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
  }
];

function SearchQuery() {
  const data = document.getElementById("SearchInput").value.toLowerCase();
  const container = document.getElementById("res-cont");

  if (!container) return;

  const filtered = restaurants.filter(res => {
    return res.name.toLowerCase().includes(data) ||
      res.location.toLowerCase().includes(data) ||
      res.description.toLowerCase().includes(data);
  });

  const htmlContent = filtered.map((res) => {
    const resTag = res.tags.map((tag) => `<span>${tag}</span>`).join("");

    return `
      <div class="product-card"
           data-title="${res.name}"
           data-price="₹${res.price || 0}"
           data-image="${res.image}"
           data-meta="${res.meta || res.location}">

          <div class="rest-card">
              <div class="image-wrapper">
                  <img src="${res.image}" alt="${res.name}">
              </div>

              <div class="content">
                  <h3>${res.name}</h3>
                  
                  <p class="location">
                      ${res.location}
                  </p>
                  
                  <p class="description">
                      ${res.description}
                  </p>
                  
                  <div class="tags">
                      ${resTag}
                  </div>
                  
                  <a href="./index8.html?id=${res.id}" class="details-btn">
                      ${res.button}
                  </a>
                  
                  <button class="btn-add-cart">
                      ${res.addToCart.label}
                  </button>
              </div>
          </div>
      </div>`;
  }).join(""); 

  container.innerHTML = htmlContent;
}



// Global UI controls logic
let cartBtn = document.getElementById("cartBtn");
let cartDrawer = document.getElementById("cartDrawer");
let closeCart = document.getElementById("closeCart");
let overlay = document.getElementById("cartOverlay");

cartBtn.addEventListener("click", function () {
  cartDrawer.classList.add("active");
  overlay.classList.add("active");
});

const closeCartDrawer = () => {
  cartDrawer.classList.remove("active");
  overlay.classList.remove("active");
};

closeCart.addEventListener("click", closeCartDrawer);
overlay.addEventListener("click", closeCartDrawer);

document.addEventListener('DOMContentLoaded', () => {
  SearchQuery();
      renderUserCart();
    updateSavedCartCount();


  const searchInp = document.getElementById("SearchInput");
  if (searchInp) {
    searchInp.addEventListener("input", SearchQuery);
  }

  const cartBody = document.querySelector('.cart-drawer-body');
  const cartCount = document.querySelector('.cart-count');

  if (cartBody && cartCount && parseInt(cartCount.textContent) === 2) {
    cartCount.textContent = "0";
    const subtotalSpan = document.querySelector('.cart-subtotal span:last-child');
    if (subtotalSpan) subtotalSpan.textContent = "₹0";
  }

  document.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-add-cart")) {


      const productCard =
        event.target.closest(".product-card");

      const product = {

        name: productCard.dataset.title,

        price: Number(productCard.dataset.price.replace("₹", "")),
        image: productCard.dataset.image,
        meta:  productCard.dataset.meta,

        quantity: 1

      };

      if (cartBtn && typeof rideToCart === 'function') {
        rideToCart(productCard, cartBtn, product.image, () => {
          addToCart(product);
          cartDrawer.classList.add("active");
          overlay.classList.add("active");
        });
      } else {
        addToCart(product);
        cartDrawer.classList.add("active");
        overlay.classList.add("active");
      }

    }

  });
});

function updateCartTotals() {
  const items = document.querySelectorAll('.cart-item');
  const cartCount = document.querySelector('.cart-count');
  let totalSubtotal = 0;
  let totalItemsCount = 0;

  items.forEach(item => {
    const basePrice = parseFloat(item.getAttribute('data-price')) || 0;
    const quantity = parseInt(item.querySelector('.cart-qty input').value) || 1;

    totalSubtotal += basePrice * quantity;
    totalItemsCount += quantity;
  });

  if (cartCount) {
    cartCount.textContent = totalItemsCount;
  }

  const subtotalSpan = document.querySelector('.cart-subtotal span:last-child');
  if (subtotalSpan) {
    subtotalSpan.textContent = `₹${totalSubtotal.toLocaleString('en-IN')}`;
  }
}

function ridesSearch() { console.log("Dropdown filtering checked..."); }
const rDrop = document.getElementById("ride-dropdown");
if (rDrop) { rDrop.addEventListener("change", ridesSearch); };



function addToCart(product,targetUserId=null) {
  let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  let userIdToUpdate = targetUserId || (loggedUser ? loggedUser.id : null);

 if (!userIdToUpdate) {
        alert("Please Login First");
        return;
    }
  let users =
    JSON.parse(localStorage.getItem("users")) || [];
  let currentUser =users.find( user => user.id === userIdToUpdate);

     if (!currentUser) {
        alert("User not found!");
        return;
    }
  if (!currentUser.cart) {

    currentUser.cart = [];

  }
  let existing =
    currentUser.cart.find(
      item => item.name === product.name
    );
  if (existing) {

    existing.quantity++;

  }
  else {
    currentUser.cart.push(product);

  }
 saveUserData(currentUser);

  renderUserCart();
}

function saveUserData(user) {


  let users =
    JSON.parse(localStorage.getItem("users")) || [];

  let index =
    users.findIndex(
      u => u.id === user.id
    );

  users[index] = user;

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  localStorage.setItem(
    "loggedUser",
    JSON.stringify(user)
  );


}

function renderUserCart(userToRender = null) {


  const cartBody =document.querySelector(".cart-drawer-body");

  if (!cartBody)
    return;

  cartBody.innerHTML = "";

let user = userToRender || JSON.parse(localStorage.getItem("loggedUser"));
    if (!user || !user.cart) return;
  user.cart.forEach(product => {

    let item =
      document.createElement("div");
    item.className = "cart-item";
    item.dataset.price =  product.price;
    item.innerHTML = `

<img src="${product.image}">
<div class="cart-item-info">
<div class="cart-item-header">
<h4>${product.name}</h4>
<button class="btn-remove-item">
×
</button>

</div>
<p class="cart-item-meta">${product.meta}</p>
<div class="cart-item-row">
<div class="cart-qty">
<input type="number"min="1"value="${product.quantity}">
</div>


<span class="cart-item-price">₹${product.price * product.quantity}</span>
</div>
</div>

`;

    cartBody.appendChild(item);

    item.querySelector("input")
      .addEventListener("change", function () {
        product.quantity =
          Number(this.value);
        saveUserData(user);
        renderUserCart();

      });

    item.querySelector(".btn-remove-item")
      .addEventListener("click", function () {
        user.cart =
          user.cart.filter(
            p => p.name !== product.name
          );
        saveUserData(user);

        renderUserCart();
      });
  });
  updateCartTotals();

}
function updateSavedCartCount() {
    const cartCounts = document.querySelectorAll(".cart-count");
    
    if (cartCounts.length === 0) return;

    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    let totalItems = 0;

    if (loggedUser && loggedUser.cart) {
        loggedUser.cart.forEach(item => {
            totalItems += item.quantity || 1;
        });
    }

    cartCounts.forEach(badge => {
        badge.textContent = totalItems;
    });
}

  function updateNavbarAuth() {
  const loginLink = document.getElementById("navLoginLink");
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  if(loggedUser && loginLink){
    loginLink.style.display = "none"
  }

}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateNavbarAuth);
} else {
  updateNavbarAuth();
}

//accordion//
function initFooterAccordion() {
    const checkboxes = document.querySelectorAll(".accordion-input");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                checkboxes.forEach(other => {
                    if (other !== this) {
                        other.checked = false;
                    }
                });
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", initFooterAccordion);


        document.querySelector('.Book-tickets').addEventListener('click', () => {
    window.location.href = 'Booktickets.html';
});