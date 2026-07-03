// ==========================================
// rides.js (Integrated with User/LocalStorage Cart)
// ==========================================

const rides = [
    {
      "name": "CASTLE JET",
      "location": "Kochi",
      "price": 999,
      "image": "./ride1-image.png",
      "alt": "Castle Jet",
      "tags": ["Fairy Tale Theme", "Spinning Adventure"],
      "description": "Meet Aladdin & his mysterious genie on a magical joyride!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "CONVOY",
      "location": "Kochi",
      "price": 750,
      "image": "./ride2-img.png",
      "alt": "Convoy",
      "tags": ["Mini Vehicles", "Hilly Track"],
      "description": "Pick your favourite ride and go zooming over an exciting hilly terrain!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "FLYING JUMBO",
      "location": "Kochi",
      "price": 850,
      "image": "./ride3-i g.png",
      "alt": "Flying Jumbo",
      "tags": ["Merry-Go-Round", "Spinning Elephants"],
      "description": "Climb aboard a friendly elephant that takes you on a playful spin!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "CAROUSEL",
      "location": "Hyderabad",
      "price": 600,
      "image": "./ride4-img.png",
      "alt": "Carousel",
      "tags": ["Carousel", "Galloping Horses"],
      "description": "Gallop around on colourful horses like a seasoned cowboy!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "HAPPY KANGAROO",
      "location": "Hyderabad",
      "price": 900,
      "image": "./ride5-img.png",
      "alt": "Happy Kangaroo",
      "tags": ["Free Fall", "Bouncy Thrills"],
      "description": "Plummet into a safe freefall with a tall & cheerful kangaroo!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "KIDDIES WHEEL",
      "location": "Hyderabad",
      "price": 550,
      "image": "./ride6-img.png",
      "alt": "Kiddies Wheel",
      "tags": ["Mini Ferris", "Scenic Fun"],
      "description": "A miniature giant wheel designed to give your children a taste of real thrill.",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "MINI PIRATE SHIP",
      "location": "Bengaluru",
      "price": 700,
      "image": "./ride7-img.png",
      "alt": "Mini Pirate Ship",
      "tags": ["Mini Boat", "Gentle Swing"],
      "description": "Climb aboard a friendly elephant that takes you on a playful spin!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "MAGIC PLANE",
      "location": "Bengaluru",
      "price": 800,
      "image": "./ride8-img.png",
      "alt": "Magic Plane",
      "tags": ["Interactive Ride", "Hang Glider"],
      "description": "Climb aboard a friendly elephant that takes you on a playful spin!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "PONY TRAIN",
      "location": "Bengaluru",
      "price": 650,
      "image": "./ride9-img.png",
      "alt": "Pony Train",
      "tags": ["Toy Train", "Fantasy Ride"],
      "description": "Climb aboard a friendly elephant that takes you on a playful spin!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "CROCO CRUISE",
      "location": "Chennai",
      "price": 1100,
      "image": "./ride12-img.png",
      "alt": "Croco Cruise",
      "tags": ["Crocodile Boats", "Splash Adventure"],
      "description": "A scenic journey on the back of a crocodile boat before descending in a big splash!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "CONVOY",
      "location": "Chennai",
      "price": 750,
      "image": "./ride13-img.png",
      "alt": "Convoy",
      "tags": ["Mini Vehicles", "Hilly Track"],
      "description": "Pick your favourite ride and go zooming over an exciting hilly terrain!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "MINI WHEEL",
      "location": "Chennai",
      "price": 550,
      "image": "./ride14-img.png",
      "alt": "Mini Wheel",
      "tags": ["Mini Ferris", "Gentle Thrill"],
      "description": "A miniature giant wheel designed to give your children a taste of real thrill.",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    },
    {
      "name": "CAROUSEL",
      "location": "Chennai",
      "price": 600,
      "image": "./ride14-img.png",
      "alt": "Carousel",
      "tags": ["Carousel", "Galloping Horses"],
      "description": "Gallop around on colourful horses like a seasoned cowboy!",
      "button": "RIDE DETAILS",
      "addToCart": { "label": "ADD TO CART", "href": "#cart-section" }
    }
];


function ridesSearch() {
    const checked = document.querySelector('#ride-dropdown input[type="radio"]:checked');
    const data = checked ? checked.value.toLowerCase() : "";
    
    const filteredRides = rides.filter(i => i.location.toLowerCase().includes(data));
    const container = document.getElementById("rides-cont");
    
    if (!container) return;
    container.innerHTML = "";

    filteredRides.forEach((i) => {
        const rideTag = i.tags.map((tag) => `<span>${tag}</span>`).join("");
        
        container.innerHTML += `
         <div class="product-card" 
              data-title="${i.name}" 
              data-price="₹${i.price}" 
              data-image="${i.image}" 
              data-meta="${i.location} · Entry Pass">
            <div class="image-wrapper">
                <img src="${i.image}" alt="${i.alt}">
                <div class="tags">
                     ${rideTag}
                </div>
            </div>
            <div class="content">
                <h3>${i.name}</h3>
                <p class="location">${i.location}</p>
                <p class="price-display">₹${i.price}</p>
                <p class="description">${i.description}</p>
                <button class="details-btn">${i.button}</button>
                <a href="${i.addToCart.href}" class="btn-add-cart">${i.addToCart.label}</a>
            </div>
        </div>`;
    });
}

