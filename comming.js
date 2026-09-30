/* =========================================================
   PAWSTUDIO COMING SOON
   COUNTDOWN + RTL + DARK MODE
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const pawComingThemeToggle =
  document.getElementById(
    "pawComingThemeToggle"
  );

const pawComingDirectionToggle =
  document.getElementById(
    "pawComingDirectionToggle"
  );


const pawDays =
  document.getElementById("pawDays");

const pawHours =
  document.getElementById("pawHours");

const pawMinutes =
  document.getElementById("pawMinutes");

const pawSeconds =
  document.getElementById("pawSeconds");

const pawComingStatus =
  document.getElementById("pawComingStatus");


/* =========================================================
   COUNTDOWN TARGET
========================================================= */

/*
   CHANGE THIS DATE AND TIME
   TO YOUR ACTUAL LAUNCH DATE.

   Format:

   YYYY-MM-DDTHH:MM:SS

   Example:

   2026-12-31T23:59:59

   The countdown uses the visitor's local time.
*/

const launchDate =
  new Date(
    "2026-12-31T23:59:59"
  ).getTime();


/* =========================================================
   FORMAT NUMBER
========================================================= */

function formatCountdownNumber(number) {

  return String(number).padStart(2, "0");

}


/* =========================================================
   UPDATE COUNTDOWN
========================================================= */

function updateCountdown() {

  const now =
    new Date().getTime();


  const distance =
    launchDate - now;


  /* -------------------------------------------------------
     LAUNCH REACHED
  ------------------------------------------------------- */

  if (distance <= 0) {

    pawDays.textContent = "00";

    pawHours.textContent = "00";

    pawMinutes.textContent = "00";

    pawSeconds.textContent = "00";


    if (pawComingStatus) {

      pawComingStatus.innerHTML = `
        <i data-lucide="sparkles"></i>
        <span>
          We're live! Welcome to PawStudio.
        </span>
      `;

      lucide.createIcons();

    }

    clearInterval(countdownTimer);

    return;
  }


  /* -------------------------------------------------------
     TIME CALCULATIONS
  ------------------------------------------------------- */

  const days =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (distance %
        (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );


  const minutes =
    Math.floor(
      (distance %
        (1000 * 60 * 60)) /
      (1000 * 60)
    );


  const seconds =
    Math.floor(
      (distance %
        (1000 * 60)) /
      1000
    );


  /* -------------------------------------------------------
     UPDATE UI
  ------------------------------------------------------- */

  pawDays.textContent =
    formatCountdownNumber(days);

  pawHours.textContent =
    formatCountdownNumber(hours);

  pawMinutes.textContent =
    formatCountdownNumber(minutes);

  pawSeconds.textContent =
    formatCountdownNumber(seconds);

}


/* =========================================================
   START COUNTDOWN
========================================================= */

updateCountdown();

const countdownTimer =
  setInterval(
    updateCountdown,
    1000
  );


/* =========================================================
   DARK MODE
========================================================= */

function updateComingThemeIcon() {

  if (!pawComingThemeToggle) return;


  const isDark =
    document.body.classList.contains(
      "dark-mode"
    );


  pawComingThemeToggle.innerHTML =
    isDark
      ? '<i data-lucide="sun"></i>'
      : '<i data-lucide="moon"></i>';


  pawComingThemeToggle.setAttribute(
    "aria-label",
    isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
  );


  pawComingThemeToggle.setAttribute(
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

if (pawComingThemeToggle) {

  pawComingThemeToggle.addEventListener(
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


      updateComingThemeIcon();

    }
  );

}


/* =========================================================
   RTL / LTR
========================================================= */

function updateComingDirectionIcon() {

  if (!pawComingDirectionToggle) return;


  const currentDirection =
    document.documentElement.getAttribute(
      "dir"
    ) || "ltr";


  pawComingDirectionToggle.innerHTML =
    currentDirection === "rtl"
      ? '<i data-lucide="arrow-left-right"></i>'
      : '<i data-lucide="arrow-right-left"></i>';


  pawComingDirectionToggle.setAttribute(
    "aria-label",
    currentDirection === "rtl"
      ? "Switch to left-to-right"
      : "Switch to right-to-left"
  );


  pawComingDirectionToggle.setAttribute(
    "title",
    currentDirection === "rtl"
      ? "LTR"
      : "RTL"
  );


  lucide.createIcons();

}


/* =========================================================
   RESTORE DIRECTION
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

if (pawComingDirectionToggle) {

  pawComingDirectionToggle.addEventListener(
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


      updateComingDirectionIcon();

    }
  );

}


/* =========================================================
   INITIALIZE LUCIDE
========================================================= */

updateComingThemeIcon();

updateComingDirectionIcon();

lucide.createIcons();