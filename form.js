/* =========================================================
   PAWSTUDIO CUSTOMIZATION PAGE
   DARK MODE + RTL + FORM
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const pawThemeToggle =
  document.getElementById("pawThemeToggle");

const pawDirectionToggle =
  document.getElementById("pawDirectionToggle");

const pawCustomForm =
  document.getElementById("pawCustomProductForm");


/* =========================================================
   DARK MODE
========================================================= */

function updateThemeIcon() {

  if (!pawThemeToggle) return;

  const isDark =
    document.body.classList.contains("dark-mode");


  pawThemeToggle.innerHTML = isDark
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';


  pawThemeToggle.setAttribute(
    "aria-label",
    isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
  );


  pawThemeToggle.setAttribute(
    "title",
    isDark
      ? "Light mode"
      : "Dark mode"
  );


  lucide.createIcons();
}


/* Restore saved theme */

const savedTheme =
  localStorage.getItem("pawstudio-theme");

if (savedTheme === "dark") {

  document.body.classList.add("dark-mode");

}


/* Theme button */

if (pawThemeToggle) {

  pawThemeToggle.addEventListener(
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
        isDark ? "dark" : "light"
      );


      updateThemeIcon();

    }
  );

}


/* =========================================================
   RTL / LTR
========================================================= */

function updateDirectionIcon() {

  if (!pawDirectionToggle) return;


  const currentDirection =
    document.documentElement.getAttribute("dir") ||
    "ltr";


  pawDirectionToggle.innerHTML =
    currentDirection === "rtl"
      ? '<i data-lucide="arrow-left-right"></i>'
      : '<i data-lucide="arrow-right-left"></i>';


  pawDirectionToggle.setAttribute(
    "aria-label",
    currentDirection === "rtl"
      ? "Switch to left-to-right"
      : "Switch to right-to-left"
  );


  pawDirectionToggle.setAttribute(
    "title",
    currentDirection === "rtl"
      ? "LTR"
      : "RTL"
  );


  lucide.createIcons();
}


/* Restore saved direction */

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


/* Direction button */

if (pawDirectionToggle) {

  pawDirectionToggle.addEventListener(
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


      updateDirectionIcon();

    }
  );

}


/* =========================================================
   CUSTOM FORM
========================================================= */

if (pawCustomForm) {

  pawCustomForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const submitButton =
        pawCustomForm.querySelector(
          ".paw-form-submit-btn"
        );


      const buttonText =
        submitButton.querySelector("span");


      buttonText.textContent =
        "Request Sent";


      submitButton
        .querySelector("svg")
        ?.setAttribute(
          "data-lucide",
          "check"
        );


      lucide.createIcons();


      setTimeout(function () {

        buttonText.textContent =
          "Send My Custom Request";


        submitButton
          .querySelector("svg")
          ?.setAttribute(
            "data-lucide",
            "arrow-up-right"
          );


        lucide.createIcons();

      }, 2500);

    }
  );

}


/* =========================================================
   FILE NAME DISPLAY
========================================================= */

const pawReference =
  document.getElementById("pawReference");

const pawUploadContent =
  document.querySelector(
    ".paw-upload-content"
  );


if (
  pawReference &&
  pawUploadContent
) {

  pawReference.addEventListener(
    "change",
    function () {

      if (
        this.files &&
        this.files.length > 0
      ) {

        const fileName =
          this.files[0].name;


        const strong =
          pawUploadContent.querySelector(
            "strong"
          );

        const span =
          pawUploadContent.querySelector(
            "span"
          );


        if (strong) {

          strong.textContent =
            fileName;

        }


        if (span) {

          span.textContent =
            "Image selected";

        }

      }

    }
  );

}


/* =========================================================
   INITIALIZE LUCIDE
========================================================= */

updateThemeIcon();

updateDirectionIcon();

lucide.createIcons();

