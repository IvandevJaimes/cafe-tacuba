const navInicio = document.getElementById("navInicio");
const navNosotros = document.getElementById("navNosotros");
const navCafes = document.getElementById("navCafes");
const navContacto = document.getElementById("navContacto");

// Inicio
navInicio.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "index.html";
});

// Nosotros
navNosotros.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "index.html#nosotros";
});

// Nuestros Cafes
navCafes.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "index.html#cafes";
});

// Contacto
navContacto.addEventListener("click", (event) => {
  event.preventDefault();

  const seccionContacto = document.getElementById("contacto");

  seccionContacto.scrollIntoView({
  behavior: "smooth"
  });
});

// Ir arriba
const btnArriba = document.getElementById("btnArriba");

btnArriba.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Usuarios registrados
let usuarios = JSON.parse(localStorage.getItem("usuarios"));

if (!usuarios) {
  usuarios = [
    {
      nombre: "christian",
      apellido: "rios",
      usuario: "chris",
      contrasena: "123"
    },
    {
      nombre: "ivan",
      apellido: "jaimes",
      usuario: "ivancho",
      contrasena: "1234"
    },
    {
      nombre: "luis",
      apellido: "lopez",
      usuario: "luisito",
      contrasena: "12345"
    }
  ];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Formulario de inicio de sesion
function mostrarFormularioLogin() {
  const contenedor = document.getElementById("formularioLogin");
  contenedor.innerHTML = `
    <div class="card shadow-lg border-0" style="width: 100%; max-width: 420px;">
      <div class="card-body p-4 p-md-5">
        <div class="text-center mb-4">
          <h1 class="h3 fw-bold mb-2">Café Tacuba</h1>
          <p class="text-secondary mb-0">Iniciar sesión</p>
        </div>
        <form id="formLogin">
          <div class="mb-3">
            <label for="usuario" class="form-label fw-semibold">
              Usuario
            </label>
            <input type="text" id="usuario" class="form-control form-control-lg" placeholder="Ingresá tu usuario" required>
          </div>
          <div class="mb-4">
            <label for="contrasena" class="form-label fw-semibold">
              Contraseña
            </label>
            <input type="password" id="contrasena" class="form-control form-control-lg" placeholder="Ingresá tu contraseña" required>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-dark btn-lg">
              Iniciar sesión
            </button>
            <button type="button" id="btnRegistrarse" class="btn btn-outline-dark btn-lg">
              Registrarse
            </button>
          </div>
          <p id="mensajeLogin" class="text-center mt-3"></p>
        </form>
      </div>
    </div>
  `;

  const formularioLogin = document.getElementById("formLogin");

  formularioLogin.addEventListener("submit", iniciarSesion);

  const btnRegistrarse = document.getElementById("btnRegistrarse");

  btnRegistrarse.addEventListener("click", mostrarFormularioRegistro);
}

// Función para iniciar sesión
function iniciarSesion(event) {
  event.preventDefault();

  const usuarioIngresado = document.getElementById("usuario").value;
  const contrasenaIngresada = document.getElementById("contrasena").value;
  const mensajeLogin = document.getElementById("mensajeLogin");
  let usuarioEncontrado = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (
      usuarios[i].usuario === usuarioIngresado &&
      usuarios[i].contrasena === contrasenaIngresada
    ) {
      usuarioEncontrado = true;
    }
  }
  if (usuarioEncontrado) {
    window.location.href = "index.html";
  } else {
    mensajeLogin.textContent = "Usuario o contraseña incorrectos.";
    mensajeLogin.className = "text-danger text-center mt-3";
  }
}

// Formulario de registro
function mostrarFormularioRegistro() {
  const contenedor = document.getElementById("formularioLogin");

  contenedor.innerHTML = `
    <div class="card shadow-lg border-0" style="width: 100%; max-width: 420px;">
      <div class="card-body p-4 p-md-5">
        <div class="text-center mb-4">
          <h1 class="h3 fw-bold mb-2">Café Tacuba</h1>
          <p class="text-secondary mb-0">Crear cuenta</p>
        </div>
        <form id="formRegistro">
          <div class="mb-3">
            <label for="nombre" class="form-label fw-semibold">
              Nombre
            </label>
            <input type="text" id="nombre" class="form-control" placeholder="Ingresá tu nombre" required>
          </div>
          <div class="mb-3">
            <label for="apellido" class="form-label fw-semibold">
              Apellido
            </label>
            <input type="text" id="apellido" class="form-control" placeholder="Ingresá tu apellido" required>
          </div>
          <div class="mb-3">
            <label for="nuevoUsuario" class="form-label fw-semibold" >
              Usuario
            </label>
            <input type="text" id="nuevoUsuario" class="form-control" placeholder="Elegí un usuario" required>
          </div>
          <div class="mb-4">
            <label for="nuevaContrasena" class="form-label fw-semibold">
              Contraseña
            </label>
            <input type="password" id="nuevaContrasena" class="form-control" placeholder="Elegí una contraseña" required>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-dark btn-lg">
              Registrarse
            </button>
            <button type="button" id="btnVolverLogin" class="btn btn-outline-dark btn-lg">
              Volver al inicio de sesión
            </button>
          </div>
          <p id="mensajeRegistro" class="text-center mt-3" ></p>
        </form>
      </div>
    </div>
  `;

  const formularioRegistro = document.getElementById("formRegistro");

  formularioRegistro.addEventListener( "submit", registrarUsuario );

  const btnVolverLogin = document.getElementById("btnVolverLogin");

  btnVolverLogin.addEventListener( "click", mostrarFormularioLogin );
}

// Registrar nuevo usuario
function registrarUsuario(event) {
  event.preventDefault();
  const nombre =document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const usuario = document.getElementById("nuevoUsuario").value;
  const contrasena = document.getElementById("nuevaContrasena").value;
  const nuevoUsuario = {
    nombre: nombre,
    apellido: apellido,
    usuario: usuario,
    contrasena: contrasena
  };
  usuarios.push(nuevoUsuario);

  // Guardar los usuarios en localStorage
  localStorage.setItem( "usuarios", JSON.stringify(usuarios) );

  const mensajeRegistro = document.getElementById("mensajeRegistro");

  mensajeRegistro.textContent = "Registro exitoso. Volviendo al inicio de sesión...";

  mensajeRegistro.className = "text-success text-center mt-3";

  setTimeout(() => {
    mostrarFormularioLogin();
  }, 1500);
}

// Mostrar login al cargar
document.addEventListener(
  "DOMContentLoaded",
  () => {
    mostrarFormularioLogin();
  }
)