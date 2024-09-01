// // Get the toggle button and the body element
// const themeToggle = document.getElementById('theme-toggle');
// const bodyElement = document.body;

// // Function to update the button text
// function updateButtonText(isDarkMode) {
//     themeToggle.textContent = isDarkMode ? 'Switch to Bright Mode' : 'Switch to Dark Mode';
// }

// // Check if the user has a preferred theme
// const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// if (userPrefersDark) {
//     bodyElement.classList.add('dark-mode');
//     updateButtonText(true);
// }

// // Toggle the theme on button click
// themeToggle.addEventListener('click', () => {
//     const isDarkMode = bodyElement.classList.toggle('dark-mode');
//     updateButtonText(isDarkMode);
    
//     // Save the user's preference in localStorage
//     localStorage.setItem('theme', isDarkMode ? 'dark' : 'bright');
// });

// // Apply the saved theme on page load
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//     const isDarkMode = savedTheme === 'dark';
//     bodyElement.classList.toggle('dark-mode', isDarkMode);
//     updateButtonText(isDarkMode);
// }

    
// function initMap() {
//     // Initialize the map centered around India
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 5, // Zoom level to cover most of India
//         center: {lat: 20.5937, lng: 78.9629} // Center of India (lat, lng)
//     });

//     // Delhi marker
//     var delhi = new google.maps.Marker({
//         position: {lat: 28.6139, lng: 77.2090},
//         map: map,
//         title: 'Delhi, India'
//     });

//     var delhiInfo = new google.maps.InfoWindow({
//         content: '<h3>Delhi</h3><p>Capital of India, known for its rich history and monuments.</p>'
//     });

//     delhi.addListener('click', function() {
//         delhiInfo.open(map, delhi);
//     });

//     // Mumbai marker
//     var mumbai = new google.maps.Marker({
//         position: {lat: 19.0760, lng: 72.8777},
//         map: map,
//         title: 'Mumbai, India'
//     });

//     var mumbaiInfo = new google.maps.InfoWindow({
//         content: '<h3>Mumbai</h3><p>The financial capital of India, famous for Bollywood.</p>'
//     });

//     mumbai.addListener('click', function() {
//         mumbaiInfo.open(map, mumbai);
//     });

//     // Jaipur marker
//     var jaipur = new google.maps.Marker({
//         position: {lat: 26.9124, lng: 75.7873},
//         map: map,
//         title: 'Jaipur, India'
//     });

//     var jaipurInfo = new google.maps.InfoWindow({
//         content: '<h3>Jaipur</h3><p>The Pink City, known for its palaces and forts.</p>'
//     });

//     jaipur.addListener('click', function() {
//         jaipurInfo.open(map, jaipur);
//     });

//     // Goa marker
//     var goa = new google.maps.Marker({
//         position: {lat: 15.2993, lng: 74.1240},
//         map: map,
//         title: 'Goa, India'
//     });

//     var goaInfo = new google.maps.InfoWindow({
//         content: '<h3>Goa</h3><p>Famous for its beaches, nightlife, and Portuguese heritage.</p>'
//     });

//     goa.addListener('click', function() {
//         goaInfo.open(map, goa);
//     });

//     // Kolkata marker
//     var kolkata = new google.maps.Marker({
//         position: {lat: 22.5726, lng: 88.3639},
//         map: map,
//         title: 'Kolkata, India'
//     });

//     var kolkataInfo = new google.maps.InfoWindow({
//         content: '<h3>Kolkata</h3><p>Known for its colonial architecture, art galleries, and cultural festivals.</p>'
//     });

//     kolkata.addListener('click', function() {
//         kolkataInfo.open(map, kolkata);
//     });

//     // Jammu & Kashmir marker
//     var jammuKashmir = new google.maps.Marker({
//         position: {lat: 34.0837, lng: 74.7973},
//         map: map,
//         title: 'Jammu & Kashmir, India'
//     });

//     var jammuKashmirInfo = new google.maps.InfoWindow({
//         content: '<h3>Jammu & Kashmir</h3><p>Famous for its stunning landscapes and beautiful valleys.</p>'
//     });

//     jammuKashmir.addListener('click', function() {
//         jammuKashmirInfo.open(map, jammuKashmir);
//     });

//     // Kerala marker
//     var kerala = new google.maps.Marker({
//         position: {lat: 10.8505, lng: 76.2711},
//         map: map,
//         title: 'Kerala, India'
//     });

//     var keralaInfo = new google.maps.InfoWindow({
//         content: '<h3>Kerala</h3><p>Known as "God\'s Own Country," famous for its backwaters and lush greenery.</p>'
//     });

//     kerala.addListener('click', function() {
//         keralaInfo.open(map, kerala);
//     });

//     // Odisha marker
//     var odisha = new google.maps.Marker({
//         position: {lat: 20.9517, lng: 85.0985},
//         map: map,
//         title: 'Odisha, India'
//     });

