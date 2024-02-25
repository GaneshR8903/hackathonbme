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
      details =
        "Registration starts at 1:00 pm followed by the Opening Ceremony at 2:00 pm.";
      detailsContainer.innerHTML = `
        <div class='step-with-image'>
          <img src='images/Registersmall_image.jpg' alt='Registration Image' class='background-image' />
          <p class='step-text' style='color: #000;font-size: 40px;'>${details}</p>
        </div>`;
      break;
    case 2:
      details = "Team Formation and Idea Pitches start at 3:00 pm.";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/Teamsmall_image.jpg' alt='Team Image' class='background-image' />
        <p class='step-text' style='color:#FFFF;text-shadow:0 0 10px #fc6c85;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 3:
      details = "Workshop and Mentoring Sessions at 8:00 pm.";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/teamwork_image.jpg' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color: #000;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 4:
      details = "Project Submission starts at 10:00 am.";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/project_image.png' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color: #000;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 5:
      details =
        "Judging and Evaluation begin at 11:00 am followed by the Awards at 12:00 pm.";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/awards_image.jpg' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color: #000;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    default:
      details = "Details not available.";
      detailsContainer.innerHTML = `<p style='color: green;'>${details}</p>`;
  }

  // Remove active class from all steps
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
