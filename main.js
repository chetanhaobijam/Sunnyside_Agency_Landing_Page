const navIcon = document.querySelector("#nav-icon");
const navItemsContainer = document.querySelector("#nav-items-container");
const scrollToTopBtn = document.querySelector(".scrollTop");
const rootElement = document.documentElement;

// Function to toggle Display of Nav Items
navIcon.addEventListener("click", (e) => {
  navItemsContainer.classList.toggle("display");
});

// Function for Scroll To Top Button
const handleScroll = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.2) {
    scrollToTopBtn.classList.add("display");
  } else {
    scrollToTopBtn.classList.remove("display");
  }
};

document.addEventListener("scroll", handleScroll);
