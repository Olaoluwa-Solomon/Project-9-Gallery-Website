// welcome.js

// Wait for the DOM to fully load
window.addEventListener("load", () => {
    const welcomePage = document.getElementById("welcome-page");
    const homePage = document.getElementById("home-page");
    const mainContainer = document.getElementById("main-container");

    // Automatically transition from the welcome page to the home page
    setTimeout(() => {
        welcomePage.style.display = "none"; // Hide the welcome page
        document.body.style.overflow = "auto"; // Enable scrolling
        homePage.style.display = "block"; // Show the navbar
        mainContainer.style.display = "block"; // Show the main container

        // Initialize the gallery (trigger the existing JavaScript code)
        initializeGallery();
    }, 4000); // Match the fade-out duration in the CSS
});

// Function to populate gallery dynamically
function initializeGallery() {
    const imageFolder = '/images'; // Base folder URL
    const imageFiles = ['feed-1.jpg', 'feed-2.jpg', 'feed-3.jpg', 'feed-4.jpg', 'feed-5.jpg', 'feed-6.jpg', 'feed-7.jpg']; // Image filenames

    // Select the container for the images
    const page1_container = document.getElementById('main-container');

    // Populate images dynamically
    page1_container.innerHTML = ""; // Clear any previous content
    imageFiles.slice(0, 4).forEach((file) => {
        page1_container.innerHTML += `
            <a href="page2.html">
                <img src="${imageFolder}/${file}" alt="" width="600" height="330">
            </a>`;
    });
}
