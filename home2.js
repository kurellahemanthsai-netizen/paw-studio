document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     LUCIDE
  ====================================================== */

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }


  /* =====================================================
     HERO PARALLAX
  ====================================================== */

  const hero =
    document.querySelector(".paw2-hero");

  const heroImage =
    document.querySelector(".paw2-hero-image");


  if (hero && heroImage) {

    let ticking = false;

    window.addEventListener(
      "scroll",
      () => {

        if (window.innerWidth <= 767) {
          return;
        }

        if (!ticking) {

          window.requestAnimationFrame(() => {

            const rect =
              hero.getBoundingClientRect();

            const progress =
              Math.max(
                -1,
                Math.min(
                  1,
                  -rect.top / window.innerHeight
                )
              );

            heroImage.style.transform =
              `scale(1.02) translateY(${progress * 16}px)`;

            ticking = false;

          });

          ticking = true;
        }

      },
      { passive: true }
    );

  }


  /* =====================================================
     STORY BUTTON
  ====================================================== */

  const storyButton =
    document.querySelector(".paw2-story-btn");


  if (storyButton) {

    storyButton.addEventListener(
      "click",
      () => {

        storyButton.classList.toggle(
          "paw2-story-active"
        );

      }
    );

  }


  /* =====================================================
     BUTTON MAGNETIC EFFECT
  ====================================================== */

  const buttons =
    document.querySelectorAll(".paw2-btn");


  buttons.forEach(button => {

    button.addEventListener(
      "mousemove",
      event => {

        if (window.innerWidth <= 767) {
          return;
        }

        const rect =
          button.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left -
          rect.width / 2;

        const y =
          event.clientY -
          rect.top -
          rect.height / 2;

        button.style.transform =
          `translate(${x * 0.06}px, ${y * 0.06}px)`;

      }
    );


    button.addEventListener(
      "mouseleave",
      () => {

        button.style.transform = "";

      }
    );

  });


  /* =====================================================
     REDUCED MOTION
  ====================================================== */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );


  if (reducedMotion.matches) {

    document.documentElement.classList.add(
      "reduce-motion"
    );

  }

});


