document.querySelectorAll(".contact-faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.closest(".contact-faq-item");

    document.querySelectorAll(".contact-faq-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    currentItem.classList.toggle("active");
  });
});

lucide.createIcons();
