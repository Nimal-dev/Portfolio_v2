// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Optional - Add a typing effect to the name
    const nameElement = document.querySelector('.name-text');
    const originalName = nameElement.textContent;
    
    // First clear the name text
    nameElement.textContent = '';
    
    // Set a delay before starting the animation (to sync with CSS animations)
    setTimeout(() => {
      // Type out each letter with a delay
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < originalName.length) {
          nameElement.textContent += originalName.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Speed of typing
    }, 700); // Wait for the initial animations
    
    // Add a subtle parallax effect on mouse move
    const heroSection = document.getElementById('hero');
    const profilePic = document.querySelector('.profilepic');
    
    heroSection.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      profilePic.style.transform = `rotateY(180deg) translate(${moveX}px, ${moveY}px)`;
      nameElement.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
    });
  });