//     var odishaInfo = new google.maps.InfoWindow({
//         content: '<h3>Odisha</h3><p>Known for its ancient temples and cultural heritage.</p>'
//     });

//     odisha.addListener('click', function() {
//         odishaInfo.open(map, odisha);
//     });

//     // Gujarat marker
//     var gujarat = new google.maps.Marker({
//         position: {lat: 22.2587, lng: 71.1924},
//         map: map,
//         title: 'Gujarat, India'
//     });

//     var gujaratInfo = new google.maps.InfoWindow({
//         content: '<h3>Gujarat</h3><p>Known for its diverse culture, vibrant festivals, and historical sites.</p>'
//     });

//     gujarat.addListener('click', function() {
//         gujaratInfo.open(map, gujarat);
//     });

//     // Another Indian Place (e.g., Rishikesh)
//     var rishikesh = new google.maps.Marker({
//         position: {lat: 30.0869, lng: 78.2676},
//         map: map,
//         title: 'Rishikesh, India'
//     });

//     var rishikeshInfo = new google.maps.InfoWindow({
//         content: '<h3>Rishikesh</h3><p>Known as the Yoga Capital of the World and for its spiritual significance.</p>'
//     });

//     rishikesh.addListener('click', function() {
//         rishikeshInfo.open(map, rishikesh);
//     });

//     // Add markers for international destinations

//             // Dubai marker
//             var dubai = new google.maps.Marker({
//                 position: {lat: 25.276987, lng: 55.296249},
//                 map: map,
//                 title: 'Dubai, UAE'
//             });

//             var dubaiInfo = new google.maps.InfoWindow({
//                 content: '<h3>Dubai</h3><p>Known for its modern architecture, luxury shopping, and vibrant nightlife.</p>'
//             });

//             dubai.addListener('click', function() {
//                 dubaiInfo.open(map, dubai);
//             });

//             // Paris marker
//             var paris = new google.maps.Marker({
//                 position: {lat: 48.8566, lng: 2.3522},
//                 map: map,
//                 title: 'Paris, France'
//             });

//             var parisInfo = new google.maps.InfoWindow({
//                 content: '<h3>Paris</h3><p>The City of Light, famous for its art, fashion, and the iconic Eiffel Tower.</p>'
//             });

//             paris.addListener('click', function() {
//                 parisInfo.open(map, paris);
//             });

//             // New York marker
//             var newYork = new google.maps.Marker({
//                 position: {lat: 40.7128, lng: -74.0060},
//                 map: map,
//                 title: 'New York, USA'
//             });

//             var newYorkInfo = new google.maps.InfoWindow({
//                 content: '<h3>New York</h3><p>The Big Apple, known for its skyscrapers, Broadway, and Central Park.</p>'
//             });

//             newYork.addListener('click', function() {
//                 newYorkInfo.open
//                 newYorkInfo.open(map, newYork);
//             });

//             // London marker
//             var london = new google.maps.Marker({
//                 position: {lat: 51.5074, lng: -0.1278},
//                 map: map,
//                 title: 'London, UK'
//             });

//             var londonInfo = new google.maps.InfoWindow({
//                 content: '<h3>London</h3><p>Known for its history, culture, and landmarks like Big Ben and the London Eye.</p>'
//             });

//             london.addListener('click', function() {
//                 londonInfo.open(map, london);
//             });

//             // Bali marker
//             var bali = new google.maps.Marker({
//                 position: {lat: -8.3405, lng: 115.0920},
//                 map: map,
//                 title: 'Bali, Indonesia'
//             });

//             var baliInfo = new google.maps.InfoWindow({
//                 content: '<h3>Bali</h3><p>A tropical paradise known for its beaches, temples, and vibrant culture.</p>'
//             });

//             bali.addListener('click', function() {
//                 baliInfo.open(map, bali);
//             });

//             // Singapore marker
//             var singapore = new google.maps.Marker({
//                 position: {lat: 1.3521, lng: 103.8198},
//                 map: map,
//                 title: 'Singapore'
//             });

//             var singaporeInfo = new google.maps.InfoWindow({
//                 content: '<h3>Singapore</h3><p>A global financial hub known for its cleanliness, Marina Bay Sands, and the Merlion.</p>'
//             });

//             singapore.addListener('click', function() {
//                 singaporeInfo.open(map, singapore);
//             });

//             // Sydney marker
//             var sydney = new google.maps.Marker({
//                 position: {lat: -33.8688, lng: 151.2093},
//                 map: map,
//                 title: 'Sydney, Australia'
//             });

//             var sydneyInfo = new google.maps.InfoWindow({
//                 content: '<h3>Sydney</h3><p>Famous for the Sydney Opera House, Harbour Bridge, and beautiful beaches.</p>'
//             });

//             sydney.addListener('click', function() {
//                 sydneyInfo.open(map, sydney);
//             });

//             // Tokyo marker
//             var tokyo = new google.maps.Marker({
//                 position: {lat: 35.6762, lng: 139.6503},
//                 map: map,
//                 title: 'Tokyo, Japan'
//             });

