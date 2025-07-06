document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  function activateMenu() {
    let currentSectionId = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateMenu);
});
