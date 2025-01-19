document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("filter");
  const packages = document.querySelectorAll(".package");

  filter.addEventListener("change", () => {
    const selected = filter.value;

    packages.forEach((package) => {
      const duration = package.getAttribute("data-duration");

      if (selected === "all" || selected === duration) {
        package.style.display = "block";
      } else {
        package.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Filter functionality (already written above)

  // Booking form functionality
  const bookingForm = document.querySelector("form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual submission

      // Display a confirmation alert
      const packageName = document.getElementById("package").value;
      alert(`Thank you for booking the ${packageName} package! We'll contact you shortly.`);
      
      // Optionally, clear the form
      bookingForm.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling to all navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        event.preventDefault(); // Prevent the default link jump
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.createElement("span");
  yearSpan.textContent = new Date().getFullYear();

  const footer = document.querySelector("footer p");
  footer.appendChild(yearSpan);
});
