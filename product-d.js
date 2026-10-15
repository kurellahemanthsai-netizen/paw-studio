const pawDetailProducts = [
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
function formatPawDetailPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function getPawDetailUrl(product) {
  return `product-d.html?product=${encodeURIComponent(product.name)}`;
}

function renderPawProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productName = params.get("product");
  const productId = Number(params.get("id"));

  const product =
    pawDetailProducts.find((item) => item.name === productName) ||
    pawDetailProducts.find((item) => item.id === productId) ||
    pawDetailProducts[0];

  if (!product) return;

  document.title = `${product.name} | PawStudio`;

  // document.getElementById("detailBreadcrumbName").textContent =
  //   product.name;

  document.getElementById("detailCategory").textContent =
    product.categoryLabel.toUpperCase();

  document.getElementById("detailRating").textContent =
    product.rating.toFixed(1);

  document.getElementById("detailName").textContent =
    product.name;

  document.getElementById("detailPrice").textContent =
    formatPawDetailPrice(product.price);

  document.getElementById("detailDescription").textContent =
    product.description;

  document.getElementById("detailSize").textContent =
    product.sizeLabel;

  document.getElementById("detailType").textContent =
    product.categoryLabel;

  const image = document.getElementById("detailImage");

  image.src = product.image;
  image.alt = product.name;

  document.getElementById("detailStoryText").textContent =
    `${product.description} At PawStudio, we believe your pet's furniture should feel right for them and fit naturally into the home you share.`;

  document.getElementById("detailEnquireLink").href =
    `contact.html?product=${encodeURIComponent(product.name)}`;

  document.getElementById("detailCustomizeLink").href =
    `customize.html?product=${encodeURIComponent(product.name)}`;

  renderPawRelatedProducts(product);

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}
function renderPawRelatedProducts(currentProduct) {
  const relatedGrid = document.getElementById("pawRelatedGrid");

  if (!relatedGrid) return;

  const relatedProducts = pawDetailProducts
    .filter((product) => product.id !== currentProduct.id)
    .slice(0, 3);

  relatedGrid.innerHTML = relatedProducts.map((product) => `
    <article class="paw-related-card">

      <a
        class="paw-related-card-image"
        href="${getPawDetailUrl(product)}"
        aria-label="View ${product.name}"
      >
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
      </a>

      <div class="paw-related-card-content">

        <span class="paw-related-card-category">
          ${product.categoryLabel}
        </span>

        <h3>${product.name}</h3>

        <div class="paw-related-card-bottom">

          <strong>${formatPawDetailPrice(product.price)}</strong>

          <a href="${getPawDetailUrl(product)}">
            View Details
            <i data-lucide="arrow-up-right"></i>
          </a>

        </div>

      </div>
    </article>
  `).join("");

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  renderPawProductDetails();

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
const detailUrl =
  `product-d.html?product=${encodeURIComponent(product.name)}`;
  