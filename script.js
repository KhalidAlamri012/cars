// FoodHub - Multi-Restaurant Food Ordering Platform

// Sample restaurant data
const restaurants = [
    {
        id: 1,
        name: "Pizza Palace",
        cuisine: "italian",
        rating: 4.8,
        deliveryTime: "25-35 min",
        minOrder: 15,
        image: "🍕",
        description: "Authentic Italian pizza and pasta",
        menu: {
            categories: ["Appetizers", "Pizza", "Pasta", "Desserts"],
            items: {
                "Appetizers": [
                    { id: 1, name: "Garlic Bread", price: 6.99, description: "Fresh baked bread with garlic butter", image: "🥖" },
                    { id: 2, name: "Bruschetta", price: 8.99, description: "Toasted bread with tomatoes and basil", image: "🍅" }
                ],
                "Pizza": [
                    { id: 3, name: "Margherita Pizza", price: 16.99, description: "Classic tomato sauce with mozzarella", image: "🍕" },
                    { id: 4, name: "Pepperoni Pizza", price: 18.99, description: "Spicy pepperoni with cheese", image: "🍕" },
                    { id: 5, name: "Vegetarian Pizza", price: 17.99, description: "Fresh vegetables and cheese", image: "🍕" }
                ],
                "Pasta": [
                    { id: 6, name: "Spaghetti Carbonara", price: 14.99, description: "Creamy pasta with bacon and eggs", image: "🍝" },
                    { id: 7, name: "Fettuccine Alfredo", price: 13.99, description: "Creamy Alfredo sauce", image: "🍝" }
                ],
                "Desserts": [
                    { id: 8, name: "Tiramisu", price: 7.99, description: "Classic Italian dessert", image: "🍰" }
                ]
            }
        }
    },
    {
        id: 2,
        name: "Golden Dragon",
        cuisine: "chinese",
        rating: 4.6,
        deliveryTime: "30-45 min",
        minOrder: 20,
        image: "🥢",
        description: "Traditional Chinese cuisine",
        menu: {
            categories: ["Appetizers", "Main Dishes", "Rice & Noodles", "Desserts"],
            items: {
                "Appetizers": [
                    { id: 9, name: "Spring Rolls", price: 5.99, description: "Crispy vegetable spring rolls", image: "🥢" },
                    { id: 10, name: "Dumplings", price: 7.99, description: "Steamed pork dumplings", image: "🥟" }
                ],
                "Main Dishes": [
                    { id: 11, name: "Kung Pao Chicken", price: 16.99, description: "Spicy chicken with vegetables", image: "🍗" },
                    { id: 12, name: "Sweet & Sour Pork", price: 15.99, description: "Crispy pork in sweet sauce", image: "🥩" }
                ],
                "Rice & Noodles": [
                    { id: 13, name: "Fried Rice", price: 12.99, description: "Classic Chinese fried rice", image: "🍚" },
                    { id: 14, name: "Lo Mein", price: 13.99, description: "Stir-fried noodles", image: "🍜" }
                ],
                "Desserts": [
                    { id: 15, name: "Fortune Cookie", price: 1.99, description: "Traditional fortune cookie", image: "🍪" }
                ]
            }
        }
    },
    {
        id: 3,
        name: "Taj Mahal",
        cuisine: "indian",
        rating: 4.7,
        deliveryTime: "35-50 min",
        minOrder: 25,
        image: "🍛",
        description: "Authentic Indian cuisine",
        menu: {
            categories: ["Appetizers", "Curries", "Breads", "Desserts"],
            items: {
                "Appetizers": [
                    { id: 16, name: "Samosa", price: 4.99, description: "Spiced potato and peas pastry", image: "🥟" },
                    { id: 17, name: "Pakora", price: 5.99, description: "Vegetable fritters", image: "🥬" }
                ],
                "Curries": [
                    { id: 18, name: "Butter Chicken", price: 18.99, description: "Creamy tomato-based curry", image: "🍗" },
                    { id: 19, name: "Palak Paneer", price: 16.99, description: "Spinach with cottage cheese", image: "🥬" }
                ],
                "Breads": [
                    { id: 20, name: "Naan", price: 2.99, description: "Soft Indian bread", image: "🫓" },
                    { id: 21, name: "Roti", price: 1.99, description: "Whole wheat flatbread", image: "🫓" }
                ],
                "Desserts": [
                    { id: 22, name: "Gulab Jamun", price: 6.99, description: "Sweet milk dumplings", image: "🍯" }
                ]
            }
        }
    },
    {
        id: 4,
        name: "Taco Fiesta",
        cuisine: "mexican",
        rating: 4.5,
        deliveryTime: "20-30 min",
        minOrder: 18,
        image: "🌮",
        description: "Fresh Mexican street food",
        menu: {
            categories: ["Tacos", "Burritos", "Sides", "Drinks"],
            items: {
                "Tacos": [
                    { id: 23, name: "Beef Tacos", price: 12.99, description: "Three beef tacos with salsa", image: "🌮" },
                    { id: 24, name: "Chicken Tacos", price: 11.99, description: "Three chicken tacos", image: "🌮" }
                ],
                "Burritos": [
                    { id: 25, name: "Bean Burrito", price: 9.99, description: "Refried beans and rice", image: "🌯" },
                    { id: 26, name: "Steak Burrito", price: 13.99, description: "Grilled steak with vegetables", image: "🌯" }
                ],
                "Sides": [
                    { id: 27, name: "Guacamole", price: 4.99, description: "Fresh avocado dip", image: "🥑" },
                    { id: 28, name: "Chips & Salsa", price: 3.99, description: "Tortilla chips with salsa", image: "🌶️" }
                ],
                "Drinks": [
                    { id: 29, name: "Horchata", price: 3.99, description: "Traditional rice drink", image: "🥤" }
                ]
            }
        }
    },
    {
        id: 5,
        name: "Sushi Master",
        cuisine: "japanese",
        rating: 4.9,
        deliveryTime: "40-55 min",
        minOrder: 30,
        image: "🍣",
        description: "Premium Japanese sushi and sashimi",
        menu: {
            categories: ["Sushi", "Sashimi", "Rolls", "Sides"],
            items: {
                "Sushi": [
                    { id: 30, name: "Salmon Nigiri", price: 8.99, description: "Fresh salmon over rice", image: "🍣" },
                    { id: 31, name: "Tuna Nigiri", price: 7.99, description: "Fresh tuna over rice", image: "🍣" }
                ],
                "Sashimi": [
                    { id: 32, name: "Salmon Sashimi", price: 12.99, description: "Fresh salmon slices", image: "🐟" },
                    { id: 33, name: "Tuna Sashimi", price: 11.99, description: "Fresh tuna slices", image: "🐟" }
                ],
                "Rolls": [
                    { id: 34, name: "California Roll", price: 10.99, description: "Crab, avocado, cucumber", image: "🍣" },
                    { id: 35, name: "Spicy Tuna Roll", price: 11.99, description: "Spicy tuna and cucumber", image: "🍣" }
                ],
                "Sides": [
                    { id: 36, name: "Miso Soup", price: 3.99, description: "Traditional Japanese soup", image: "🍲" },
                    { id: 37, name: "Edamame", price: 4.99, description: "Steamed soybeans", image: "🫘" }
                ]
            }
        }
    },
    {
        id: 6,
        name: "Burger Joint",
        cuisine: "american",
        rating: 4.4,
        deliveryTime: "25-40 min",
        minOrder: 20,
        image: "🍔",
        description: "Classic American burgers and fries",
        menu: {
            categories: ["Burgers", "Sides", "Drinks", "Desserts"],
            items: {
                "Burgers": [
                    { id: 38, name: "Classic Burger", price: 12.99, description: "Beef patty with lettuce and tomato", image: "🍔" },
                    { id: 39, name: "Cheeseburger", price: 13.99, description: "Beef patty with cheese", image: "🍔" },
                    { id: 40, name: "Bacon Burger", price: 15.99, description: "Beef patty with bacon", image: "🍔" }
                ],
                "Sides": [
                    { id: 41, name: "French Fries", price: 4.99, description: "Crispy golden fries", image: "🍟" },
                    { id: 42, name: "Onion Rings", price: 5.99, description: "Crispy onion rings", image: "🧅" }
                ],
                "Drinks": [
                    { id: 43, name: "Milkshake", price: 6.99, description: "Vanilla milkshake", image: "🥤" },
                    { id: 44, name: "Soda", price: 2.99, description: "Choice of soft drinks", image: "🥤" }
                ],
                "Desserts": [
                    { id: 45, name: "Apple Pie", price: 5.99, description: "Classic American apple pie", image: "🥧" }
                ]
            }
        }
    }
];

