const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    window.location.href = 'home.html';
});

registerForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    window.location.href = 'home.html'; 
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uploadForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var formData = new FormData(this); // Get form data

        // Send form data to Django server using AJAX
        fetch('/upload_file/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest' // Add this header for Django to recognize AJAX requests
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Form submitted successfully');
                // Handle success, if needed
            } else {
                console.error('Error submitting form');
                // Handle error, if needed
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // Handle error, if needed
        });
    });
});
