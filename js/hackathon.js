document.addEventListener("DOMContentLoaded", function () {
  // Add click event listener to the Register Now button
  const registerButton = document.getElementById("registerButton");
  if (registerButton) {
    registerButton.addEventListener("click", function () {
      // Redirect to the specified link
      window.location.href = "https://forms.gle/Grgoa4jVEWgjNFfC7";
    });
  }

  // Add the loaded class to the body to trigger the fade-in effect
  document.body.classList.add("loaded");
});
// Add click event listener to the Register Now button
const registerButton = document.getElementById("registerButton");
if (registerButton) {
  registerButton.addEventListener("click", function () {
    // Redirect to the specified link
    window.location.href = "https://forms.gle/Grgoa4jVEWgjNFfC7";
  });
}

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
        <p class='step-text' style='color: #000;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 3:
      details = "Workshop and Mentoring Sessions at 8:00 pm.";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/Worksmall_image.jpg' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color: #000;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 4:
      details = "Project Submission starts at 10:00 am.";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/Worksmall_image.jpg' alt='Workshop Image' class='background-image' />
        <p class='step-text' style='color: #000;font-size: 40px;'>${details}</p>
      </div>`;
      break;
    case 5:
      details =
        "Judging and Evaluation begin at 11:00 am followed by the Awards at 12:00 pm.";
      detailsContainer.innerHTML = `
      <div class='step-with-image'>
        <img src='images/Worksmall_image.jpg' alt='Workshop Image' class='background-image' />
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

  // Add active class to the clicked step
  const clickedStep = document.querySelector(
    `.step[data-step="${stepNumber}"]`
  );
  if (clickedStep) {
    clickedStep.classList.add("active");
  }
}