// Application state
let currentUser = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    addresses: [
        "123 Main St, City, State 12345",
        "456 Oak Ave, City, State 12345"
    ],
    preferences: {
        dietary: [],
        spiceLevel: "Medium"
    },
    paymentMethods: [
        "Credit Card ending in 1234",
        "PayPal"
    ]
};

let cart = [];
let orders = [
    {
        id: "ORD001",
        restaurant: "Pizza Palace",
        items: [
            { name: "Margherita Pizza", quantity: 1, price: 16.99 },
            { name: "Garlic Bread", quantity: 1, price: 6.99 }
        ],
        total: 23.98,
        status: "delivered",
        date: "2024-01-15",
        deliveryAddress: "123 Main St, City, State 12345"
    },
    {
        id: "ORD002",
        restaurant: "Golden Dragon",
        items: [
            { name: "Kung Pao Chicken", quantity: 1, price: 16.99 },
            { name: "Fried Rice", quantity: 1, price: 12.99 }
        ],
        total: 29.98,
        status: "preparing",
        date: "2024-01-20",
        deliveryAddress: "123 Main St, City, State 12345"
    }
];

let currentRestaurant = null;
let currentCategory = null;

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const successModal = document.getElementById('successModal');
const orderNumber = document.getElementById('orderNumber');
const viewOrderBtn = document.getElementById('viewOrderBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load initial data
    displayFeaturedRestaurants();
    displayAllRestaurants();
    loadOrders();
    updateCartCount();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load user data
    loadUserData();
}

