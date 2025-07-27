const productos = [
  {
    id: 0,
    code: "10239",
    name: "Tapón del depósito de combustible",
    description: "Tapón del depósito de combustible. Plástico con rosca exterior...",
    brand: "Scania",
    group: "Tapones",
    image: "images/truck-svgrepo-com.png",
  },
  {
    id: 1,
    code: "10293",
    name: "Tapón de aceite de motor Cummis",
    description: "Tapón de aceite de motor Cummis. - Con anillo - Volkswagen...",
    brand: "Volkswagen",
    group: "Tapones",
    image: "images/truck-svgrepo-com.png",
  },
  {
    id: 2,
    code: "10146",
    name: "Tapa de Refrigeración - VALVULADA - 0,5 Bar - Mercedes-Benz Tapa de radiador 0,9 Bar - Toyota Corolla Tapón de combustible",
    description:
      "Tapa de Refrigeración - VALVULADA - 0,5 Bar - Mercedes-Benz Tapa de radiador 0,9 Bar - Toyota Corolla Tapón de combustible...",
    brand: "Mercedes-Benz",
    group: "Tapones",
    image: "images/truck-svgrepo-com.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(
    "button[aria-controls^='filter-section']"
  );

  toggleButtons.forEach((button) => {
    const targetId = button.getAttribute("aria-controls");
    const target = document.getElementById(targetId);
    const icons = button.querySelectorAll("svg");

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);
      target.classList.toggle("hidden");

      // Alternar íconos
      icons[0].classList.toggle("hidden", !isExpanded); // icono +
      icons[1].classList.toggle("hidden", isExpanded); // icono -
    });

    // Ocultar icono "menos" por defecto
    icons[1].classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const brandCheckboxes = document.querySelectorAll('input[name="brand[]"]');
  const groupCheckboxes = document.querySelectorAll('input[name="group[]"]');
  const products = document.querySelectorAll(".product-item");

  function filterProducts() {
    const selectedBrands = Array.from(brandCheckboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    const selectedGroups = Array.from(groupCheckboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    products.forEach((product) => {
      const brand = product.getAttribute("data-marca");
      const group = product.getAttribute("data-group");

      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(brand);
      const groupMatch = selectedGroups.length === 0 || selectedGroups.includes(group);

      product.style.display = brandMatch && groupMatch ? "" : "none";
    });
  }

  brandCheckboxes.forEach((cb) => cb.addEventListener("change", filterProducts));
  groupCheckboxes.forEach((cb) => cb.addEventListener("change", filterProducts));
});

document.addEventListener("DOMContentLoaded", () => {
  const brands = [
    "Mercedes-Benz",
    "Scania",
    "Iveco",
    "Volvo",
    "Ford",
    "Volkswagen",
    "Randon",
    "Facchini",
    "Jost",
    "WAR",
    "America",
    "SUSPENSYS",
    "HBZ",
    "Ibero",
  ];

  const brandList = document.getElementById("brand-list");

  brands.forEach((brand) => {
    const id = `brand-${brand.toLowerCase().replace(/\s+/g, "-")}`;

    const div = document.createElement("div");
    div.className = "flex gap-3";
    div.innerHTML = `
        <div class="flex h-5 shrink-0 items-center">
          <div class="group grid size-4 grid-cols-1">
            <input
              id="${id}"
              name="brand[]"
              value="${brand}"
              type="checkbox"
              class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
            <svg
              class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                class="opacity-0 group-has-checked:opacity-100"
                d="M3 8L6 11L11 3.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="opacity-0 group-has-indeterminate:opacity-100"
                d="M3 7H11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <label for="${id}" class="text-sm text-gray-600">${brand}</label>
      `;
    brandList.appendChild(div);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const categories = [
    "Amortiguadores",
    "Aros",
    "Barras",
    "Bisagras",
    "Bombas",
    "Burletes",
    "Cabina",
    "Cañones",
    "Cerraduras",
    "Cilindro Levanta Cabina",
    "Flexibles",
    "Juegos de Goma",
    "Levantavidrios",
    "Manijas",
    "Mangueras",
    "Marcos",
    "Otros",
    "Pedales",
    "Rejillas",
    "Suspensión",
    "Tapas",
    "Tapones",
    "Terminales",
  ];

  const categoryList = document.getElementById("category-list");

  categories.forEach((category) => {
    const id = `category-${category.toLowerCase().replace(/\s+/g, "-")}`;

    const div = document.createElement("div");
    div.className = "flex gap-3";
    div.innerHTML = `
        <div class="flex h-5 shrink-0 items-center">
          <div class="group grid size-4 grid-cols-1">
            <input
              id="${id}"
              name="category[]"
              value="${category}"
              type="checkbox"
              class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
            <svg
              class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                class="opacity-0 group-has-checked:opacity-100"
                d="M3 8L6 11L11 3.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="opacity-0 group-has-indeterminate:opacity-100"
                d="M3 7H11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <label for="${id}" class="text-sm text-gray-600">${category}</label>
      `;
    categoryList.appendChild(div);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("product-grid");

  productos.forEach((producto) => {
    const item = document.createElement("a");
    item.href = "#";
    item.className = "group";
    item.innerHTML = `
      <img
        src="${producto.image}"
        alt="${producto.name}"
        class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
      />
      <h3 class="mt-4 text-sm text-gray-700">${producto.name}</h3>
      <p class="mt-1 text-sm font-medium text-gray-500">${producto.code}</p>
    `;
    container.appendChild(item);
  });
});

const container = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

function renderProductos(lista) {
  container.innerHTML = "";
  lista.forEach((producto) => {
    const item = document.createElement("a");
    item.href = "#";
    item.className = "group";
    item.innerHTML = `
      <img
        src="${producto.image}"
        alt="${producto.name}"
        class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
      />
      <h3 class="mt-4 text-sm text-gray-700">${producto.name}</h3>
      <p class="mt-1 text-sm font-medium text-gray-500">${producto.code}</p>
    `;
    container.appendChild(item);
  });
}

function filtrarProductos() {
  const query = searchInput.value.toLowerCase();
  const filtrados = productos.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.code.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.group.toLowerCase().includes(query)
  );
  renderProductos(filtrados);
}

// Mostrar todos al inicio
renderProductos(productos);

// Buscar al escribir
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() === "") {
    renderProductos(productos); // Mostrar todos si está vacío
  } else {
    filtrarProductos();
  }
});

// Buscar con botón
searchButton.addEventListener("click", filtrarProductos);

// Buscar con Enter
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") filtrarProductos();
});
