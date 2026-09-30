/* =========================================================
   PAWSTUDIO
   HEADER / FOOTER
   DARK MODE + RTL + MOBILE MENU
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* =======================================================
     LUCIDE ICONS
     ======================================================= */

  function refreshIcons() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  /* =======================================================
     ELEMENTS
     ======================================================= */

  const rtlToggle = document.getElementById("pawstudioRtlToggle");

  const themeToggle = document.getElementById("pawstudioThemeToggle");

  const menuToggle = document.getElementById("pawstudioMenuToggle");

  const navbar = document.getElementById("mainNavbar");

  const dropdowns = document.querySelectorAll(".dropdown");

  /* =======================================================
     DARK MODE
     ======================================================= */

  const savedTheme = localStorage.getItem("pawstudio-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  function updateThemeButton() {
    if (!themeToggle) return;

    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.innerHTML = isDark
      ? '<i data-lucide="sun" aria-hidden="true"></i>'
      : '<i data-lucide="moon" aria-hidden="true"></i>';

    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );

    themeToggle.setAttribute(
      "title",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );

    refreshIcons();
  }

  /* =======================================================
     DARK MODE CLICK
     ======================================================= */

  if (themeToggle) {
    themeToggle.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      const isDark = document.body.classList.toggle("dark-mode");

      localStorage.setItem("pawstudio-theme", isDark ? "dark" : "light");

      updateThemeButton();
    });
  }

  updateThemeButton();

  /* =======================================================
     RTL / LTR
     ======================================================= */

  const savedDirection = localStorage.getItem("pawstudio-direction");

  if (savedDirection === "rtl") {
    document.body.classList.add("rtl");

    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.body.classList.remove("rtl");

    document.documentElement.setAttribute("dir", "ltr");
  }

  function updateRtlButton() {
    if (!rtlToggle) return;

    const isRTL = document.body.classList.contains("rtl");

    rtlToggle.setAttribute(
      "aria-label",
      isRTL ? "Switch to LTR" : "Switch to RTL",
    );

    rtlToggle.setAttribute("title", isRTL ? "Switch to LTR" : "Switch to RTL");

    rtlToggle.setAttribute("aria-pressed", isRTL ? "true" : "false");
  }

  /* =======================================================
     RTL CLICK
     ======================================================= */

  if (rtlToggle) {
    rtlToggle.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      const isRTL = document.body.classList.toggle("rtl");

      document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

      localStorage.setItem("pawstudio-direction", isRTL ? "rtl" : "ltr");

      updateRtlButton();
    });
  }

  updateRtlButton();

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      const isOpen = navbar.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu",
      );

      menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x" aria-hidden="true"></i>'
        : '<i data-lucide="menu" aria-hidden="true"></i>';

      refreshIcons();
    });
  }

  /* =======================================================
     MOBILE DROPDOWNS
     ======================================================= */

  dropdowns.forEach(function (dropdown) {
    const mainLink = dropdown.querySelector(":scope > a");

    if (!mainLink) return;

    mainLink.addEventListener("click", function (event) {
      if (window.innerWidth <= 900) {
        event.preventDefault();

        dropdowns.forEach(function (item) {
          if (item !== dropdown) {
            item.classList.remove("active");
          }
        });

        dropdown.classList.toggle("active");
      }
    });
  });

  /* =======================================================
     CLOSE MOBILE MENU AFTER LINK CLICK
     ======================================================= */

  document
    .querySelectorAll(".nav-links a:not(.dropdown > a)")
    .forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 900) {
          navbar.classList.remove("active");

          dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove("active");
          });

          if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open menu");

            menuToggle.innerHTML =
              '<i data-lucide="menu" aria-hidden="true"></i>';

            refreshIcons();
          }
        }
      });
    });

  /* =======================================================
     CLOSE MENU WHEN RESIZING TO DESKTOP
     ======================================================= */

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      navbar?.classList.remove("active");

      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("active");
      });

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open menu");

        menuToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';

        refreshIcons();
      }
    }
  });

  /* =======================================================
     BACK TO TOP
     ======================================================= */

  const topButton = document.querySelector(".top-btn");

  if (topButton) {
    topButton.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* =======================================================
     FINAL ICON REFRESH
     ======================================================= */

  refreshIcons();
});
