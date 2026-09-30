

/* =========================================
   PAWSTUDIO PRODUCT DATA
   9 PRODUCTS
========================================= */

const pawProducts = [

  /* =========================================
     PET BEDS
  ========================================== */

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


  /* =========================================
     PET FURNITURE
  ========================================== */

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


  /* =========================================
     ACCESSORIES
  ========================================== */

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


/* =========================================
   ACTIVE FILTERS
========================================= */

let activeCategory = "all";
let activeSize = "all";


/* =========================================
   DOM ELEMENTS
========================================= */

const productsGrid =
  document.getElementById("paw-products-grid");

const productsCount =
  document.getElementById("paw-products-count");

const productsEmpty =
  document.getElementById("paw-products-empty");

const clearButton =
  document.getElementById("paw-products-clear");

const resetButton =
  document.getElementById("paw-products-reset");


/* =========================================
   FILTER PRODUCTS
========================================= */

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


/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createProductCard(product) {

  const card =
    document.createElement("article");

  card.className =
    "paw-product-card";

  card.innerHTML = `

    <div class="paw-product-image-wrap">

      <img
        class="paw-product-image"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

    </div>


    <div class="paw-product-content">

      <span class="paw-product-category">
        ${product.categoryLabel}
      </span>


      <h3 class="paw-product-name">
        ${product.name}
      </h3>


      <p class="paw-product-description">
        ${product.description}
      </p>


      <div class="paw-product-meta">

        <span class="paw-product-rating">

          <i data-lucide="star"></i>

          ${product.rating}

        </span>


        <span class="paw-product-price">
          ₹${product.price.toLocaleString("en-IN")}
        </span>

      </div>


      <a
        href="#"
        class="paw-product-link"
        data-product-id="${product.id}"
      >

        View Product

        <i data-lucide="arrow-up-right"></i>

      </a>

    </div>

  `;

  return card;

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {

  const filteredProducts =
    getFilteredProducts();


  /* Clear grid */

  productsGrid.innerHTML = "";


  /* Update count */

  productsCount.textContent =
    filteredProducts.length;


  /* Empty state */

  if (filteredProducts.length === 0) {

    productsEmpty.hidden = false;

    return;

  }


  productsEmpty.hidden = true;


  /* Add cards */

  filteredProducts.forEach((product) => {

    const card =
      createProductCard(product);

    productsGrid.appendChild(card);

  });


  /* Refresh Lucide */

  lucide.createIcons();

}


/* =========================================
   CATEGORY BUTTONS
========================================= */

const categoryButtons =
  document.querySelectorAll(
    ".paw-products-filter-button"
  );


categoryButtons.forEach((button) => {

  button.addEventListener("click", () => {

    activeCategory =
      button.dataset.category;


    /* Update active state */

    categoryButtons.forEach((item) => {

      item.classList.remove("is-active");

    });


    button.classList.add("is-active");


    /* Render */

    renderProducts();

  });

});


/* =========================================
   SIZE BUTTONS
========================================= */

const sizeButtons =
  document.querySelectorAll(
    ".paw-products-size-button"
  );


sizeButtons.forEach((button) => {

  button.addEventListener("click", () => {

    activeSize =
      button.dataset.size;


    /* Update active state */

    sizeButtons.forEach((item) => {

      item.classList.remove("is-active");

    });


    button.classList.add("is-active");


    /* Render */

    renderProducts();

  });

});


/* =========================================
   RESET FILTERS
========================================= */

function resetProductFilters() {

  activeCategory = "all";
  activeSize = "all";


  /* Reset category */

  categoryButtons.forEach((button) => {

    button.classList.toggle(
      "is-active",
      button.dataset.category === "all"
    );

  });


  /* Reset size */

  sizeButtons.forEach((button) => {

    button.classList.toggle(
      "is-active",
      button.dataset.size === "all"
    );

  });


  /* Render */

  renderProducts();

}


/* =========================================
   RESET BUTTONS
========================================= */

clearButton.addEventListener(
  "click",
  resetProductFilters
);

resetButton.addEventListener(
  "click",
  resetProductFilters
);


/* =========================================
   INITIAL RENDER
========================================= */

renderProducts();

