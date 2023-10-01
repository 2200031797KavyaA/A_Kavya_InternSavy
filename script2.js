const targetDate = new Date(2023, 11, 31, 23, 59, 59).getTime();
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();