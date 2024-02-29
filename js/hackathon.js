document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");
  if (registerButton) {
    registerButton.addEventListener("click", function () {
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSeWxHu_aL7J_CAGwXNn3s5YOO1M0DAmjml87xDj3pF8iA-fcg/viewform";
    });
  }
  document.body.classList.add("loaded");
  const hash = window.location.hash.slice(1);
  if (hash) {
    const stepNumber = parseInt(hash);
    if (!isNaN(stepNumber)) {
      showDetails(stepNumber);
    }
  }
  let x;
});

function showDetails(stepNumber) {
  let detailsContainer = document.getElementById("details-container");
  let details;

  switch (stepNumber) {
    case 1:
      details = "Registration Ends at 12/03/2024.";
      detailsContainer.innerHTML = `
        <div class='step-with-image'>
          <img src='images/Registersmall_image.jpg' alt='Registration Image' class='background-image' />
          <p class='step-text' style='color:#4b0082;text-shadow:0 0 10px #fc6c85;font-size: 40px;'>${details}</p>
        </div>`;
      break;
    case 2:
      details = "Assessments will be conducted from 13/03/2024 to 15/03/2024";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/Teamsmall_image.jpg' alt='Team Image' class='background-image' />
        <p class='step-text' style='color:#4b0082;text-shadow:0 0 10px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 3:
      details = "Team formation based on your assessment";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/teamwork_image.jpg' alt='Workshop Image' class='background-image' />
        <p class='step-text'style='color:#4b0082;text-shadow:0 0 10px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 4:
      details = "Work on the basis of problem statement";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/project_image.png' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color:#4b0082;text-shadow:0 0 10px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 5:
      details = "Awards will be given on the performance basis.";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/awards_image.jpg' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color:#4b0082;text-shadow:0 0 10px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    default:
      details = "Details not available.";
      detailsContainer.innerHTML = `<p style='color: green;'>${details}</p>`;
  }
  document.location.hash = stepNumber;

  document.querySelectorAll(".step").forEach((step) => {
    step.classList.remove("active");
  });

  const clickedStep = document.querySelector(
    `.step[data-step="${stepNumber}"]`
  );
  if (clickedStep) {
    clickedStep.classList.add("active");
  }
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const targetDate = new Date("March 27, 2024 13:00:00").getTime();

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  const updateCountdown = () => {
    const now = new Date().getTime(),
      distance = targetDate - now;

    const days = Math.floor(distance / day),
      hours = Math.floor((distance % day) / hour),
      minutes = Math.floor((distance % hour) / minute),
      seconds = Math.floor((distance % minute) / second);

    // Output the countdown data
    document.getElementById("days").innerText = formatNumber(days);
    document.getElementById("hours").innerText = formatNumber(hours);
    document.getElementById("minutes").innerText = formatNumber(minutes);
    document.getElementById("seconds").innerText = formatNumber(seconds);

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "STARTED";
    }
  };

  const x = setInterval(updateCountdown, 1000);
  updateCountdown();
})();
