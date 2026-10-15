
"use strict";

/* =========================================================
   PAWSTUDIO PRODUCTS
========================================================= */

const pawProducts = [
  {
    id: 1,
    name: "Cozy Haven Bed",
    category: "beds",
    size: "small",
    categoryLabel: "Pet Bed",
    sizeLabel: "Small Pets",
    price: 2499,
    rating: 4.8,
    image: "images/cozy.jpeg",
    description:
      "A soft and cozy resting space designed for smaller companions."
  },
  {
    id: 2,
    name: "Cloud Rest Bed",
    category: "beds",
    size: "medium",
    categoryLabel: "Pet Bed",
    sizeLabel: "Medium Pets",
    price: 3299,
    rating: 4.9,
    image: "images/cloud-rest.jpeg",
    description:
      "A supportive everyday bed made for comfortable medium-sized pets."
  },
  {
    id: 3,
    name: "Grand Comfort Bed",
    category: "beds",
    size: "large",
    categoryLabel: "Pet Bed",
    sizeLabel: "Large Pets",
    price: 4299,
    rating: 4.8,
    image: "images/grand.jpeg",
    description:
      "A spacious and supportive resting space for larger companions."
  },
  {
    id: 4,
    name: "Pet Lounge",
    category: "furniture",
    size: "medium",
    categoryLabel: "Pet Furniture",
    sizeLabel: "Medium Pets",
    price: 4299,
    rating: 4.9,
    image: "images/lounge.jpeg",
    description:
      "A relaxed lounging space designed to fit naturally into your home."
  },
  {
    id: 5,
    name: "Quiet Cat House",
    category: "furniture",
    size: "small",
    categoryLabel: "Pet Furniture",
    sizeLabel: "Small Pets",
    price: 3999,
    rating: 4.7,
    image: "images/quiet.jpeg",
    description:
      "A cozy private retreat for cats who love calm and quiet spaces."
  },
  {
    id: 6,
    name: "Window Perch",
    category: "furniture",
    size: "small",
    categoryLabel: "Pet Furniture",
    sizeLabel: "Small Pets",
    price: 2899,
    rating: 4.8,
    image: "images/window.jpeg",
    description:
      "A comfortable elevated spot for relaxing and watching the world."
  },
  {
    id: 7,
    name: "Feeding Bowl Stand",
    category: "accessories",
    size: "medium",
    categoryLabel: "Accessories",
    sizeLabel: "Medium Pets",
    price: 1599,
    rating: 4.7,
    image: "images/bowl.jpeg",
    description:
      "A simple elevated feeding solution designed for everyday routines."
  },
  {
    id: 8,
    name: "Pet Toy Storage",
    category: "accessories",
    size: "large",
    categoryLabel: "Accessories",
    sizeLabel: "Large Pets",
    price: 1299,
    rating: 4.6,
    image: "images/toy-storage.jpeg",
    description:
      "A practical way to keep their favorite toys neatly organized."
  },
  {
    id: 9,
    name: "Everyday Pet Mat",
    category: "accessories",
    size: "large",
    categoryLabel: "Accessories",
    sizeLabel: "Large Pets",
    price: 1499,
    rating: 4.8,
    image: "images/mat.jpeg",
    description:
      "A versatile everyday mat for resting, feeding, and relaxing."
  }
];


/* =========================================================
   FILTER STATE
========================================================= */

let activeCategory = "all";
let activeSize = "all";


/* =========================================================
   GET FILTERED PRODUCTS
========================================================= */

function getFilteredProducts() {
  return pawProducts.filter((product) => {
    const categoryMatches =
      activeCategory === "all" ||
      product.category === activeCategory;

    const sizeMatches =
      activeSize === "all" ||
      product.size === activeSize;

    return categoryMatches && sizeMatches;
  });
}


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPawPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}


/* =========================================================
   CREATE PRODUCT DETAIL URL
========================================================= */

function getPawProductDetailUrl(product) {
  return `product-d.html?product=${encodeURIComponent(product.name)}`;
}


/* =========================================================
   CREATE PRODUCT CARD
========================================================= */

