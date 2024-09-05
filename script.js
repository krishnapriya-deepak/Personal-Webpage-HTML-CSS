function showMessage() {
    alert("Hello, welcome to my page!");
}

// Change the background color when hovering over the profile picture
document.getElementById('profile-pic').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#ffebcd';
});

document.getElementById('profile-pic').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = 'AAB396';
});