function setupEventListeners() {
    // Navigation
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            showSection(section);
        });
    });

    // Search
    searchInput.addEventListener('input', handleSearch);

    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
    checkoutBtn.addEventListener('click', openCheckout);

    // Checkout
    closeCheckout.addEventListener('click', closeCheckoutModal);
    placeOrderBtn.addEventListener('click', placeOrder);

    // Success modal
    viewOrderBtn.addEventListener('click', () => {
        closeModal(successModal);
        showSection('orders');
    });

    // Cuisine filters
    document.querySelectorAll('.cuisine-card').forEach(card => {
        card.addEventListener('click', () => {
            const cuisine = card.getAttribute('data-cuisine');
            filterByCuisine(cuisine);
        });
    });

    // Restaurant filters
    document.getElementById('cuisineFilter').addEventListener('change', filterRestaurants);
    document.getElementById('ratingFilter').addEventListener('change', filterRestaurants);
    document.getElementById('deliveryFilter').addEventListener('change', filterRestaurants);

    // Order tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            switchOrderTab(tab);
        });
    });

    // Account tabs
    document.querySelectorAll('.account-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            switchAccountTab(tab);
        });
    });
}

// Navigation functions
function showSection(sectionName) {
    // Update navigation buttons
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === sectionName) {
            btn.classList.add('active');
        }
    });

    // Show selected section
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionName) {
            section.classList.add('active');
        }
    });
}

