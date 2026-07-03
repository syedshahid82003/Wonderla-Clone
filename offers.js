let allOffersData = []; 
let currentFilteredOffers = [];
let itemsPerPage = 1

async function loadOffers() {
    const response = await fetch('./project.data.json');
    const data = await response.json();
    allOffersData = data.offers; 
    currentFilteredOffers = allOffersData;
     itemsPerPage = Math.ceil(currentFilteredOffers.length / 6);
    showPage(1);
      
    initLocationFilter();
}

function showPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = currentFilteredOffers.slice(startIndex, endIndex);

    renderOffers(pageItems);

    document.querySelectorAll(".page-num").forEach(el => {
        el.classList.toggle("active", Number(el.dataset.page) === pageNumber);
    });

    document.getElementById("offersCont")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
function initPagination() {
    const pageButtons = document.querySelectorAll(".page-num");

    pageButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const pageNum = Number(this.dataset.page);
            showPage(pageNum);
        });
    });
}

document.addEventListener("DOMContentLoaded", initPagination);
function renderOffers(offersList) {
    const container = document.getElementById("offersCont");
    if (!container) return;

    if (offersList.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:40px; color:#777;">No offers found for this location.</p>`;
        return;
    }

    const offersHTML = offersList.map((i) => {
        const timerHTML = i.timerBadge ? `<span class="timer-badge">${i.timerBadge}</span>` : '';
        const locationsHTML = i.locations.map(loc => `<span>${loc}</span>`).join('');

        return `
        <div class="product-card" 
             data-id="${i.id}"
             data-title="${i.title}" 
             data-price="₹${i.price || 0}" 
             data-image="${i.image}" 
             data-meta="${i.meta || ''}"> 
            <div class="card-image">
                <img src="${i.image}" alt="${i.alt || 'Offer Image'}" width="100%" height="200px">
                ${timerHTML}
            </div>
            <div class="card-content">
                <h3>${i.title}</h3>
                <div class="tags-offer">
                    ${locationsHTML}
                </div>
            </div>
            <div class="card-footer">
                <button class="btn-book">${i.buttons[0]}</button>
                <button class="btn-details" onclick="window.location.href='./single-offer.html?id=${i.id}'">${i.buttons[1]}</button>
                <a href="${i.addToCart.href}" class="btn-add-cart">${i.addToCart.label}</a>
            </div>
        </div>
        `;
    }).join('');

    container.innerHTML = offersHTML;
}

function initLocationFilter() {
    const filterTabs = document.querySelectorAll(".second-offer > div");

    filterTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            filterTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.dataset.filter ? this.dataset.filter.trim().toLowerCase() : "";

            if (filterValue === "all" || filterValue === "") {
                renderOffers(allOffersData);
            } else {
                const filtered = allOffersData.filter(offer => {
                    if (!offer.locations || !Array.isArray(offer.locations)) return false;
                    return offer.locations.some(loc => loc.trim().toLowerCase() === filterValue);
                });
                
                renderOffers(filtered);
            }
        });
    });
}


// Global UI Controls for Drawer
let cartBtn = document.getElementById("cartBtn");
let cartDrawer = document.getElementById("cartDrawer");
let closeCart = document.getElementById("closeCart");
let overlay = document.getElementById("cartOverlay");

if (cartBtn) {
    cartBtn.addEventListener("click", function () {
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
    loadOffers();

    renderUserCart();
    updateSavedCartCount();

    const cartBody = document.querySelector('.cart-drawer-body');
    const cartCount = document.querySelector('.cart-count');

    if (cartBody && cartCount && parseInt(cartCount.textContent) === 2) {
        cartCount.textContent = "0";
        const subtotalSpan = document.querySelector('.cart-subtotal span:last-child');
        if (subtotalSpan) subtotalSpan.textContent = "₹0";
    }

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-add-cart')) {
            event.preventDefault();

            const productCard = event.target.closest('.product-card');
            if (!productCard) return;

            // Extract data from the card
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




function addToCart(product, targetUserId = null) {
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
        item.dataset.price = product.price; // Correct dataset mapping
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
        // Correctly grabbing 'data-price' matching the render block
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


function ridesSearch() { console.log("Dropdown filtering checked..."); }
const rDrop = document.getElementById("ride-dropdown");
if (rDrop) { rDrop.addEventListener("change", ridesSearch); }

function updateNavbarAuth() {
    const loginLink = document.getElementById("navLoginLink");
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser && loginLink) {
        loginLink.style.display = "none"
    }

}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateNavbarAuth);
} else {
    updateNavbarAuth();
}

//Accordion //

function initFAQAccordion() {
    const checkboxes = document.querySelectorAll(".faq-toggle");

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

document.addEventListener("DOMContentLoaded", initFAQAccordion);

//accordion footer//
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