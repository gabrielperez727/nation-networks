

let lastClickedPath = null; // Track the last clicked path
let isDragging = false; // Track dragging state
let offset = { x: 0, y: 0 }; // Offset for dragging

const gdp = {
    "US": "28,870,000,000,000",  // United States
    "CA": "2,139,000,000,000",   // Canada
    "CN": "17,730,000,000,000",  // China
    "JP": "4,230,000,000,000",   // Japan
    "DE": "4,320,000,000,000",   // Germany
    "GB": "3,070,000,000,000",   // United Kingdom
    "FR": "2,780,000,000,000",   // France
    "IN": "3,730,000,000,000",   // India
    "BR": "2,055,000,000,000",   // Brazil
    "IT": "2,000,000,000,000",   // Italy
    "AU": "1,490,000,000,000",   // Australia
    "MX": "1,240,000,000,000",   // Mexico
    "RU": "1,840,000,000,000",   // Russia
    "ES": "1,420,000,000,000",   // Spain
    "KR": "1,800,000,000,000",   // South Korea
    "ZA": "399,000,000,000"      // South Africa
};





document.querySelectorAll(".allPath").forEach(e => {
    e.addEventListener("click", function(event) {
        // Reset the fill color of the last clicked path if it exists
        if (lastClickedPath) {
            lastClickedPath.style.fill = "#ececec"; // Reset to original color
        }

        const countryName = e.getAttribute("name"); // Get the country name
        const countryCode = e.id; 
        const countryInfo = `<strong>GDP</strong>: $${gdp[countryCode]}`; // Replace with actual data
        

        // Set the content of the info box
        document.getElementById("countryName").innerText = countryName;
        document.getElementById("countryInfo").innerHTML = countryInfo;

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

const infoBox = document.getElementById("infoBox");

        infoBox.addEventListener("mousedown", function(event) {
            isDragging = true;
            offset.x = event.clientX - infoBox.getBoundingClientRect().left;
            offset.y = event.clientY - infoBox.getBoundingClientRect().top;
            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        });

        function mouseMoveHandler(event) {
            if (isDragging) {
                infoBox.style.left = (event.clientX - offset.x) + "px";
                infoBox.style.top = (event.clientY - offset.y) + "px";
            }
        }

        function mouseUpHandler() {
            isDragging = false;
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        }

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


