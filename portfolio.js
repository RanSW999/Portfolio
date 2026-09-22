const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".toc a");
const images = document.querySelectorAll(".expandable");
const overlay = document.querySelector(".imgOverlay");
const expandedImg = document.querySelector(".expandedImg");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.toc a[href="#${entry.target.id}"]`
        );

        activeLink?.classList.add("active");
      }
    });
  },
  {
    threshold: 0.5
  }
);

sections.forEach((section) => observer.observe(section));
images.forEach(img => {
    img.addEventListener("click", () => {
        expandedImg.src = "Black-cat.gif";
        expandedImg.alt = img.alt;
        overlay.classList.add("active");
    });
});
overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
});