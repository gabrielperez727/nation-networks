
const getData = function(place){
    document.getElementById("name").innerText='Test'
}



let tooltipVisible = false;

document.querySelectorAll(".allPath").forEach(e => {
    e.addEventListener("click", function(event) {
        const countryName = e.getAttribute("name"); // Get the country name
        const countryInfo = "Some information about " + countryName; // Replace with actual data

        // Set the content of the info box
        document.getElementById("countryName").innerText = countryName;
        document.getElementById("countryInfo").innerText = countryInfo;

        const infoBox = document.getElementById("infoBox");

        // Position the info box
        infoBox.style.top = (event.clientY + 10) + "px"; // Slightly below the mouse
        infoBox.style.left = (event.clientX + 10) + "px"; // Slightly to the right
        infoBox.style.display = 'block'; // Show the info box
    });

    e.addEventListener("mouseleave", function() {
        // Optionally, reset path color when the mouse leaves the path
        e.style.fill = "#ececec";
    });
});

// Hide info box when clicking outside
document.addEventListener("click", function(event) {
    const infoBox = document.getElementById("infoBox");
    if (!event.target.closest('.allPath') && !event.target.closest('#infoBox')) {
        infoBox.style.display = 'none'; // Hide the info box
    }
});


