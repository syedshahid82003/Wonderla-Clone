const RESTAURANTS = [

    // ─── KOCHI ────

    {
        id: "waves",
        // Card fields (used in index4.html)
        name: "Waves Restaurant",
        cardImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        price: "₹250",
        tags: ["Kochi", "Non-Veg", "Poolside"],

        // Detail page fields (used in index8.html)
        restaurantDetails: {
            name: "WAVES RESTAURANT",
            location: "Kochi",
            tags: ["Kochi", "Non-Veg"],
            description:
                "Indulge in a culinary adventure at Waves Restaurant, where every meal is a celebration of flavor and variety! Located right by the wave pool, enjoy everything from aromatic Biryani to Chinese delicacies while soaking in the poolside vibe.",
            gallery: {
                main: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Chicken Biryani",
                    image: "./chicken-biryani.png",
                    alt: "Biryani"
                },
                {
                    name: "Veg Healthy Bowl",
                    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300",
                    alt: "Salad"
                },
                {
                    name: "Gobi Fried Rice",
                    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=300",
                    alt: "Noodles"
                }
            ]
        }
    },

    {
        id: "spice-trail",
        name: "Spice Trail",
        cardImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        price: "₹199",
        tags: ["Kochi", "Veg", "South Indian"],

        restaurantDetails: {
            name: "SPICE TRAIL",
            location: "Kochi",
            tags: ["Kochi", "Veg"],
            description:
                "A true Kerala experience awaits at Spice Trail! Savor authentic South Indian flavours — from crispy dosas and fluffy appams to creamy vegetable stews — crafted with traditional spices that tell the story of Kerala's rich culinary heritage.",
            gallery: {
                main: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Masala Dosa",
                    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=300",
                    alt: "Dosa"
                },
                {
                    name: "Kerala Appam",
                    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=300",
                    alt: "Appam"
                },
                {
                    name: "Veg Stew",
                    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=300",
                    alt: "Stew"
                }
            ]
        }
    },

    {
        id: "tropical-bites",
        name: "Tropical Bites",
        cardImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
        rating: 4.1,
        price: "₹149",
        tags: ["Kochi", "Snacks", "Fast Food"],

        restaurantDetails: {
            name: "TROPICAL BITES",
            location: "Kochi",
            tags: ["Kochi", "Fast Food"],
            description:
                "Quick, tasty, and fun! Tropical Bites is your go-to snack stop between rides at Wonderla Kochi. From crispy fries and loaded burgers to fresh fruit coolers, we keep you energized and ready for the next adventure.",
            gallery: {
                main: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Loaded Burger",
                    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=300",
                    alt: "Burger"
                },
                {
                    name: "Crispy Fries",
                    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=300",
                    alt: "Fries"
                },
                {
                    name: "Fruit Cooler",
                    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=300",
                    alt: "Cooler"
                }
            ]
        }
    },

    // ─── BENGALURU ────────────────────────────────────────────────────────────

    {
        id: "garden-grill",
        name: "Garden Grill",
        cardImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
        rating: 4.6,
        price: "₹349",
        tags: ["Bengaluru", "BBQ", "Non-Veg"],

        restaurantDetails: {
            name: "GARDEN GRILL",
            location: "Bengaluru",
            tags: ["Bengaluru", "Non-Veg"],
            description:
                "Fire up your appetite at Garden Grill — Bengaluru's favourite open-air barbecue spot inside Wonderla. Choose from sizzling kebabs, grilled fish, and smoky chicken wings, all served fresh off the grill with signature dips and sides.",
            gallery: {
                main: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Seekh Kebab",
                    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=300",
                    alt: "Kebab"
                },
                {
                    name: "Grilled Fish",
                    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=300",
                    alt: "Fish"
                },
                {
                    name: "Smoky Wings",
                    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=300",
                    alt: "Wings"
                }
            ]
        }
    },

    {
        id: "cafe-bliss",
        name: "Café Bliss",
        cardImage: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=600",
        rating: 4.4,
        price: "₹179",
        tags: ["Bengaluru", "Café", "Veg"],

        restaurantDetails: {
            name: "CAFÉ BLISS",
            location: "Bengaluru",
            tags: ["Bengaluru", "Veg"],
            description:
                "Take a relaxing break at Café Bliss — a cozy café-style space inside Wonderla Bengaluru. Enjoy freshly brewed coffees, sandwiches, pastries, and light bites in a comfortable air-conditioned setting perfect for families.",
            gallery: {
                main: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Cappuccino",
                    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=300",
                    alt: "Coffee"
                },
                {
                    name: "Club Sandwich",
                    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300",
                    alt: "Sandwich"
                },
                {
                    name: "Chocolate Brownie",
                    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=300",
                    alt: "Brownie"
                }
            ]
        }
    },

    {
        id: "bengaluru-dhaba",
        name: "Bengaluru Dhaba",
        cardImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
        rating: 4.2,
        price: "₹220",
        tags: ["Bengaluru", "North Indian", "Non-Veg"],

        restaurantDetails: {
            name: "BENGALURU DHABA",
            location: "Bengaluru",
            tags: ["Bengaluru", "North Indian"],
            description:
                "Inspired by the rustic roadside dhabas of North India, Bengaluru Dhaba brings hearty, home-style curries, buttery naan, and rich dal makhani to Wonderla Bengaluru. A comforting meal that feels just like home.",
            gallery: {
                main: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Dal Makhani",
                    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80&w=300",
                    alt: "Dal"
                },
                {
                    name: "Butter Naan",
                    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=300",
                    alt: "Naan"
                },
                {
                    name: "Paneer Tikka",
                    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=300",
                    alt: "Paneer"
                }
            ]
        }
    },

    // ─── HYDERABAD ────────────────────────────────────────────────────────────

    {
        id: "dum-pukht",
        name: "Dum Pukht",
        cardImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
        rating: 4.7,
        price: "₹320",
        tags: ["Hyderabad", "Biryani", "Non-Veg"],

        restaurantDetails: {
            name: "DUM PUKHT",
            location: "Hyderabad",
            tags: ["Hyderabad", "Non-Veg"],
            description:
                "Experience the royal taste of Hyderabad at Dum Pukht! Our slow-cooked dum biryani, prepared in sealed handis with fragrant basmati rice and succulent meat, is a tribute to Hyderabad's legendary Nizami culinary tradition.",
            gallery: {
                main: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Hyderabadi Biryani",
                    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=300",
                    alt: "Biryani"
                },
                {
                    name: "Mirchi Ka Salan",
                    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=300",
                    alt: "Salan"
                },
                {
                    name: "Double Ka Meetha",
                    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&q=80&w=300",
                    alt: "Dessert"
                }
            ]
        }
    },

    {
        id: "nizam-corner",
        name: "Nizam Corner",
        cardImage: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&q=80&w=600",
        rating: 4.3,
        price: "₹180",
        tags: ["Hyderabad", "Snacks", "Veg"],

        restaurantDetails: {
            name: "NIZAM CORNER",
            location: "Hyderabad",
            tags: ["Hyderabad", "Veg"],
            description:
                "All the iconic street flavours of Hyderabad packed into one corner! Nizam Corner serves famous Osmania biscuits, Irani chai, and crispy snacks that bring the soul of the Old City right into Wonderla Hyderabad.",
            gallery: {
                main: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Irani Chai",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=300",
                    alt: "Chai"
                },
                {
                    name: "Osmania Biscuits",
                    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=300",
                    alt: "Biscuits"
                },
                {
                    name: "Lukhmi",
                    image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?auto=format&fit=crop&q=80&w=300",
                    alt: "Lukhmi"
                }
            ]
        }
    },

    {
        id: "pearl-buffet",
        name: "Pearl Buffet",
        cardImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        price: "₹450",
        tags: ["Hyderabad", "Buffet", "Multi-Cuisine"],

        restaurantDetails: {
            name: "PEARL BUFFET",
            location: "Hyderabad",
            tags: ["Hyderabad", "Buffet"],
            description:
                "An indulgent spread awaits at Pearl Buffet — Wonderla Hyderabad's premium dining experience. From live counters serving fresh biryanis and grills to an extensive dessert section with Qubani ka meetha and phirni, there's something for every palate.",
            gallery: {
                main: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
                thumbnails: [
                    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=200",
                    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=200"
                ]
            },
            buttons: ["VIEW MENU", "INQUIRE"],
            specialDishes: [
                {
                    name: "Live Biryani Counter",
                    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=300",
                    alt: "Biryani"
                },
                {
                    name: "Qubani Ka Meetha",
                    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=300",
                    alt: "Dessert"
                },
                {
                    name: "Mixed Grill Platter",
                    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=300",
                    alt: "Grill"
                }
            ]
        }
    }
];


