// Get all the images
const images = document.querySelectorAll('.image-container img');

// Get the user profile div
const userProfile = document.querySelector('.user-profile');

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Display the user profile
    userProfile.style.display = 'block';
  });
});

const sub = document.getElementById('sub')

sub.addEventListener('click', ()=>{
    const pass = document.getElementById('pass').value
    if(pass == 'admin@2024'){
        window.location.href="https://ncert.nic.in/textbook.php?eeen1=1-10"
    }
})
