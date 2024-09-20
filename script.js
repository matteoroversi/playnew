// Updated list of random phrases to choose from
const phrases = [
    "is not an agency.",
    "is not a consultancy.",
    "is not part of Cosmico.",
    "is you.",
    "is really new?",
    "is only in your head.",
    "is not working.",
    "has no clients.",
    "has no employees.",
    "is not involved in Strategy & Consulting.",
    "does not focus on Branding & Positioning.",
    "is not concerned with Product & Service Design.",
    "does not handle Development.",
    "does not specialize in Editorial Content.",
    "stays away from Social Content.",
    "has no role in Advertising & Activations.",
    "does not engage in Media & Influencers."
];

// Get the refresh counter from localStorage
let refreshCounter = localStorage.getItem('refreshCounter') || 0;
refreshCounter = parseInt(refreshCounter, 10);

// Increment the refresh counter and store it back in localStorage
refreshCounter++;
localStorage.setItem('refreshCounter', refreshCounter);

// Function to select a random phrase from the list
function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

// Set the phrase to either be the prank or a random phrase
let specialPhrase;
if (refreshCounter % 5 === 0) {
    // Modify prank text with 🔈 indicator, underlining, and no bold
    specialPhrase = "<a href='#' id='prank-link'>is a PRANK 🔈!</a>"; // Prank every 5th refresh
} else {
    specialPhrase = getRandomPhrase();
}

// Set the selected phrase and insert it into the <p> element
const randomTextElement = document.getElementById('random-text');
randomTextElement.innerHTML = specialPhrase; // Use innerHTML to allow for link

// Function to create and position an emoji randomly on the screen
function createRandomEmoji() {
    const emojiContainer = document.getElementById('emoji-container');
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = '😂';
    
    // Set random positions for the emoji
    const randomX = Math.random() * (window.innerWidth - 100);  // Adjust for emoji width
    const randomY = Math.random() * (window.innerHeight - 100); // Adjust for emoji height

    // Apply the random positions
    emoji.style.top = `${randomY}px`;
    emoji.style.left = `${randomX}px`;

    // Append the emoji to the container
    emojiContainer.appendChild(emoji);
}

// Function to make emojis appear one after another rapidly
function createEmojiWave() {
    for (let i = 0; i < 50; i++) {
        setTimeout(createRandomEmoji, i * 50); // 50ms delay between each emoji
    }
}

// Function to play the fart sound
function playFartSound() {
    const fartSound = document.getElementById('fart-sound');

    // Play sound when the link is clicked
    fartSound.play().then(() => {
        console.log('Fart sound played successfully.');
    }).catch(error => {
        console.log('Fart sound could not play:', error);
    });
}

// Function to trigger both the emoji wave and fart sound
function triggerPrank() {
    createEmojiWave();
    playFartSound(); // Play sound with emojis
}

// Add event listener to the prank link to start animation and sound on click
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'prank-link') {
        event.preventDefault(); // Prevent default behavior of the link
        triggerPrank(); // Trigger emoji wave and sound
    }
});

// Function to reload the page when the button is clicked
function refreshPage() {
    location.reload(); // Reload the page
}