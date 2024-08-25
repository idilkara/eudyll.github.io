const starsContainer = document.querySelector('.stars');

const maxStars = 50; // Maximum number of stars on the screen at once
let starCount = 0;

function createStar() {

    if (starCount >= maxStars) return; // Stop creating new stars if the limit is reached


    const star = document.createElement('div');
    star.classList.add('star');
    
    // Randomize the star's position anywhere within the viewport
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    
    // Randomize the animation duration and delay for the fade effect
    star.style.animationDuration = `${2 + Math.random() * 4}s`;  // Duration between 2 to 6 seconds
    star.style.animationDelay = `${Math.random() * 3}s`;  // Delay up to 3 seconds
    
    starsContainer.appendChild(star);
    starCount++;

    // Remove the star after the animation completes
    star.addEventListener('animationend', () => {
        star.remove();
        starCount--; // Decrease the count when a star is removed
    });
}

// Increase the frequency of star creation
setInterval(createStar, 50);
