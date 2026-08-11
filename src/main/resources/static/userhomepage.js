document.addEventListener('DOMContentLoaded', function () {
  // Retrieve and display the username from localStorage
  var username = localStorage.getItem("name");
  if (username) {
      document.getElementById("profileLink").textContent = username;
  }

  // Handle navigation links
  document.getElementById("moreEventsButton").addEventListener("click", function() {
      window.location.href = "/eventVolun";
  });

  document.getElementById("eventVolunLink").addEventListener("click", function() {
      window.location.href = "/eventVolun";
  });

  document.getElementById("discussSecLink").addEventListener("click", function() {
      window.location.href = "/discussSec";
  });

  document.getElementById("loginLink").addEventListener("click", function() {
      window.location.href = "/login";
  });

  document.getElementById("profileLink").addEventListener("click", function() {
      window.location.href = "/volunteerProfile";
  });
});

