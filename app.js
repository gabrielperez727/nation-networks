

let lastClickedPath = null; // Track the last clicked path



document.querySelectorAll(".allPath").forEach(e => {
    e.addEventListener("click", function(event) {
        // Reset the fill color of the last clicked path if it exists
        if (lastClickedPath) {
            lastClickedPath.style.fill = "#ececec"; // Reset to original color
        }

        const countryName = e.getAttribute("name"); // Get the country name
        const countryCode = e.id; 
        const countryInfo = countryName; // Replace with actual data

        // Set the content of the info box
        document.getElementById("countryName").innerText = countryName;
        document.getElementById("countryInfo").innerText = countryInfo;

        // Set the flag image
       
        document.getElementById("countryFlag").src = `./flags/${countryCode}.png`;

        const infoBox = document.getElementById("infoBox");

        // Position the info box
        infoBox.style.top = (event.clientY + 10) + "px"; // Slightly below the mouse
        infoBox.style.left = (event.clientX + 10) + "px"; // Slightly to the right
        infoBox.style.display = 'block'; // Show the info box

        // Change the fill color of the clicked path and save it
        e.style.fill = 'pink';
        lastClickedPath = e; // Update the last clicked path
    });
});

// Hide info box when clicking outside
document.addEventListener("click", function(event) {
    const infoBox = document.getElementById("infoBox");
    if (!event.target.closest('.allPath') && !event.target.closest('#infoBox')) {
        infoBox.style.display = 'none'; // Hide the info box
        
        // Reset the fill color of the last clicked path
        if (lastClickedPath) {
            lastClickedPath.style.fill = "#ececec"; // Reset to original color
            lastClickedPath = null; // Clear the reference
        }
    }
});
