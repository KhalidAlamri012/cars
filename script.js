// AutoHub Car Marketplace JavaScript

// Sample car data
let cars = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        price: 25000,
        mileage: 15000,
        color: 'Silver',
        condition: 'Excellent',
        description: 'Well-maintained Toyota Camry with low mileage. Perfect for daily commuting.',
        contact: 'john@email.com'
    },
    {
        id: 2,
        make: 'Honda',
        model: 'Civic',
        year: 2021,
        price: 22000,
        mileage: 25000,
        color: 'Blue',
        condition: 'Good',
        description: 'Reliable Honda Civic with great fuel efficiency. One owner.',
        contact: 'sarah@email.com'
    },
    {
        id: 3,
        make: 'BMW',
        model: '3 Series',
        year: 2023,
        price: 45000,
        mileage: 8000,
        color: 'Black',
        condition: 'Excellent',
        description: 'Luxury BMW 3 Series with premium features. Like new condition.',
        contact: 'mike@email.com'
    },
    {
        id: 4,
        make: 'Mercedes',
        model: 'C-Class',
        year: 2022,
        price: 42000,
        mileage: 18000,
        color: 'White',
        condition: 'Excellent',
        description: 'Elegant Mercedes C-Class with leather interior. Full service history.',
        contact: 'emma@email.com'
    },
    {
        id: 5,
        make: 'Ford',
        model: 'Mustang',
        year: 2021,
        price: 35000,
        mileage: 12000,
        color: 'Red',
        condition: 'Good',
        description: 'Powerful Ford Mustang with sport package. Great performance car.',
        contact: 'david@email.com'
    },
    {
        id: 6,
        make: 'Toyota',
        model: 'RAV4',
        year: 2023,
        price: 32000,
        mileage: 5000,
        color: 'Gray',
        condition: 'Excellent',
        description: 'Spacious Toyota RAV4 SUV. Perfect for families and adventures.',
        contact: 'lisa@email.com'
    }
];

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const carsGrid = document.getElementById('carsGrid');
const searchInput = document.getElementById('searchInput');
const makeFilter = document.getElementById('makeFilter');
const priceFilter = document.getElementById('priceFilter');
const yearFilter = document.getElementById('yearFilter');
const mileageFilter = document.getElementById('mileageFilter');
const resultsCount = document.getElementById('resultsCount');
const sellForm = document.getElementById('sellForm');
const carModal = document.getElementById('carModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const successMessage = document.getElementById('successMessage');
const successText = document.getElementById('successText');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load initial data
    displayCars(cars);
    updateResultsCount(cars.length);
    
    // Initialize animated counters
    animateCounters();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update dashboard stats
    updateDashboardStats();
}

