timeElement = document.querySelector("h1");

const displayTime = () => {
  now = spacetime();
  timeString = now.unixFmt('h:mm a');
  timeElement.textContent = timeString;
};

displayTime();
setInterval(displayTime, 1000);
