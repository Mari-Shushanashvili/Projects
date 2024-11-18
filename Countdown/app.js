document.addEventListener("DOMContentLoaded", function() {
    // Set the target date for Christmas
    const targetDate = new Date("December 25, 2024 00:00:00").getTime();

    // Update every 1 second
    const countdownInterval = setInterval(function() {
        const currentDate = new Date().getTime();

        // Calculate time remaining
        const timeLeft = targetDate - currentDate;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the countdown on the page
        document.getElementById("days").textContent = days < 10 ? "0" + days : days;
        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

        // When finished
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<h2>It's Christmas!</h2>";
        }
    }, 1000);
});
