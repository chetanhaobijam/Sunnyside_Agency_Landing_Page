const navIcon = document.querySelector("#nav-icon");
const navItemsContainer = document.querySelector("#nav-items-container");

// Function to toggle Display of Nav Items
navIcon.addEventListener("click", (e) => {
  navItemsContainer.classList.toggle("display");
});
