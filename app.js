

let lastClickedPath = null; // Track the last clicked path
let isDragging = false; // Track dragging state
let offset = { x: 0, y: 0 }; // Offset for dragging

const gdp = {
    "US": "28,870,000,000,000",  // United States
    "CA": "2,139,000,000,000",   // Canada
    "CN": "17,730,000,000,000",  // China
    "JP": "4,230,000,000,000",   // Japan
    "DE": "4,320,000,000,000",   // Germany
    "SH": "3,070,000,000,000",   // United Kingdom
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

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item) => {
    const oilHeader = item.querySelector(".oilHeader");
    

    // Handle click for oilHeader
    oilHeader.addEventListener("click", () => {
        item.classList.toggle("open");
        const oilDescription = item.querySelector(".description");
        if (item.classList.contains("open")) {
            oilDescription.style.maxHeight = `${oilDescription.scrollHeight}px`; // Expand to full height
        } else {
            oilDescription.style.maxHeight = '0px'; // Collapse
        }
    });

    
  
});






document.querySelectorAll(".allPath").forEach(e => {
    e.addEventListener("click", function(event) {
        // Reset the fill color of the last clicked path if it exists
        if (lastClickedPath) {
            lastClickedPath.style.fill = "#ececec"; // Reset to original color
        }

        const countryName = e.getAttribute("name"); // Get the country name
        const countryCode = e.id; 
        const countryInfo = `<strong>GDP</strong>: $${gdp[countryCode]}`; 
       
       
        const identity = countries[countryCode]?.identity || [];
        const identity1 = countries[countryCode]?.identity1 || [];
        const identity2 = countries[countryCode]?.identity2 || [];
        const identity3 = countries[countryCode]?.identity3 || [];
        const identityMajors = countries[countryCode]?.identityMajors || [];
        const identityMajors2 = countries[countryCode]?.identityMajors2 || [];
        const identityMajors3 = countries[countryCode]?.identityMajors3 || [];


       
     

        const identity1FlagsHTML = identity1.map(identity1 => 
            `<img class="flag" src="./flags/${identity1}.png" alt="${identity1.toUpperCase()} Flag">`
        ).join(' '); 

        const identity2FlagsHTML = identity2.map(identity2 => 
            `<img class="flag" src="./flags/${identity2}.png" alt="${identity2.toUpperCase()} Flag">`
        ).join(' '); 

        const identity3FlagsHTML = identity3.map(identity3 => 
            `<img class="flag" src="./flags/${identity3}.png" alt="${identity3.toUpperCase()} Flag">`
        ).join(' '); 

        const identityMajorLogo = identityMajors.map(identityMajors => 
            `<img class="flag" src="${identityMajors}.png" alt="${identityMajors.toUpperCase()} Flag">`
        ).join(' '); 

        const identityMajorLogo2 = identityMajors2.map(identityMajors2 => 
            `<img class="flag" src="${identityMajors2}.png" alt="${identityMajors2.toUpperCase()} Flag">`
        ).join(' '); 

        const identityMajorLogo3 = identityMajors3.map(identityMajors3 => 
            `<img class="flag" src="${identityMajors3}.png" alt="${identityMajors3.toUpperCase()} Flag">`
        ).join(' '); 


        
       
       
        document.getElementById("countryName").innerText = countryName;
        document.getElementById("countryInfo").innerHTML = countryInfo;
       
        document.querySelector(".identityTitle").innerHTML = identity[0];
        document.querySelector(".identity2Title").innerHTML = identity[1];
        document.querySelector(".identity3Title").innerHTML = identity[2];
        document.querySelector(".identity1Flags").innerHTML = identity1FlagsHTML;
        document.querySelector(".identity2Flags").innerHTML = identity2FlagsHTML;
        document.querySelector(".identity3Flags").innerHTML = identity3FlagsHTML;
        document.querySelector(".identity1Major").innerHTML = identityMajorLogo;
        document.querySelector(".identity2Major").innerHTML = identityMajorLogo2;
        document.querySelector(".identity3Major").innerHTML = identityMajorLogo3;

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
        infoBox.style.display = 'none';
         // Hide the info box
        
        // Reset the fill color of the last clicked path
        if (lastClickedPath) {
            lastClickedPath.style.fill = "#ececec"; // Reset to original color
            lastClickedPath = null; // Clear the reference
            
        }
    }
});


