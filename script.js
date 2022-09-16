/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Counter for how many people have viewed our page
var counterContainer = document.querySelector(".website-counter");

var visitCount = localStorage.getItem("page_view");
visitCount = Number(visitCount);

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  // Update local storage value
  localStorage.setItem("page_view", visitCount);
} 
else {
  visitCount = 1;
  // Add entry for key="page_view"
  localStorage.setItem("page_view", 1);
}
// Displays the view count
counterContainer.innerHTML = visitCount;