/* =========================================================
   PAWSTUDIO 404 PAGE
   RTL + DARK MODE
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const paw404ThemeToggle =
  document.getElementById(
    "paw404ThemeToggle"
  );

const paw404DirectionToggle =
  document.getElementById(
    "paw404DirectionToggle"
  );


/* =========================================================
   DARK MODE
========================================================= */

function update404ThemeIcon() {

  if (!paw404ThemeToggle) return;


  const isDark =
    document.body.classList.contains(
      "dark-mode"
    );


  paw404ThemeToggle.innerHTML =
    isDark
      ? '<i data-lucide="sun"></i>'
      : '<i data-lucide="moon"></i>';


  paw404ThemeToggle.setAttribute(
    "aria-label",
    isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
  );


  paw404ThemeToggle.setAttribute(
    "title",
    isDark
      ? "Light mode"
      : "Dark mode"
  );


  lucide.createIcons();
}


/* =========================================================
   RESTORE DARK MODE
========================================================= */

const savedTheme =
  localStorage.getItem(
    "pawstudio-theme"
  );


if (savedTheme === "dark") {

  document.body.classList.add(
    "dark-mode"
  );

}


/* =========================================================
   DARK MODE BUTTON
========================================================= */

if (paw404ThemeToggle) {

  paw404ThemeToggle.addEventListener(
    "click",
    function () {

      document.body.classList.toggle(
        "dark-mode"
      );


      const isDark =
        document.body.classList.contains(
          "dark-mode"
        );


      localStorage.setItem(
        "pawstudio-theme",
        isDark
          ? "dark"
          : "light"
      );


      update404ThemeIcon();

    }
  );

}


/* =========================================================
   RTL / LTR ICON
========================================================= */

function update404DirectionIcon() {

  if (!paw404DirectionToggle) return;


  const currentDirection =
    document.documentElement.getAttribute(
      "dir"
    ) || "ltr";


  paw404DirectionToggle.innerHTML =
    currentDirection === "rtl"
      ? '<i data-lucide="arrow-left-right"></i>'
      : '<i data-lucide="arrow-right-left"></i>';


  paw404DirectionToggle.setAttribute(
    "aria-label",
    currentDirection === "rtl"
      ? "Switch to left-to-right"
      : "Switch to right-to-left"
  );


  paw404DirectionToggle.setAttribute(
    "title",
    currentDirection === "rtl"
      ? "LTR"
      : "RTL"
  );


  lucide.createIcons();
}


/* =========================================================
   RESTORE RTL / LTR
========================================================= */

const savedDirection =
  localStorage.getItem(
    "pawstudio-direction"
  );


if (savedDirection) {

  document.documentElement.setAttribute(
    "dir",
    savedDirection
  );


  document.documentElement.setAttribute(
    "lang",
    savedDirection === "rtl"
      ? "ar"
      : "en"
  );

}


/* =========================================================
   RTL / LTR BUTTON
========================================================= */

if (paw404DirectionToggle) {

  paw404DirectionToggle.addEventListener(
    "click",
    function () {

      const currentDirection =
        document.documentElement.getAttribute(
          "dir"
        ) || "ltr";


      const newDirection =
        currentDirection === "ltr"
          ? "rtl"
          : "ltr";


      document.documentElement.setAttribute(
        "dir",
        newDirection
      );


      document.documentElement.setAttribute(
        "lang",
        newDirection === "rtl"
          ? "ar"
          : "en"
      );


      localStorage.setItem(
        "pawstudio-direction",
        newDirection
      );


      update404DirectionIcon();

    }
  );

}


/* =========================================================
   INITIALIZE
========================================================= */

update404ThemeIcon();

update404DirectionIcon();

lucide.createIcons();