const loginBtn = document.getElementById("loginBtn");
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
const nosotrosBtn = document.getElementById("nosotrosBtn");
const navContacto = document.getElementById("navContacto");
const modalInformacion = new bootstrap.Modal(
  document.getElementById("modalInformacion"),
);
const tituloModal = document.getElementById("tituloModal");
const contenidoModal = document.getElementById("contenidoModal");
const cardContenedor = document.getElementById("cardContenedor");

const cafes = [
  {
    nombre: "Café Espresso",
    descripcion:
      "Un café intenso y aromático, perfecto para los amantes del sabor fuerte.",
    imagen: "img/americano.webp",
  },
  {
    nombre: "Café Latte",
    descripcion:
      "Una mezcla suave de espresso y leche vaporizada, ideal para disfrutar en cualquier momento.",
    imagen: "img/latte.webp",
  },
  {
    nombre: "Café Cappuccino",
    descripcion:
      "Espresso con leche espumosa y un toque de cacao, una delicia para los sentidos.",
    imagen: "img/cappuccino.webp",
  },
  {
    nombre: "Café Mocha",
    descripcion:
      "Un delicioso mix de espresso, chocolate y leche, perfecto para golosos.",
    imagen: "img/cafe_mocha.jpg",
  },
  {
    nombre: "Café Macchiato",
    descripcion:
      "Espresso con una pequeña cantidad de leche espumada, intenso y elegante.",
    imagen: "img/macchiato.jpeg",
  },
  {
    nombre: "Affogato",
    descripcion:
      "Una bola de helado 'ahogada' en espresso caliente — postre y café en uno.",
    imagen: "img/affogato.jpg",
  },
];

// iniciar sesión
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

if (usuarioActivo) {
  loginBtn.textContent = usuarioActivo.nombre;

  btnCerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "index.html";
  });
} else {
  loginBtn.textContent = "Ingresar";
  loginBtn.classList.remove("dropdown-toggle");
  loginBtn.removeAttribute("data-bs-toggle");

  btnCerrarSesion.style.display = "none";

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "login.html";
  });
}

//sobre nosotros
nosotrosBtn.addEventListener("click", (event) => {
  event.preventDefault();
  tituloModal.textContent = "Sobre nosotros";
  contenidoModal.innerHTML = `
    <img src="img/nosotros.jpg" class="img-fluid rounded mb-3" alt="Interior de Café Tacuba">
    <p>
      Café Tacuba nació como un espacio pensado para
      disfrutar de un buen café y buenos momentos.
    </p>
    <p>
      Seleccionamos cuidadosamente nuestros ingredientes
      para ofrecer una experiencia agradable en cada visita.
    </p>
    <p class="fw-bold">
      San Miguel de Tucumán
    </p>
  `;
  modalInformacion.show();
});

//nuestros cafes
const renderizarCafes = (cafes) => {
  cafes.forEach((cafe) => {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-4");

    const card = document.createElement("div");
    card.classList.add("card", "h-100", "shadow-sm", "overflow-hidden");

    const ratio = document.createElement("div");
    ratio.classList.add("ratio", "ratio-4x3");

    const img = document.createElement("img");
    img.src = cafe.imagen;
    img.classList.add("object-fit-cover");
    img.alt = cafe.nombre;
    ratio.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = cafe.nombre;

    const p = document.createElement("p");
    p.classList.add("card-text");
    p.textContent = cafe.descripcion;

    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    card.appendChild(ratio);
    card.appendChild(cardBody);
    col.appendChild(card);
    cardContenedor.appendChild(col);
  });
};

renderizarCafes(cafes);

//contacto
navContacto.addEventListener("click", (event) => {
  event.preventDefault();
  const seccionContacto = document.getElementById("contacto");
  seccionContacto.scrollIntoView({
    behavior: "smooth",
  });
});

//footer
const btnUbicacion = document.getElementById("btnUbicacion");

btnUbicacion.addEventListener("click", () => {
  tituloModal.textContent = "Nuestra ubicación";
  contenidoModal.innerHTML = `
    <div class="mapa mb-3">
      <iframe 
        width="400" 
        height="200" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.7356183428565!2d-65.2267221!3d-26
        .784696200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225da2e380fe9d%3A0xc722accfa7
        49c7f1!2sSiempreviva%2C%20T4103%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1789476154877!5m2!1ses-419!2sar"
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>
    </div>
  `;
  modalInformacion.show();
});

const btnArriba = document.getElementById("btnArriba");
btnArriba.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
