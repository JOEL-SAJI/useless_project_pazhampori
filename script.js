// Move to Aura Calculator Page after getting user info
function startAuraCalc() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    if (name && age) {
        document.getElementById('welcome-page').style.display = 'none';
        document.getElementById('aura-page').style.display = 'flex';
    } else {
        alert("Please enter your name and age!");
    }
}
const images = document.querySelectorAll('.image-container');
const centerX = 50; // Center of the container
const centerY = 10; // Center of the container
const radius = 25; // Radius for the rotation
const duration = 5000; // Duration of one complete rotation in milliseconds

let angle = 0; // Starting angle

function rotateImages() {
    angle = (angle + 2) % 360; // Increment angle for rotation
    images.forEach((img, index) => {
        const imageAngle = angle + (index * (360 / images.length)); // Spread out the images
        const x = centerX + radius * Math.cos((imageAngle * Math.PI) / 180); // Calculate X position
        const y = centerY + radius * Math.sin((imageAngle * Math.PI) / 180); // Calculate Y position

        img.style.left = `${x}px`; // Set the X position
        img.style.top = `${y}px`; // Set the Y position
        img.style.opacity = 1; // Make images visible
    });
}

// Call rotateImages every 16 milliseconds (~60 FPS)
setInterval(rotateImages, duration / 360);
// Calculate Aura Score based on selected activities
function calculateAura() {
    const checkboxes = document.querySelectorAll('.activity-list input[type="checkbox"]');
    let auraScore = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            auraScore += parseInt(checkbox.dataset.score);
        }
    });

    // Get the user's name from local storage
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const userName = user.name;
    
    // Display a personalized aura message based on score
    const resultDiv = document.getElementById('result');
    let auraMessage = '';
    if (auraScore > 20) {
        auraMessage = `Radiant, ${userName}! 🌞 Score: ${auraScore}. Keep shining!`;
    } else if (auraScore > 0) {
        auraMessage = `Chill vibes, ${userName}! 😊 Score: ${auraScore}.`;
    } else if (auraScore === 0) {
        auraMessage = `Neutral aura, ${userName}. 😐 Score: ${auraScore}.`;
    } else {
        auraMessage = `Funky vibes, ${userName}! 💀 Score: ${auraScore}.`;
    }
    resultDiv.textContent = auraMessage;
    
}