//             var tokyoInfo = new google.maps.InfoWindow({
//                 content: '<h3>Tokyo</h3><p>A bustling metropolis known for its skyscrapers, shopping, and cherry blossoms.</p>'
//             });

//             tokyo.addListener('click', function() {
//                 tokyoInfo.open(map, tokyo);
//             });


    
// }

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 20.5937, lng: 78.9629}
    });

    var destinations = [
        {lat: 28.6139, lng: 77.2090, title: 'Delhi, India', content: '<h3>Delhi</h3><p>Capital of India, known for its rich history and monuments.</p>'},
        {lat: 19.0760, lng: 72.8777, title: 'Mumbai, India', content: '<h3>Mumbai</h3><p>The financial capital of India, famous for Bollywood.</p>'},
        {lat: 26.9124, lng: 75.7873, title: 'Jaipur, India', content: '<h3>Jaipur</h3><p>The Pink City, known for its palaces and forts.</p>'},
        {lat: 15.2993, lng: 74.1240, title: 'Goa, India', content: '<h3>Goa</h3><p>Famous for its beaches, nightlife, and Portuguese heritage.</p>'},
        {lat: 22.5726, lng: 88.3639, title: 'Kolkata, India', content: '<h3>Kolkata</h3><p>Known for its colonial architecture, art galleries, and cultural festivals.</p>'},
        {lat: 34.0837, lng: 74.7973, title: 'Jammu & Kashmir, India', content: '<h3>Jammu & Kashmir</h3><p>Famous for its stunning landscapes and beautiful valleys.</p>'},
        {lat: 10.8505, lng: 76.2711, title: 'Kerala, India', content: '<h3>Kerala</h3><p>Known as "God\'s Own Country," famous for its backwaters and lush greenery.</p>'},
        {lat: 20.9517, lng: 85.0985, title: 'Odisha, India', content: '<h3>Odisha</h3><p>Known for its ancient temples and cultural heritage.</p>'},
        {lat: 22.2587, lng: 71.1924, title: 'Gujarat, India', content: '<h3>Gujarat</h3><p>Known for its diverse culture, vibrant festivals, and historical sites.</p>'},
        {lat: 25.276987, lng: 55.296249, title: 'Dubai, UAE', content: '<h3>Dubai</h3><p>Known for its modern architecture, luxury shopping, and vibrant nightlife.</p>'},
        {lat: 48.8566, lng: 2.3522, title: 'Paris, France', content: '<h3>Paris</h3><p>The City of Light, famous for its art, fashion, and the iconic Eiffel Tower.</p>'},
        {lat: 40.7128, lng: -74.0060, title: 'New York, USA', content: '<h3>New York</h3><p>The Big Apple, known for its skyscrapers, Broadway, and Central Park.</p>'},
        {lat: 51.5074, lng: -0.1278, title: 'London, UK', content: '<h3>London</h3><p>Known for its history, culture, and landmarks like Big Ben and the London Eye.</p>'},
        {lat: -8.3405, lng: 115.0920, title: 'Bali, Indonesia', content: '<h3>Bali</h3><p>A tropical paradise known for its beaches, temples, and vibrant culture.</p>'},
        {lat: 1.3521, lng: 103.8198, title: 'Singapore', content: '<h3>Singapore</h3><p>A global financial hub known for its cleanliness, Marina Bay Sands, and the Merlion.</p>'},
        {lat: -33.8688, lng: 151.2093, title: 'Sydney, Australia', content: '<h3>Sydney</h3><p>Famous for the Sydney Opera House, Harbour Bridge, and beautiful beaches.</p>'},
        {lat: 35.6762, lng: 139.6503, title: 'Tokyo, Japan', content: '<h3>Tokyo</h3><p>A bustling metropolis known for its skyscrapers, shopping, and cherry blossoms.</p>'}
    ];

    destinations.forEach(function(destination) {
        var marker = new google.maps.Marker({
            position: {lat: destination.lat, lng: destination.lng},
            map: map,
            title: destination.title
        });

        var infoWindow = new google.maps.InfoWindow({
            content: destination.content
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}

// Toggle dark and bright mode
document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.createElement('span');
    moonIcon.className = 'moon-icon';
    moonIcon.innerHTML = '🌙';

    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('dark-mode')) {
            modeToggle.replaceChild(moonIcon, sunIcon);
        } else {
            modeToggle.replaceChild(sunIcon, moonIcon);
            sunIcon.classList.add('glow');
        }
    });
});
// discount pop_up
document.addEventListener('DOMContentLoaded', function() {
    // Show the popup after a slight delay
    setTimeout(function() {
        document.getElementById('dealsPopup').style.display = 'flex';
    }, 1000); // Adjust the delay as needed (1000 ms = 1 second)

    // Close the popup when the close button is clicked
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('dealsPopup').style.display = 'none';
    });

    // Close the popup when the user clicks anywhere outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('dealsPopup')) {
            document.getElementById('dealsPopup').style.display = 'none';
        }
    });
});