const urlParams = new URLSearchParams(window.location.search);
const selectedId = urlParams.get('id');

const restaurant = RESTAURANTS.find(item => String(item.id) === String(selectedId));

function renderDetailPage(data) {
    const details = data.restaurantDetails;

    const htmlContent = `
   <section class="container">
        <div class="gallery-container">
            <div class="main-img">
                <img src="${details.gallery.main}" alt="${details.name}">
            </div>
            <div class="thumbnails">
              ${details.gallery.thumbnails.map(thumb => `
                <img src="${thumb}" class= "thumb" alt="Thumbnail">
                `).join('')}
            </div>
        </div>

        <div class="details">
            <h1>${details.name}</h1>
            ${details.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
            <p class="description">
                ${details.description}
            </p>
            <div class="btn-group">
              ${details.buttons.map((btn, index) => `
              <button class="${index === 0 ? 'btn-primary' : 'btn-secondary'} btn-detail-action" data-action="${btn}">${btn}</button>`).join('')}
            </div>
        </div>
       </section>

      <section class="special-dishes">
        <h2>OUR SPECIAL DISHES</h2>
        <div class="dish-grid">
          ${details.specialDishes.map(dish => `
          <div class="dish-card">
            <div class="dish-img-wrapper">
              <img src="${dish.image}" alt="${dish.alt}">
            </div>
            <p>${dish.name}</p>
          </div>
        `).join('')}
        </div>
      </section> 
   `
    document.getElementById('restaurant-page').innerHTML = htmlContent;

    document.querySelectorAll('.btn-detail-action').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.action === 'VIEW MENU') {
            window.location.href = 'index4.html';
        } else {
            // inquiry logic here
        }
    });
});

}
if (restaurant) {
    renderDetailPage(restaurant);
} else {
    document.getElementById('restaurant-page').innerHTML = `<p>Restaurant not found.</p>`;
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