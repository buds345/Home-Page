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
//Location

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                
                // Construct the Google Maps search URL with user's current location
                var mapUrl = "https://www.google.com/maps/search/jewellery+stores+near+" + lat + "," + lon;
                
                // Open the link in a new tab
                window.open(mapUrl, "_blank");
            }, function(error) {
                alert("Geolocation error: " + error.message);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
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

    if (filteredStores.length === 0) {
        // Show "No stores found" message
        const noResults = document.createElement("li");
        noResults.className = "store-item no-results";
        noResults.textContent = "Sorry we have no stores at the entered location.";
        storeList.appendChild(noResults);
        return;
    }

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

function showWatchDetails(name, price, stock, description) {
    // Create a modal-like display or alert box
    const details = `
        Watch Name: ${name}\n
        Price: ${price}\n
        Stock Status: ${stock}\n
        Description: ${description}
    `;
    alert(details);
}

document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get user input
    let rating = document.getElementById("rating").value;
    let reviewText = document.getElementById("reviewText").value;

    // Create new review element
    let newReview = document.createElement("div");
    newReview.classList.add("recommendation");
    newReview.style.backgroundColor = "#fff";
    newReview.style.padding = "15px";
    newReview.style.marginBottom = "10px";
    newReview.style.borderRadius = "6px";
    newReview.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    newReview.innerHTML = `<div class="stars" style="color: #ff9900; font-size: 1.2rem;">${rating}</div>
                           <span>&#8220;</span> ${reviewText} <span>&#8221;</span>`;

    // Add new review at the TOP of the list
    let reviewContainer = document.getElementById("all_recommendations");
    reviewContainer.insertBefore(newReview, reviewContainer.firstChild);

    // Show popup message
    let popup = document.getElementById("popupMessage");
    popup.style.display = "block";

    // Hide popup after 3 seconds
    setTimeout(function() {
        popup.style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("reviewForm").reset();
});
