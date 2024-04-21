const dateInput = document.getElementById('dateInput');
const searchBtn = document.getElementById('searchBtn');
const homeBtn = document.getElementById('homeBtn');
const refreshBtn = document.getElementById('refreshBtn');
const photosBtn = document.getElementById('photosBtn');
const videosBtn = document.getElementById('videosBtn');
const audiosBtn = document.getElementById('audiosBtn');
const photoGrid = document.getElementById('photoGrid');

// Sample data (replace with actual data from backend)
let mediaData = [
    { type: 'photo', id: 1, title: 'Photo 1', date: '2022-04-01', url: 'path/to/photo1.jpg' },
    { type: 'photo', id: 2, title: 'Photo 2', date: '2022-04-02', url: 'path/to/photo2.jpg' },
    { type: 'photo', id: 3, title: 'Photo 3', date: '2022-04-02', url: 'path/to/photo3.jpg' },
    { type: 'photo', id: 4, title: 'Photo 4', date: '2022-04-03', url: 'path/to/photo4.jpg' },
    { type: 'video', id: 1, title: 'Video 1', date: '2022-04-01', url: 'path/to/video1.mp4' },
    { type: 'video', id: 2, title: 'Video 2', date: '2022-04-02', url: 'path/to/video2.mp4' },
    { type: 'audio', id: 1, title: 'Audio 1', date: '2022-04-01', url: 'path/to/audio1.mp3' },
    { type: 'audio', id: 2, title: 'Audio 2', date: '2022-04-02', url: 'path/to/audio2.mp3' },
];

// Function to display media based on type (photo, video, audio)
function displayMediaByType(type) {
    const filteredMedia = mediaData.filter(item => item.type === type);
    displayMedia(filteredMedia);
}

// Function to display media in the grid
function displayMedia(media) {
    photoGrid.innerHTML = '';
    media.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('media-card');
        if (item.type === 'photo') {
            card.innerHTML = `<img src="${item.url}" alt="${item.title}"><p>${item.title}</p>`;
        } else if (item.type === 'video') {
            card.innerHTML = `<video controls><source src="${item.url}" type="video/mp4">Your browser does not support the video tag.</video><p>${item.title}</p>`;
        } else if (item.type === 'audio') {
            card.innerHTML = `<audio controls><source src="${item.url}" type="audio/mpeg">Your browser does not support the audio tag.</audio><p>${item.title}</p>`;
        }
        photoGrid.appendChild(card);
    });
}

// Initial display of all media
displayMedia(mediaData);

// Search functionality based on selected date
searchBtn.addEventListener('click', function () {
    const selectedDate = dateInput.value;
    if (selectedDate !== '') {
        displayMediaByDate(selectedDate);
    }
});

// Refresh functionality to display all media
refreshBtn.addEventListener('click', function () {
    displayMedia(mediaData);
});

// Home button functionality to display all media
homeBtn.addEventListener('click', function () {
    displayMedia(mediaData);
});

// Photos button functionality to display only photos
photosBtn.addEventListener('click', function () {
    displayMediaByType('photo');
});

// Videos button functionality to display only videos
videosBtn.addEventListener('click', function () {
    displayMediaByType('video');
});

// Audios button functionality to display only audios
audiosBtn.addEventListener('click', function () {
    displayMediaByType('audio');
});
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Check username and password
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Example validation (replace with your actual validation logic)
        if (username === 'PritiSaurabhGupta' && password === 'Pritu123143') {
            window.location.href = 'success.html'; // Redirect to success page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
