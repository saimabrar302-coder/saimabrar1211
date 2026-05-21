const revealItems = document.querySelectorAll(".section, .hero-card, .price-card, .feature-card, .setup-card, .faq-list details");

revealItems.forEach((item) => {
  item.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

const placeholderLinks = document.querySelectorAll("[data-placeholder-link='true']");

placeholderLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.href.includes("example.com")) {
      event.preventDefault();
      window.alert("Replace this example payment link in index.html before publishing the site.");
    }
  });
});
