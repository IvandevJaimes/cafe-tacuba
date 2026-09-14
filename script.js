const navInicio = document.getElementById("navInicio");
const navNosotros = document.getElementById("navNosotros");
const navCafes = document.getElementById("navCafes");
const navContacto = document.getElementById("navContacto");
const modalInformacion = new bootstrap.Modal(
  document.getElementById("modalInformacion"),
);
const tituloModal = document.getElementById("tituloModal");
const contenidoModal = document.getElementById("contenidoModal");

//inicio de secion
navInicio.addEventListener("click", (event) => {
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
      navInicio.textContent = nombre;
      mensajeInicioSesion.textContent = "Inicio de sesión correcto.";
      modalInformacion.hide();
    } else {
      mensajeInicioSesion.textContent = "Completá el usuario y la contraseña.";
    }
  });
});
//sobre nosotros
navNosotros.addEventListener("click", (event) => {
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
navCafes.addEventListener("click", (event) => {
  event.preventDefault();
  tituloModal.textContent = "Nuestros cafés";
  contenidoModal.innerHTML = `
    <div class="row g-3">
    <!-- contenedor latte -->
    <article class="col-md-4">
        <div class="card h-100">
            <img src="img/latte.webp" class="card-img-top" alt="Café Latte">
                <div class="card-body text-center">
                    <h3>
                        Café Latte
                    </h3>
                    <p>
                        Café espresso con leche caliente
                        y espuma.
                    </p>
                    <p class="fw-bold">
                        $4500
                    </p>
                </div>

        </div>
    </article>
    <!-- contenedor cappuccino-->
    <article class="col-md-4">
        <div class="card h-100">
            <img src="img/cappuccino.webp" class="card-img-top" alt="Cappuccino">
                <div class="card-body text-center">
                    <h3>
                        Cappuccino
                    </h3>
                    <p>
                        Café, leche y espuma en una
                        combinación equilibrada.
                    </p>
                    <p class="fw-bold">
                        $6800
                    </p>
                </div>
        </div>
    </article>
    <!-- contenedor americano -->
    <article class="col-md-4">
        <div class="card h-100">
            <img src="img/americano.webp" class="card-img-top" alt="Café Americano">
                <div class="card-body text-center">
                    <h3>
                        Café Americano
                    </h3>
                    <p>
                        Un café intenso y aromático
                        para comenzar el día.
                    </p>
                    <p class="fw-bold">
                        $6200
                    </p>
                </div>
        </div>
    </article>
    </div>
`;
  modalInformacion.show();
});
//contacto
navContacto.addEventListener("click", (event) => {
  event.preventDefault();
  const seccionContacto = document.getElementById("contacto");
  seccionContacto.scrollIntoView({
    behavior: "smooth",
  });
});