function createProductCard(product) {
  const detailUrl = getPawProductDetailUrl(product);

  return `
    <article class="paw-product-card">

      <div class="paw-product-image-wrap">

        <img
          src="${product.image}"
          alt="${product.name}"
          class="paw-product-image"
          loading="lazy"
        />

        <span class="paw-product-category">
          ${product.categoryLabel}
        </span>

      </div>

      <div class="paw-product-content">

        <div class="paw-product-meta">

          <span class="paw-product-size">
            ${product.sizeLabel}
          </span>

          <span class="paw-product-rating">
            <i data-lucide="star"></i>
            ${product.rating}
          </span>

        </div>

        <h3 class="paw-product-name">
          ${product.name}
        </h3>

        <p class="paw-product-description">
          ${product.description}
        </p>

        <div class="paw-product-bottom">

          <span class="paw-product-price">
            ${formatPawPrice(product.price)}
          </span>

        </div>

        <!-- VIEW PRODUCT: OPENS PRODUCT DETAIL PAGE -->

        <a
          href="${detailUrl}"
          class="paw-product-link"
          data-product-id="${product.id}"
          aria-label="View details for ${product.name}"
        >
          View Product
          <i data-lucide="arrow-up-right"></i>
        </a>

      </div>

    </article>
  `;
}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderPawProducts() {
  const grid = document.getElementById("paw-products-grid");
  const emptyState = document.getElementById("paw-products-empty");
  const count = document.getElementById("paw-products-count");

  if (!grid) return;

  const filteredProducts = getFilteredProducts();

  grid.innerHTML = "";

  /* EMPTY STATE */

  if (filteredProducts.length === 0) {
    grid.hidden = true;

    if (emptyState) {
      emptyState.hidden = false;
    }

    if (count) {
      count.textContent = "0";
    }

    refreshPawIcons();
    return;
  }

  /* SHOW PRODUCT GRID */

  grid.hidden = false;

  if (emptyState) {
    emptyState.hidden = true;
  }

  /* GENERATE PRODUCT CARDS */

  grid.innerHTML = filteredProducts
    .map(createProductCard)
    .join("");

  /* UPDATE PRODUCT COUNT */

  if (count) {
    count.textContent = filteredProducts.length;
  }

  /* REFRESH DYNAMIC ICONS */

  refreshPawIcons();
}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function initializeCategoryFilters() {
  const categoryButtons = document.querySelectorAll(
    ".paw-products-filter-button"
  );

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory =
        button.getAttribute("data-category") || "all";

      categoryButtons.forEach((item) => {
        item.classList.remove("is-active");
      });

      button.classList.add("is-active");

      renderPawProducts();
    });
  });
}


/* =========================================================
   SIZE FILTER
========================================================= */

function initializeSizeFilters() {
  const sizeButtons = document.querySelectorAll(
    ".paw-products-size-button"
  );

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSize =
        button.getAttribute("data-size") || "all";

      sizeButtons.forEach((item) => {
        item.classList.remove("is-active");
      });

      button.classList.add("is-active");

      renderPawProducts();
    });
  });
}


/* =========================================================
   RESET FILTERS
========================================================= */

function resetPawProductFilters() {
  activeCategory = "all";
  activeSize = "all";

  /* RESET CATEGORY BUTTONS */

  document
    .querySelectorAll(".paw-products-filter-button")
    .forEach((button) => {
      button.classList.toggle(
        "is-active",
        button.getAttribute("data-category") === "all"
      );
    });

  /* RESET SIZE BUTTONS */

  document
    .querySelectorAll(".paw-products-size-button")
    .forEach((button) => {
      button.classList.toggle(
        "is-active",
        button.getAttribute("data-size") === "all"
      );
    });

  renderPawProducts();
}


/* =========================================================
   RESET BUTTONS
========================================================= */

function initializeProductResetButtons() {
  const clearButton =
    document.getElementById("paw-products-clear");

  const resetButton =
    document.getElementById("paw-products-reset");

  if (clearButton) {
    clearButton.addEventListener(
      "click",
      resetPawProductFilters
    );
  }

  if (resetButton) {
    resetButton.addEventListener(
      "click",
      resetPawProductFilters
    );
  }
}


/* =========================================================
   LUCIDE ICONS
========================================================= */

function refreshPawIcons() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}


/* =========================================================
   INITIALIZE PRODUCTS PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeCategoryFilters();
  initializeSizeFilters();
  initializeProductResetButtons();

  renderPawProducts();
  refreshPawIcons();
});
