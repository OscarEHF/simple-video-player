const $video = document.querySelector('#video');
const $playButton = document.querySelector('#play');
const $pauseButton = document.querySelector('#pause');
const $backwardButton = document.querySelector('#backward');
const $forwardButton = document.querySelector('#forward');
const $progressBar = document.querySelector('#progress-bar');

$playButton.addEventListener('click', handlePlay);
$pauseButton.addEventListener('click', handlePause);
$backwardButton.addEventListener('click', handleBackward);
$forwardButton.addEventListener('click', handleForward);
$video.addEventListener('loadeddata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progressBar.addEventListener('input', handleInput);


function handlePlay() {
  $video.play();
  $playButton.hidden = true;
  $pauseButton.hidden = false;
}

function handlePause() {
  $video.pause();
  $pauseButton.hidden = true;
  $playButton.hidden = false;
}

function handleForward() {
  $video.currentTime += 9;
}

function handleBackward() {
  $video.currentTime -= 11;
}

function handleLoaded() {
  $progressBar.max = $video.duration;
}

function handleTimeUpdate() {
  $progressBar.value = $video.currentTime;
}

function handleInput() {
  $video.currentTime = $progressBar.value;
}
