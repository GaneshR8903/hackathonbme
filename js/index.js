document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start-button").addEventListener("click", function () {
    // Add fade-out class to initiate the animation
    document.body.classList.add("fade-out");

    setTimeout(function () {
      var img = new Image();
      img.onload = function() {
        console.log('Image loaded successfully');
        // Add the image to the body
        img.style.position = "fixed"; // Ensure the image is fixed in the viewport
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.zIndex = "9999"; // Ensure the image is on top of other elements
        document.body.appendChild(img);
        
        // Redirect to 'hackathon.html' after the image displays for 2 seconds
        setTimeout(function () {
          window.location.href = "hackathon.html";
        }, 2000);
      };
      img.src = "images/ecg_image.gif";
    }, 1000); // Adjust the timing if needed
  });

  // Add the loaded class to the body to trigger the fade-in effect
  document.body.classList.add("loaded");


  // Fetch and load dynamic content after the page has loaded
  fetch('content.json') // Adjust the path or URL to your dynamic content
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to load dynamic content');
      }
    })
    .then((data) => {
      // Process and display dynamic content on the page
      document.getElementById('dynamic-content').innerHTML = data.content;
    })
    .catch((error) => {
      console.error(error);
    });
});