// Global Drawer Interface controls
let cartBtn = document.getElementById("cartBtn");
let cartDrawer = document.getElementById("cartDrawer");
let closeCart = document.getElementById("closeCart");
let overlay = document.getElementById("cartOverlay");

if (cartBtn) {
    cartBtn.addEventListener("click", function() {
        cartDrawer.classList.add("active");
        overlay.classList.add("active");
    });
}

const closeCartDrawer = () => {
    cartDrawer.classList.remove("active");
    overlay.classList.remove("active");
};

if (closeCart) closeCart.addEventListener("click", closeCartDrawer);
if (overlay) overlay.addEventListener("click", closeCartDrawer);


document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Load of Rides & Filtering
    ridesSearch();
    const rDrop = document.getElementById("ride-dropdown");
    if (rDrop) { 
        rDrop.addEventListener("change", ridesSearch); 
    }

    // 2. Initial Load of Cart
    renderUserCart();
    updateSavedCartCount();

    const cartBody = document.querySelector('.cart-drawer-body');
    const cartCount = document.querySelector('.cart-count');

    // Clean initial dummy placeholders safely
    if (cartBody && cartCount && parseInt(cartCount.textContent) === 2) {
         cartCount.textContent = "0";
         const subtotalSpan = document.querySelector('.cart-subtotal span:last-child');
         if (subtotalSpan) subtotalSpan.textContent = "₹0";
    }

    // 3. Add to Cart Listener
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-add-cart')) {
            event.preventDefault();

            const productCard = event.target.closest('.product-card');
            if (!productCard) return;

            const title = productCard.getAttribute('data-title') || 'Product';
            const priceText = productCard.getAttribute('data-price') || '₹0';
            const image = productCard.getAttribute('data-image') || './fallback-image.png';
            const meta = productCard.getAttribute('data-meta') || '';
            
            const rawPrice = parseFloat(priceText.replace(/[^0-9.-]+/g, "")) || 0;

            const product = {
                name: title,
                price: rawPrice,
                image: image,
                meta: meta,
                quantity: 1
            };



            // Ride the card's thumbnail over to the cart icon, then commit it
            if (cartBtn && typeof rideToCart === 'function') {
                rideToCart(productCard, cartBtn, image, () => {
                    addToCart(product);
                });
            } else {
                addToCart(product);
            }
        }
    });

 

});





function addToCart(product,targetUserId = null) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    let userIdToUpdate = targetUserId || (loggedUser ? loggedUser.id : null);

       if (!userIdToUpdate) {
        alert("Please Login First");
        return;
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(user => user.id === userIdToUpdate);

       if (!currentUser) {
        alert("User not found!");
        return;
    }
    
    if (!currentUser.cart) {
        currentUser.cart = [];
    }

    let existing = currentUser.cart.find(item => item.name === product.name);
    
    if (existing) {
        existing.quantity++;
    } else {
        currentUser.cart.push(product);
    }
    
    saveUserData(currentUser);
    renderUserCart();

    // Open drawer automatically
    if (cartDrawer && overlay) {
        cartDrawer.classList.add("active");
        overlay.classList.add("active");
    }
 
}

function saveUserData(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let index = users.findIndex(u => u.id === user.id);

    users[index] = user;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedUser", JSON.stringify(user));
}

function renderUserCart(userToRender = null) {
    const cartBody = document.querySelector(".cart-drawer-body");
    if (!cartBody) return;

    cartBody.innerHTML = "";

   let user = userToRender || JSON.parse(localStorage.getItem("loggedUser"));
    if (!user || !user.cart) return;

    user.cart.forEach(product => {
        let item = document.createElement("div");
        item.className = "cart-item";
        item.dataset.price = product.price; // Added to match updateCartTotals logic
        item.innerHTML = `
            <img src="${product.image}">
            <div class="cart-item-info">
                <div class="cart-item-header">
                    <h4>${product.name}</h4>
                    <button class="btn-remove-item">×</button>
                </div>
                <p class="cart-item-meta">${product.meta}</p>
                <div class="cart-item-row">
                    <div class="cart-qty">
                        
                     <input type="number" min="1" value="${product.quantity}">
                    </div>
                    <span class="cart-item-price">₹${product.price * product.quantity}</span>
                </div>
            </div>
        `;

        cartBody.appendChild(item);

        item.querySelector("input").addEventListener("change", function () {
            product.quantity = Number(this.value);
            saveUserData(user);
            renderUserCart();
        });

        item.querySelector(".btn-remove-item").addEventListener("click", function () {
            user.cart = user.cart.filter(p => p.name !== product.name);
            saveUserData(user);
            renderUserCart();
        });
    });
    
    updateCartTotals();
}

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


