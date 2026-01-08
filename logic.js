const video = document.getElementById("videoPlayer");

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}
