// Simple contact form submission (client-side only)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message! (This form is not connected to a server)');
});