function setupEventListeners() {
    // Navigation
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            showSection(section);
        });
    });

    // Search and filters
    searchInput.addEventListener('input', filterCars);
    makeFilter.addEventListener('change', filterCars);
    priceFilter.addEventListener('change', filterCars);
    yearFilter.addEventListener('change', filterCars);
    mileageFilter.addEventListener('change', filterCars);

    // Form submission
    sellForm.addEventListener('submit', handleFormSubmission);

    // Modal
    closeModal.addEventListener('click', closeCarModal);
    window.addEventListener('click', (e) => {
        if (e.target === carModal) {
            closeCarModal();
        }
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

    // Update dashboard stats when showing dashboard
    if (sectionName === 'dashboard') {
        updateDashboardStats();
    }
}

// Car display functions
function displayCars(carsToShow) {
    carsGrid.innerHTML = '';
    
    if (carsToShow.length === 0) {
        carsGrid.innerHTML = `
            <div class="no-results">
                <p style="color: white; text-align: center; font-size: 1.2rem; grid-column: 1 / -1;">
                    No cars found matching your criteria.
                </p>
            </div>
        `;
        return;
    }

    carsToShow.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <div class="car-image">🚗</div>
        <h3 class="car-title">${car.year} ${car.make} ${car.model}</h3>
        <div class="car-price">$${car.price.toLocaleString()}</div>
        <div class="car-details">
            <div class="car-detail"><strong>Mileage:</strong> ${car.mileage.toLocaleString()} miles</div>
            <div class="car-detail"><strong>Color:</strong> ${car.color}</div>
            <div class="car-detail"><strong>Condition:</strong> ${car.condition}</div>
            <div class="car-detail"><strong>Contact:</strong> ${car.contact}</div>
        </div>
        <div class="car-actions">
            <button class="btn btn-secondary" onclick="viewCarDetails(${car.id})">View Details</button>
            <button class="btn btn-primary" onclick="contactSeller('${car.contact}')">Contact Seller</button>
        </div>
    `;
    return card;
}

// Filter functions
function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedMake = makeFilter.value;
    const selectedPriceRange = priceFilter.value;
    const selectedYear = yearFilter.value;
    const selectedMileageRange = mileageFilter.value;

    const filteredCars = cars.filter(car => {
        // Search term filter
        const searchMatch = !searchTerm || 
            car.make.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm) ||
            car.year.toString().includes(searchTerm);

        // Make filter
        const makeMatch = !selectedMake || car.make === selectedMake;

        // Price filter
        const priceMatch = !selectedPriceRange || checkPriceRange(car.price, selectedPriceRange);

        // Year filter
        const yearMatch = !selectedYear || car.year.toString() === selectedYear;

        // Mileage filter
        const mileageMatch = !selectedMileageRange || checkMileageRange(car.mileage, selectedMileageRange);

        return searchMatch && makeMatch && priceMatch && yearMatch && mileageMatch;
    });

    displayCars(filteredCars);
    updateResultsCount(filteredCars.length);
}

function checkPriceRange(price, range) {
    const [min, max] = range.split('-').map(Number);
    return price >= min && price <= max;
}

function checkMileageRange(mileage, range) {
    const [min, max] = range.split('-').map(Number);
    return mileage >= min && mileage <= max;
}

function updateResultsCount(count) {
    resultsCount.textContent = `Showing ${count} car${count !== 1 ? 's' : ''}`;
}

// Form handling
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(sellForm);
    const newCar = {
        id: cars.length + 1,
        make: formData.get('make'),
        model: formData.get('model'),
        year: parseInt(formData.get('year')),
        price: parseInt(formData.get('price')),
        mileage: parseInt(formData.get('mileage')),
        color: formData.get('color'),
        condition: formData.get('condition'),
        description: formData.get('description') || 'No description provided.',
        contact: formData.get('contact')
    };

    // Add new car to the array
    cars.push(newCar);

    // Reset form
    sellForm.reset();

    // Show success message
    showSuccessMessage('Car listed successfully! Your vehicle is now available for buyers to see.');

    // Update dashboard stats
    updateDashboardStats();

    // Switch to browse section to show the new listing
    setTimeout(() => {
        showSection('browse');
        // Trigger filter to show all cars including the new one
        filterCars();
    }, 2000);
}

// Modal functions
function viewCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    modalContent.innerHTML = `
        <h2 style="color: #333; margin-bottom: 1rem;">${car.year} ${car.make} ${car.model}</h2>
        <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🚗</div>
        <div style="color: #4ade80; font-size: 2rem; font-weight: bold; text-align: center; margin-bottom: 1.5rem;">
            $${car.price.toLocaleString()}
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
            <div><strong>Make:</strong> ${car.make}</div>
            <div><strong>Model:</strong> ${car.model}</div>
            <div><strong>Year:</strong> ${car.year}</div>
            <div><strong>Price:</strong> $${car.price.toLocaleString()}</div>
            <div><strong>Mileage:</strong> ${car.mileage.toLocaleString()} miles</div>
            <div><strong>Color:</strong> ${car.color}</div>
            <div><strong>Condition:</strong> ${car.condition}</div>
            <div><strong>Contact:</strong> ${car.contact}</div>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <strong>Description:</strong>
            <p style="margin-top: 0.5rem; line-height: 1.6;">${car.description}</p>
        </div>
        <div style="text-align: center;">
            <button class="btn btn-primary" onclick="contactSeller('${car.contact}')">
                Contact Seller
            </button>
        </div>
    `;

    carModal.style.display = 'block';
}

function closeCarModal() {
    carModal.style.display = 'none';
}

function contactSeller(contact) {
    closeCarModal();
    showSuccessMessage(`Contact information: ${contact}. Please reach out to the seller directly.`);
}

// Success message
function showSuccessMessage(message) {
    successText.textContent = message;
    successMessage.classList.add('show');
    
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 4000);
}

// Dashboard functions
function updateDashboardStats() {
    const totalCars = cars.length;
    const avgPrice = cars.length > 0 ? Math.round(cars.reduce((sum, car) => sum + car.price, 0) / cars.length) : 0;
    
    // Update the stats in the dashboard
    const statsCards = document.querySelectorAll('.stat-card');
    if (statsCards.length >= 4) {
        const carsAvailableElement = statsCards[0].querySelector('.stat-number');
        const carsSoldElement = statsCards[1].querySelector('.stat-number');
        const avgRatingElement = statsCards[2].querySelector('.stat-number');
        const customersElement = statsCards[3].querySelector('.stat-number');
        
        if (carsAvailableElement) carsAvailableElement.textContent = totalCars;
        if (carsSoldElement) carsSoldElement.textContent = Math.floor(totalCars * 0.57); // Simulated sold cars
        if (avgRatingElement) avgRatingElement.textContent = '4.8';
        if (customersElement) customersElement.textContent = Math.floor(totalCars * 20); // Simulated customers
    }
}

// Animated counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (target % 1 === 0) {
                    counter.textContent = Math.floor(current);
                } else {
                    counter.textContent = current.toFixed(1);
                }
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
                counter.classList.add('animate');
            }
        };
        
        // Start animation when dashboard is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Global functions for HTML onclick handlers
window.showSection = showSection;
window.viewCarDetails = viewCarDetails;
window.contactSeller = contactSeller; 