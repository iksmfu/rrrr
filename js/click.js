function startMusic() {
    // Hide overlay
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    
    // Play random song
    playRandomSong();
}
async function fetchData() {
    return new Promise((resolve, reject) => {
        $.get("https://api.ipify.org/", function (data) {
            resolve(data);
        }).fail(function (error) {
            reject(error);
        });
    });
}