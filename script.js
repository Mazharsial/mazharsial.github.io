
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // WhatsApp Form Logic
        document.getElementById('whatsappForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const phoneNumber = "923044335771"; // Your number without '+' or spaces

            // Create formatted text
            const text = `*New Portfolio Inquiry*%0A%0A*Name:* ${name}%0A*Message:* ${message}`;
            
            // Redirect to WhatsApp API
            const url = `https://wa.me/${phoneNumber}?text=${text}`;
            window.open(url, '_blank');
        });

        // Smooth Scrolling for Navbar Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    