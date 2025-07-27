document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener el código de la URL
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code) {
    alert("No se encontró ningún código de producto en la URL.");
    return;
  }

  // 2. Buscar el producto en el array productos
  const producto = productos.find((p) => p.code === code);

  if (!producto) {
    alert("Producto no encontrado.");
    return;
  }

  // 3. Rellenar los campos del HTML
  document.getElementById("product-name").textContent = producto.name;
  document.getElementById("product-description").textContent = producto.description;
  document.getElementById("product-brand").textContent = producto.brand;
  document.getElementById("product-code").textContent = producto.code;
  document.getElementById("product-group").textContent = producto.group;

  const imageElement = document.getElementById("product-image");
  imageElement.src = producto.image;
  imageElement.alt = producto.name;
  const whatsappLink = document.getElementById("whatsapp-link");
  if (whatsappLink) {
    const numero = "+543755648787";
    const mensaje = `Hola, me interesa el producto "${producto.name}" con código ${producto.code}. ¿Podrían brindarme más información?`;
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      numero
    )}&text=${encodeURIComponent(mensaje)}`;

    whatsappLink.href = url;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-button");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.history.back();
    });
  }
});
