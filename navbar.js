/**
 * Retrieves navbar html file, reads it as text, and place it inside
 * the navbar container of the give page.
 * 
 * This avoids repeating the code in multiple pages.
 */

fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(err => console.error('Navbar failed to load!!!', err));