// Restaurant display functions
function displayFeaturedRestaurants() {
    const featuredContainer = document.getElementById('featuredRestaurants');
    const featured = restaurants.slice(0, 3); // Show first 3 restaurants
    
    featuredContainer.innerHTML = featured.map(restaurant => createRestaurantCard(restaurant)).join('');
}

function displayAllRestaurants() {
    const allContainer = document.getElementById('allRestaurants');
    allContainer.innerHTML = restaurants.map(restaurant => createRestaurantCard(restaurant)).join('');
}

function createRestaurantCard(restaurant) {
    const stars = '★'.repeat(Math.floor(restaurant.rating)) + '☆'.repeat(5 - Math.floor(restaurant.rating));
    
    return `
        <div class="restaurant-card" onclick="openRestaurant(${restaurant.id})">
            <div class="restaurant-image">
                ${restaurant.image}
            </div>
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisine.charAt(0).toUpperCase() + restaurant.cuisine.slice(1)}</p>
                <div class="restaurant-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-text">${restaurant.rating}</span>
                </div>
                <div class="restaurant-details">
                    <span>${restaurant.deliveryTime}</span>
                    <span>Min. $${restaurant.minOrder}</span>
                </div>
            </div>
        </div>
    `;
}

// Restaurant menu functions
function openRestaurant(restaurantId) {
    currentRestaurant = restaurants.find(r => r.id === restaurantId);
    if (!currentRestaurant) return;

    // Update restaurant header
    const header = document.getElementById('restaurantHeader');
    header.innerHTML = `
        <div class="restaurant-header-content">
            <div class="restaurant-header-image">
                ${currentRestaurant.image}
            </div>
            <div class="restaurant-header-info">
                <h2>${currentRestaurant.name}</h2>
                <p>${currentRestaurant.description}</p>
                <p>Delivery: ${currentRestaurant.deliveryTime} | Min. Order: $${currentRestaurant.minOrder}</p>
            </div>
        </div>
    `;

    // Load menu categories
    loadMenuCategories();

    // Show restaurant menu section
    showSection('restaurant-menu');
}

function loadMenuCategories() {
    const categoriesContainer = document.getElementById('menuCategories');
    const categories = currentRestaurant.menu.categories;
    
    categoriesContainer.innerHTML = categories.map((category, index) => `
        <button class="category-btn ${index === 0 ? 'active' : ''}" onclick="loadMenuItems('${category}')">
            ${category}
        </button>
    `).join('');

    // Load first category by default
    if (categories.length > 0) {
        loadMenuItems(categories[0]);
    }
}

function loadMenuItems(category) {
    currentCategory = category;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) {
            btn.classList.add('active');
        }
    });

    // Load menu items
    const itemsContainer = document.getElementById('menuItems');
    const items = currentRestaurant.menu.items[category] || [];
    
    itemsContainer.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">
                ${item.image}
            </div>
            <div class="menu-item-info">
                <h4 class="menu-item-name">${item.name}</h4>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="menu-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-display" id="qty-${item.id}">0</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Cart functions
function updateQuantity(itemId, change) {
    const display = document.getElementById(`qty-${itemId}`);
    let currentQty = parseInt(display.textContent) || 0;
    currentQty = Math.max(0, currentQty + change);
    display.textContent = currentQty;
}

function addToCart(itemId) {
    const quantity = parseInt(document.getElementById(`qty-${itemId}`).textContent) || 0;
    if (quantity === 0) return;

    const item = findMenuItem(itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: itemId,
            name: item.name,
            price: item.price,
            quantity: quantity,
            restaurant: currentRestaurant.name,
            image: item.image
        });
    }

    // Reset quantity display
    document.getElementById(`qty-${itemId}`).textContent = '0';
    
    updateCartCount();
    updateCartDisplay();
    showSuccessMessage(`${item.name} added to cart!`);
}

function findMenuItem(itemId) {
    if (!currentRestaurant) return null;
    
    for (const category of Object.values(currentRestaurant.menu.items)) {
        const item = category.find(item => item.id === itemId);
        if (item) return item;
    }
    return null;
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartDisplay() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                ${item.image}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateCartQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== itemId);
    }

    updateCartCount();
    updateCartDisplay();
}

