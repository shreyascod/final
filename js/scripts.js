// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if there's a saved theme preference in localStorage (optional)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleButton.textContent = 'Switch to Light Mode';
} else {
    themeToggleButton.textContent = 'Switch to Dark Mode';
}

if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        // Toggle the dark mode class on the body
        body.classList.toggle('dark-mode');

        // Update button text based on the current theme
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Switch to Light Mode';
            // Save the theme preference in localStorage
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleButton.textContent = 'Switch to Dark Mode';
            // Remove the theme preference from localStorage
            localStorage.removeItem('theme');
        }
    });
}


// Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            const email = form.querySelector('input[type="email"]');
            const password = form.querySelector('input[type="password"]');
            
            if (email && password && (!email.value || !password.value)) {
                event.preventDefault();
                alert('Please fill in all fields');
            }
        });
    });
});

// Handle Story Creation
const storyForm = document.getElementById('storyForm');
const messageDiv = document.getElementById('message');

if (storyForm) {
    storyForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = event.target.title.value;
        const author = event.target.author.value;
        const description = event.target.description.value;

        // Simulate saving the story (In a real application, you would send this data to a backend server)
        messageDiv.textContent = 'Story submitted successfully!';
        storyForm.reset();

        // Optionally, you could redirect to a page displaying the list of stories
        // window.location.href = 'stories.html';
    });
}
