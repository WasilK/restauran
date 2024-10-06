// Handle reservation form submission
document.getElementById('reservationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    
    alert(`Reservation made for ${name} on ${date} at ${time} for ${guests} guests! A confirmation will be sent to ${email}.`);
});

// Handle contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been sent. We will reply to ${email} shortly.`);
});

// Handle feedback form submission
document.getElementById('feedbackForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('feedbackName').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
    
    alert(`Thank you, ${name}! Your rating: ${rating}/5\nComments: ${comments}`);
});

// Handle newsletter subscription form submission
document.getElementById('newsletterForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    
    alert(`Thank you for subscribing with ${email}!`);
});

// Handle online order form submission
document.getElementById('orderForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('orderName').value;
    const item = document.getElementById('orderItem').value;
    const quantity = document.getElementById('orderQuantity').value;
    
    alert(`Order placed: ${quantity} x ${item} for ${name}. Thank you!`);
});
