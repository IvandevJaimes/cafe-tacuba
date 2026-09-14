const loginBtn = document.getElementById("loginBtn");
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

//inicio de seion
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  tituloModal.textContent = "Iniciar sesión";
  contenidoModal.innerHTML = `
    <div
      style=" background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('img/inicio_secion.webp');
        background-size: cover;
        background-position: center;
        min-height: 400px;
        padding: 60px 35px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
      <div
        style="
          background: rgba(255, 255, 255, 0.9);
          padding: 25px;
          border-radius: 12px;
          width: 100%;
          max-width: 350px;
        ">
        <h3 class="text-center mb-4">
          Bienvenido
        </h3>
        <input id="nombreUsuario" type="text" class="form-control mb-3" placeholder="Nombre de usuario">
        <input id="contrasenaUsuario" type="password" class="form-control mb-3" placeholder="Contraseña">
        <button id="btnIniciarSesion" type="button" class="btn btn-dark w-100">
          Iniciar sesión
        </button>
        <p id="mensajeInicioSesion" class="mt-3 mb-0">
        </p>
      </div>
    </div>
  `;

  modalInformacion.show();

  const btnIniciarSesion = document.getElementById("btnIniciarSesion");
  const nombreUsuario = document.getElementById("nombreUsuario");
  const contrasenaUsuario = document.getElementById("contrasenaUsuario");
  const mensajeInicioSesion = document.getElementById("mensajeInicioSesion");

  //iniciar sesión
  btnIniciarSesion.addEventListener("click", () => {
    const nombre = nombreUsuario.value.trim();
    const contrasena = contrasenaUsuario.value.trim();
    if (nombre !== "" && contrasena !== "") {
      loginBtn.textContent = nombre;
      mensajeInicioSesion.textContent = "Inicio de sesión correcto.";
      modalInformacion.hide();
    } else {
      mensajeInicioSesion.textContent = "Completá el usuario y la contraseña.";
    }
  });
});
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
  const div = document.createElement("div");
  div.classList.add("row", "g-3");

  cafes.forEach((cafe) => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-md-4");

    const card = document.createElement("div");
    card.classList.add("card", "h-100", "shadow-sm");

    const img = document.createElement("img");
    img.src = cafe.imagen;
    img.classList.add("card-img-top", "img-fluid");
    img.alt = cafe.nombre;

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
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    div.appendChild(col);
  });

  cardContenedor.appendChild(div);
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