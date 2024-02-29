document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start-button").addEventListener("click", function () {
    document.body.classList.add("fade-out");

    setTimeout(function () {
      window.location.href = "hackathon.html";
    }, 1000); 
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const clickImage = document.getElementById("click-image");

  // startButton.addEventListener("click", function () {
  //   clickImage.src = "images/click_image.png"; 
  // });
});


  
  document.body.classList.add("loaded");

  fetch('content.json') 
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to load dynamic content');
      }
    })
    .then((data) => {
      document.getElementById('dynamic-content').innerHTML = data.content;
    })
    .catch((error) => {
      console.error(error);
    });
