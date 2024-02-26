document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");
  if (registerButton) {
    registerButton.addEventListener("click", function () {
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSeWxHu_aL7J_CAGwXNn3s5YOO1M0DAmjml87xDj3pF8iA-fcg/viewform";
    });
  }
  document.body.classList.add("loaded");
});

function showDetails(stepNumber) {
  let detailsContainer = document.getElementById("details-container");
  let details;

  switch (stepNumber) {
    case 1:
      details = "Registration Ends at 12/03/2024.";
      detailsContainer.innerHTML = `
        <div class='step-with-image'>
          <img src='images/register1_image.jpg' alt='Registration Image' class='background-image' />
          <p class='step-text' style='color:#4b0082;text-shadow:0 0 10px #fc6c85,0 0 20px #fc6c85;font-size: 40px;'>${details}</p>
        </div>`;
      break;
    case 2:
      details = "Assessments will be conducted from 13/03/2024 to 15/03/2024";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/Teamsmall_image.jpg' alt='Team Image' class='background-image' />
        <p class='step-text' style='color:#4b0082;text-shadow:0 0 10px #fc6c85,0 0 20px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 3:
      details = "Team formation based on your assessment";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/teamwork_image.jpg' alt='Workshop Image' class='background-image' />
        <p class='step-text'style='color:#4b0082;text-shadow:0 0 10px #fc6c85,0 0 20px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 4:
      details =
        "Problem statement will be provided to individual team and they work on that basis";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/project_image.png' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color:#4b0082;text-shadow:0 0 10px #fc6c85,0 0 20px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 5:
      details = "Evaluation and Awards will be given at the END";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/awards_image.jpg' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color:#4b0082;text-shadow:0 0 10px #fc6c85,0 0 20px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    default:
      details = "Details not available.";
      detailsContainer.innerHTML = `<p style='color: green;'>${details}</p>`;
  }

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

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

let countDownDate = new Date("March 27, 2024 13:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
  let hours = formatTime(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = formatTime(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  let seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  let duration = 5000;
  let scrollInterval = 60;

  

  function autoScroll() {
    let totalHeight = document.body.scrollHeight;
    window.scrollTo({
      top: totalHeight,
      behavior: "smooth",
    });

    setTimeout(function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, duration);
  }

  autoScroll();
  setInterval(autoScroll, duration + autoScroll);
});
