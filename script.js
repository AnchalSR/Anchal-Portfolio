// Always scroll to top on page load
window.addEventListener('load', function() {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 10);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typing animation - completely rewritten
const roles = [
  "Web Developer",
  "Machine Learning Engineer", 
  "Problem Solver",
  "Video Editor"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function startTyping() {
  const typingElement = document.getElementById('typing-text');
  
  if (!typingElement) {
    return;
  }
  
  function type() {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting) {
      // Typing phase
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex >= currentRole.length) {
        // Wait before deleting
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
        return;
      }
      
      setTimeout(type, 100);
    } else {
      // Deleting phase
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex <= 0) {
        // Move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
        return;
      }
      
      setTimeout(type, 50);
    }
  }
  
  // Start the typing
  type();
}

// Start when page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded, starting typing in 1 second...");
  setTimeout(startTyping, 1000);
});

// Also try on window load as backup
window.addEventListener('load', function() {
  console.log("Window loaded, checking if typing started...");
  const typingElement = document.getElementById('typing-text');
  if (typingElement && !typingElement.textContent) {
    console.log("Starting typing from window load...");
    setTimeout(startTyping, 1000);
  }
});
