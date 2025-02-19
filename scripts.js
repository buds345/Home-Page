let slideIndex = 0;

function showSlide() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;

    // If it's the last slide, go back to the first one
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Display the current slide
    slides[slideIndex].style.display = "block";

    // Change slide every 3 seconds (adjust timing as needed)
    setTimeout(showSlide, 3000);
}

// Start the slideshow
showSlide();

//Contact Us Page
// Handle the form submission and validation
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form inputs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !email || !message) {
            showPopup("Please fill out all fields.", "error");
            return;
        }

        // Email format validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            showPopup("Please enter a valid email address.", "error");
            return;
        }

        // Show success message pop-up
        showPopup("Your message has been sent successfully!", "success");

        // Reset form after success
        setTimeout(() => {
            document.getElementById("contact-form").reset();
        }, 2000);
    });
});

// Function to show pop-up with OK button
function showPopup(message, type) {
    // Remove existing pop-ups (if any)
    const existingPopup = document.querySelector(".popup");
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create pop-up container
    const popup = document.createElement("div");
    popup.classList.add("popup", type);

    // Create message text
    const messageText = document.createElement("p");
    messageText.textContent = message;
    popup.appendChild(messageText);

    // Create OK button
    const okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.classList.add("popup-button");
    okButton.addEventListener("click", function () {
        popup.remove();
    });
    popup.appendChild(okButton);

    // Add pop-up to body
    document.body.appendChild(popup);
}

// Store Search Functionality
const stores = [
    { name: "Shop 1,Greenacres Shopping Center", location: "Gqeberha" },
    { name: "Shop 10,Canal Walk Shopping Center", location: "Cape Town" },
    { name: "Shop 12,Walmer Park Shpping Mall", location: "Gqeberha" },
    { name: "Shop 2, Eastgate Shopping Mall", location: "Johannesburg" },
    { name: "Shop 3,The Pavillion Shopping Center", location: "Durban" }
];

function displayStores(filteredStores) {
    const storeList = document.getElementById("storeList");
    storeList.innerHTML = ""; // Clear previous results
    filteredStores.forEach(store => {
        const li = document.createElement("li");
        li.className = "store-item";
        li.textContent = `${store.name} - ${store.location}`;
        storeList.appendChild(li);
    });
}

function handleSearch(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    console.log("Search Input: ", searchInput); // Debugging input

    const filteredStores = stores.filter(store => store.location.toLowerCase().includes(searchInput));
    console.log("Filtered Stores: ", filteredStores); // Debugging filtered results

    displayStores(filteredStores);
}