function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
}

// Checkout functions
function openCheckout() {
    if (cart.length === 0) {
        showSuccessMessage('Your cart is empty!');
        return;
    }

    // Update order summary
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;

    checkoutModal.classList.add('show');
    closeCartSidebar();
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('show');
}

function placeOrder() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderId = 'ORD' + Date.now().toString().slice(-6);
    
    const newOrder = {
        id: orderId,
        restaurant: cart[0].restaurant,
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        total: total,
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
        deliveryAddress: document.getElementById('deliveryAddress').value
    };

    orders.unshift(newOrder);
    
    // Clear cart
    cart = [];
    updateCartCount();
    updateCartDisplay();
    
    // Show success modal
    orderNumber.textContent = orderId;
    closeCheckoutModal();
    successModal.classList.add('show');
    
    // Update orders display
    loadOrders();
}

// Order management
function loadOrders() {
    const activeOrders = orders.filter(order => ['pending', 'preparing', 'delivering'].includes(order.status));
    const pastOrders = orders.filter(order => order.status === 'delivered');

    displayOrders('activeOrders', activeOrders);
    displayOrders('pastOrders', pastOrders);
}

function displayOrders(containerId, orderList) {
    const container = document.getElementById(containerId);
    
    if (orderList.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: white;">No orders found.</p>';
        return;
    }

    container.innerHTML = orderList.map(order => `
        <div class="order-card">
            <div class="order-header">
                <span class="order-number">Order #${order.id}</span>
                <span class="order-status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">Total: $${order.total.toFixed(2)}</div>
        </div>
    `).join('');
}

function switchOrderTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tab) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === tab + 'Orders') {
            content.classList.add('active');
        }
    });
}

// Account functions
function loadUserData() {
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userEmail').textContent = currentUser.email;
}

function switchAccountTab(tab) {
    document.querySelectorAll('.account-nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tab) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.account-tab').forEach(content => {
        content.classList.remove('active');
        if (content.id === tab) {
            content.classList.add('active');
        }
    });
}

// Search and filter functions
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm) ||
        restaurant.description.toLowerCase().includes(searchTerm)
    );
    
    displayFilteredRestaurants(filteredRestaurants);
}

function filterByCuisine(cuisine) {
    showSection('restaurants');
    document.getElementById('cuisineFilter').value = cuisine;
    filterRestaurants();
}

function filterRestaurants() {
    const cuisineFilter = document.getElementById('cuisineFilter').value;
    const ratingFilter = parseFloat(document.getElementById('ratingFilter').value) || 0;
    const deliveryFilter = parseInt(document.getElementById('deliveryFilter').value) || 999;

    const filteredRestaurants = restaurants.filter(restaurant => {
        const cuisineMatch = !cuisineFilter || restaurant.cuisine === cuisineFilter;
        const ratingMatch = restaurant.rating >= ratingFilter;
        const deliveryMatch = parseInt(restaurant.deliveryTime.split('-')[1]) <= deliveryFilter;
        
        return cuisineMatch && ratingMatch && deliveryMatch;
    });

    displayFilteredRestaurants(filteredRestaurants);
}

function displayFilteredRestaurants(restaurants) {
    const container = document.getElementById('allRestaurants');
    container.innerHTML = restaurants.map(restaurant => createRestaurantCard(restaurant)).join('');
}

// Utility functions
function showSuccessMessage(message) {
    // Create a temporary success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 4000;
        animation: slideIn 0.3s ease;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

function closeModal(modal) {
    modal.classList.remove('show');
}

// Global functions for HTML onclick handlers
window.showSection = showSection;
window.openRestaurant = openRestaurant;
window.loadMenuItems = loadMenuItems;
window.updateQuantity = updateQuantity;
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.filterByCuisine = filterByCuisine; 