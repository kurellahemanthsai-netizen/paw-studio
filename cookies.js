/* =========================================================
   PAWSTUDIO — PRIVACY POLICY JS
========================================================= */

"use strict";


/* =========================================================
   REFRESH LUCIDE ICONS
========================================================= */

function refreshPrivacyIcons() {

  if (typeof lucide !== "undefined") {

    lucide.createIcons();

  }

}


/* =========================================================
   DARK MODE
========================================================= */

function initializePrivacyTheme() {

  const darkToggle =
    document.getElementById("darkToggle");


  if (!darkToggle) {
    return;
  }


  const savedTheme =
    localStorage.getItem("pawstudio-theme");


  if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

  }


  darkToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    const isDark =
      document.body.classList.contains("dark-mode");


    localStorage.setItem(
      "pawstudio-theme",
      isDark ? "dark" : "light"
    );


    refreshPrivacyIcons();

  });

}


/* =========================================================
   RTL / LTR
========================================================= */

function initializePrivacyDirection() {

  const rtlToggle =
    document.getElementById("rtlToggle");


  if (!rtlToggle) {
    return;
  }


  const savedDirection =
    localStorage.getItem("pawstudio-direction");


  if (savedDirection === "rtl") {

    document.documentElement.setAttribute(
      "dir",
      "rtl"
    );

  } else {

    document.documentElement.setAttribute(
      "dir",
      "ltr"
    );

  }


  rtlToggle.addEventListener("click", () => {

    const currentDirection =
      document.documentElement.getAttribute("dir");


    const newDirection =
      currentDirection === "rtl"
        ? "ltr"
        : "rtl";


    document.documentElement.setAttribute(
      "dir",
      newDirection
    );


    localStorage.setItem(
      "pawstudio-direction",
      newDirection
    );


    refreshPrivacyIcons();

  });

}


/* =========================================================
   TABLE OF CONTENTS
========================================================= */

function initializePrivacyNavigation() {

  const links =
    document.querySelectorAll(".toc-nav a");


  links.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");


      if (
        !targetId ||
        !targetId.startsWith("#")
      ) {

        return;

      }


      const target =
        document.querySelector(targetId);


      if (!target) {

        return;

      }


      event.preventDefault();


      const offset = 25;


      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;


      window.scrollTo({

        top: targetPosition,

        behavior: "smooth"

      });


      /*
        Update the URL hash without
        jumping the browser automatically.
      */

      history.replaceState(
        null,
        "",
        targetId
      );

    });

  });

}


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    refreshPrivacyIcons();

    initializePrivacyTheme();

    initializePrivacyDirection();

    initializePrivacyNavigation();

    refreshPrivacyIcons();

  }
);