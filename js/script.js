document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate form (basic check)
            const inputs = form.querySelectorAll('input[required]');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value) valid = false;
            });

            if (valid) {
                // Simulate API call
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                btn.innerText = 'Enviando...';
                btn.disabled = true;

                setTimeout(() => {
                    // Hide form and show success message
                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Optional: Reset form
                    form.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 1000);
            }
        });
    }

    // Mobile Navbar Toggle (Placeholder for future implementation if needed)
    // const hamburger = document.querySelector('.hamburger');
    // ...
});
