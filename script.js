// Simulated hotel data (replace this with a real API)
const hotels = [
    {
        name: "Hotel A",
        destination: "New York",
        checkIn: "2023-09-10",
        checkOut: "2023-09-15",
        guests: 2,
        rating: 4,
        propertyClass: "luxury",
        price: 250,
    },
    // Add more hotel objects here...
];

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const resultsList = document.getElementById("results-list");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input from the form
        const destination = document.getElementById("destination").value;
        const checkIn = document.getElementById("check-in").value;
        const checkOut = document.getElementById("check-out").value;
        const guests = document.getElementById("guests").value;
        const rating = document.getElementById("rating").value;
        const propertyClass = document.getElementById("property-class").value;

        // Simulated API call (replace this with a real API call)
        const filteredHotels = hotels.filter((hotel) => {
            return (
                (destination === "" || hotel.destination.toLowerCase().includes(destination.toLowerCase())) &&
                (checkIn === "" || hotel.checkIn === checkIn) &&
                (checkOut === "" || hotel.checkOut === checkOut) &&
                (guests === "" || hotel.guests >= guests) &&
                (rating === "" || hotel.rating >= rating) &&
                (propertyClass === "" || hotel.propertyClass === propertyClass)
            );
        });

        // Display search results
        displayResults(filteredHotels);
    });

    function displayResults(results) {
        resultsList.innerHTML = ""; // Clear previous results

        if (results.length === 0) {
            resultsList.innerHTML = "<p>No hotels found.</p>";
        } else {
            results.forEach((hotel) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h3>${hotel.name}</h3>
                    <p>Destination: ${hotel.destination}</p>
                    <p>Check-in: ${hotel.checkIn}</p>
                    <p>Check-out: ${hotel.checkOut}</p>
                    <p>Guests: ${hotel.guests}</p>
                    <p>Rating: ${hotel.rating} stars</p>
                    <p>Property Class: ${hotel.propertyClass}</p>
                    <p>Price: $${hotel.price} per night</p>
                `;
                resultsList.appendChild(listItem);
            });
        }
    }
});
