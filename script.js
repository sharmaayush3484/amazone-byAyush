const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click', function (event) {
    console.log("right button clicked");
    const comment = document.querySelector('.product-slide');
    comment.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn.addEventListener('click', function (event) {
    console.log("left button clicked");
    const comment = document.querySelector('.product-slide');
    comment.scrollLeft -= 1100;
    event.preventDefault();
});

const backtop = document.querySelector(".foot-panel");

backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".close-btn"); // Updated selector
const black = document.querySelector(".black");
const panelAllBtn = document.querySelector(".panel-all"); // Updated selector

// Event listener for opening the sidebar
panelAllBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    black.classList.add("active");
    cross.style.display = "block"; // Show the cross button
});

// Event listener for closing the sidebar
cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    black.classList.remove("active");
    cross.style.display = "none"; // Hide the cross button
});

document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.cart'); // Adjust the selector based on your actual cart icon class
    const savedItemsSection = document.querySelector('.saved-items-section');

    cartIcon.addEventListener('click', function () {

        savedItemsSection.classList.toggle('active');
    });
});

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive product slider with automatic scrolling
const productSlide = document.querySelector('.product-slide');
let scrollPosition = 0;

function autoScroll() {
    scrollPosition += 1100;
    if (scrollPosition >= productSlide.scrollWidth) {
        scrollPosition = 0;
    }

    productSlide.scrollLeft = scrollPosition;
}

// Set an interval for automatic scrolling (adjust the duration as needed)
const autoScrollInterval = setInterval(autoScroll, 5000);

// Pause automatic scrolling on hover
productSlide.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});

// Resume automatic scrolling on mouse leave
productSlide.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(autoScroll, 3000);
});

// Example: Add functionality to load more products dynamically
const loadMoreButton = document.querySelector('.load-more-button');
const moreProductsContainer = document.querySelector('.more-products-container');

loadMoreButton.addEventListener('click', () => {
    // Simulate loading more products (replace with your actual logic)
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    newProduct.textContent = 'New Product';
    moreProductsContainer.appendChild(newProduct);
});
