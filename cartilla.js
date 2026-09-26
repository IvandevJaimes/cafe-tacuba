const comanderoBtn = document.getElementById("comanderoBtn");
const comanderoContador = document.getElementById("comanderoContador");
const modal = new bootstrap.Modal(document.getElementById("modal"));
const tituloModal = document.getElementById("tituloModal");
const contenidoModal = document.getElementById("contenidoModal");
const footerComandero = document.querySelector(".modal-footer");
const totalComandero = document.getElementById("totalComandero");
const btnHacerPedido = document.getElementById("btnHacerPedido");
const loginBtn = document.getElementById("loginBtn");
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
const btnCerrarSesion = document.getElementById("btnCerrarSesion");
const btnArriba = document.getElementById("btnArriba");

// iniciar sesión
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

const btnUbicacion = document.getElementById("btnUbicacion");
if (btnUbicacion) {
  btnUbicacion.addEventListener("click", () => {
    tituloModal.textContent = "Nuestra ubicación";
    contenidoModal.innerHTML = `
      <div class="mb-3">
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
    footerComandero.classList.add("d-none");
    modal.show();
  });
}

const calcularTotal = () =>
  comandero.reduce(
    (acumulado, producto) =>
      acumulado + Number(producto.precio.replace(/[^0-9]/g, "")),
    0,
  );

btnHacerPedido.addEventListener("click", () => {
  comandero.length = 0;
  comanderoContador.textContent = "0";
  contenedorCartilla.innerHTML = "";
  renderizarCartilla(cartilla);
  tituloModal.textContent = "Pedido enviado";
  contenidoModal.innerHTML = `
    <p class="text-success fs-5 fw-semibold mb-0">
      ¡Gracias! Tu pedido está en camino.
    </p>
  `;
  footerComandero.classList.add("d-none");
});

comanderoBtn.addEventListener("click", () => {
  tituloModal.textContent = "Mi comandero";
  contenidoModal.innerHTML = "";

  if (comandero.length === 0) {
    contenidoModal.innerHTML = `
      <p class="text-secondary">
        Tu comandero está vacío. Tocá las cards de la cartilla para agregar productos.
      </p>
    `;
    footerComandero.classList.add("d-none");
  } else {
    totalComandero.textContent = `$${calcularTotal().toLocaleString("es-AR")}`;
    footerComandero.classList.remove("d-none");
    const columna = document.createElement("div");
    columna.classList.add("d-flex", "flex-column", "gap-2", "text-start");
    contenidoModal.style.maxHeight = "60vh";
    contenidoModal.style.overflowY = "auto";

    const agregados = [];

    comandero.forEach((producto) => {
      if (agregados.includes(producto)) return;
      agregados.push(producto);

      const cantidad = comandero.filter((item) => item === producto).length;

      const card = document.createElement("div");
      card.classList.add(
        "card",
        "shadow-sm",
        "border-0",
        "d-flex",
        "flex-row",
        "align-items-center",
        "overflow-hidden",
      );

      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.loading = "lazy";
      img.style.width = "90px";
      img.style.height = "90px";
      img.style.objectFit = "cover";

      const cardBody = document.createElement("div");
      cardBody.classList.add(
        "card-body",
        "d-flex",
        "align-items-center",
        "justify-content-between",
        "p-3",
      );

      const info = document.createElement("div");

      const h6 = document.createElement("h6");
      h6.classList.add("card-title", "mb-1");
      h6.textContent = producto.nombre;

      const p = document.createElement("p");
      p.classList.add("card-text", "small", "text-secondary", "mb-0");
      p.textContent = producto.precio;

      const agregarBtn = document.createElement("button");
      agregarBtn.classList.add("btn", "btn-outline-primary");
      agregarBtn.textContent = "+";

      const restarBtn = document.createElement("button");
      restarBtn.classList.add("btn", "btn-outline-danger", "ms-2");
      restarBtn.textContent = "-";

      agregarBtn.addEventListener("click", () => {
        comandero.push(producto);
        comanderoContador.textContent = comandero.length;
        cantidadSpan.textContent = `× ${
          comandero.filter((item) => item === producto).length
        }`;
        totalComandero.textContent = `$${calcularTotal().toLocaleString(
          "es-AR",
        )}`;
        footerComandero.classList.remove("d-none");
      });

      restarBtn.addEventListener("click", () => {
        const index = comandero.indexOf(producto);
        if (index > -1) {
          comandero.splice(index, 1);
          comanderoContador.textContent = comandero.length;
          const nuevaCantidad = comandero.filter(
            (item) => item === producto,
          ).length;
          if (nuevaCantidad === 0) {
            columna.removeChild(card);
          } else {
            cantidadSpan.textContent = `× ${nuevaCantidad}`;
          }
          if (comandero.length === 0) {
            contenidoModal.innerHTML = `
              <p class="text-secondary">
                Tu comandero está vacío.
              </p>
            `;
            footerComandero.classList.add("d-none");
          } else {
            totalComandero.textContent = `$${calcularTotal().toLocaleString(
              "es-AR",
            )}`;
          }
        }
      });

      const cantidadSpan = document.createElement("span");
      cantidadSpan.classList.add("fw-bold", "ms-3", "flex-shrink-0");
      cantidadSpan.textContent = `× ${cantidad}`;

      info.appendChild(h6);
      info.appendChild(p);
      cardBody.appendChild(info);
      cardBody.appendChild(agregarBtn);
      cardBody.appendChild(cantidadSpan);
      cardBody.appendChild(restarBtn);
      card.appendChild(img);
      card.appendChild(cardBody);
      columna.appendChild(card);
    });

    contenidoModal.appendChild(columna);
  }

  modal.show();
});

const cartilla = [
  {
    categoria: "Cafés calientes",
    clase: "",
    productos: [
      {
        nombre: "Espresso",
        descripcion: "Café intenso y aromático",
        imagen: "img/americano.webp",
        precio: "$1.500",
        contiene: `
        "Café molido fresco",
        "Agua filtrada",
        "Taza pequeña",
        "Aroma intenso",
        "Cuerpo fuerte"`
      },
      {
        nombre: "Latte",
        descripcion: "Espresso con leche vaporizada",
        imagen: "img/latte.webp",
        precio: "$2.200",
        contiene: `
        "Espresso",
        "Leche vaporizada",
        "Espuma ligera",
        "Taza grande",
        "Opcional: arte latte"`
      },
      {
        nombre: "Cappuccino",
        descripcion: "Espresso, leche espumosa y cacao",
        imagen: "img/cappuccino.webp",
        precio: "$2.400",
        contiene: `
        "Espresso",
        "Leche vaporizada",
        "Espuma abundante",
        "Cacao en polvo",
        "Taza mediana"` 
      },
      {
        nombre: "Mocha",
        descripcion: "Espresso, chocolate y leche",
        imagen: "img/cafe_mocha.jpg",
        precio: "$2.700",
        contiene: `
        "Espresso",
        "Chocolate derretido",
        "Leche vaporizada",
        "Crema opcional",
        "Cacao espolvoreado"` 
      },
      {
        nombre: "Macchiato",
        descripcion: "Espresso con un toque de leche espumada",
        imagen: "img/macchiato.jpeg",
        precio: "$2.100",
        contiene: `
        "Espresso",
        "Espuma de leche",
        "Taza pequeña",
        "Sabor intenso",
        "Toque cremoso"`
      },
    ],
  },
  {
    categoria: "Bebidas frías",
    clase: "bg-light",
    productos: [
      {
        nombre: "Affogato",
        descripcion: "Helado bañado en espresso caliente",
        imagen: "img/affogato.jpg",
        precio: "$2.800",
        contiene: `
        "Helado de vainilla",
        "Espresso caliente",
        "Taza o copa de postre",
        "Textura cremosa",
        "Contraste frío-caliente"`
      },
      {
        nombre: "Iced Latte",
        descripcion: "Latte con hielo y leche fría",
        imagen: "img/icedLatte.jpeg",
        precio: "$2.500",
        contiene: `
        "Espresso",
        "Leche fría",
        "Cubos de hielo",
        "Vaso alto",
        "Sabor suave y refrescante"`
      },
      {
        nombre: "Cold Brew",
        descripcion: "Extracción en frío 12 horas",
        imagen: "img/cafe.JPG",
        precio: "$2.600",
        contiene: `
        "Café molido grueso",
        "Agua filtrada fría",
        "Proceso de 12 horas",
        "Vaso con hielo",
        "Sabor menos ácido"`
      },
      {
        nombre: "Frappé de cacao",
        descripcion: "Hielo, cacao y crema batida",
        imagen: "img/Frappé de cacao.jpeg",
        precio: "$3.000",
        contiene: `
        "Cubos de hielo",
        "Cacao en polvo",
        "Leche fría",
        "Crema batida",
        "Textura espesa y dulce"`
      },
    ],
  },
  {
    categoria: "Infusiones y té",
    clase: "",
    productos: [
      {
        nombre: "Té negro de la casa",
        descripcion: "Con opción de leche o limón",
        imagen: "img/teNegro.jpeg",
        precio: "$1.800",
        contiene: `
        "Hojas de té negro",
        "Agua caliente",
        "Opción de leche",
        "Rodaja de limón",
        "Taza mediana"`
      },
      {
        nombre: "Té verde",
        descripcion: "Suave y refrescante",
        imagen: "img/teverde.jpeg",
        precio: "$1.800",
        contiene: `
        "Hojas de té verde",
        "Agua caliente",
        "Taza pequeña",
        "Aroma herbal",
        "Sabor ligero"`

      },
      {
        nombre: "Infusión de jazmín",
        descripcion: "Floral y delicada",
        imagen: "img/tedejazmin.jpeg",
        precio: "$2.000",
        contiene: `
        "Flores de jazmín",
        "Agua caliente",
        "Taza de porcelana",
        "Aroma floral",
        "Sabor delicado"`
      },
      {
        nombre: "Submarino",
        descripcion: "Cacao a la taza con leche",
        imagen: "img/submarino.jpeg",
        precio: "$2.200",
        contiene:`
        "Tableta de chocolate",
        "Leche caliente",
        "Taza grande",
        "Sabor intenso",
        "Textura cremosa"`
      },
    ],
  },
  {
    categoria: "Dulces y postres",
    clase: "bg-light",
    productos: [
      {
        nombre: "Medialuna",
        descripcion: "Recién horneada",
        imagen: "img/medialuna.jpeg",
        precio: "$900",
        contiene: `
        "Harina de trigo",
        "Manteca",
        "Azúcar",
        "Levadura",
        "Glaseado ligero"`
      },
      {
        nombre: "Brownie",
        descripcion: "Con nueces y chocolate fundido",
        imagen: "img/brownie.jpg",
        precio: "$2.300",
        contiene: `
        "Chocolate amargo",
        "Manteca",
        "Azúcar",
        "Huevos",
        "Nueces picadas"`
      },
      {
        nombre: "Lemon Pie",
        descripcion: "Tarta de limón con merengue",
        imagen: "img/Lemon Pie.jpeg",
        precio: "$2.500",
        contiene: `
        "Base de masa",
        "Crema de limón",
        "Azúcar",
        "Huevos",
        "Merengue italiano"`
      },
      {
        nombre: "Cheesecake",
        descripcion: "Con salsa de frutos rojos",
        imagen: "img/Cheesecake.jpeg",
        precio: "$2.800",
        contiene: `
        "Queso crema",
        "Base de galletas",
        "Azúcar",
        "Huevos",
        "Salsa de frutos rojos"`
      },
      {
        nombre: "Alfajor de maicena",
        descripcion: "Clásico, con dulce de leche",
        imagen: "img/Alfajor de maicena.jpeg",
        precio: "$1.200",
        contiene: `
        "Maicena",
        "Harina",
        "Manteca",
        "Dulce de leche",
        "Coco rallado"`
      },
    ],
  },
];

const comandero = [];

const contenedorCartilla = document.getElementById("contenedorCartilla");

const renderizarCartilla = (cartilla) => {
  cartilla.forEach((categoria) => {
    const seccion = document.createElement("section");
    seccion.classList.add("py-5");
    if (categoria.clase) seccion.classList.add(categoria.clase);

    const container = document.createElement("div");
    container.classList.add("container");

    const h2 = document.createElement("h2");
    h2.classList.add("text-center", "fw-bold", "mb-4");
    h2.textContent = categoria.categoria;

    const row = document.createElement("div");
    row.classList.add("row", "g-4");

    categoria.productos.forEach((producto) => {
      const col = document.createElement("div");
      col.classList.add("col-6", "col-lg-3");

      const card = document.createElement("div");
      card.classList.add("card", "h-100", "shadow-sm", "border-0", "overflow-hidden");

      const ratio = document.createElement("div");
      ratio.classList.add("ratio", "ratio-4x3");

      const img = document.createElement("img");
      img.src = producto.imagen;
      img.classList.add("object-fit-cover");
      img.alt = producto.nombre;
      img.loading = "lazy";
      ratio.appendChild(img);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "d-flex", "flex-column", "p-3");

      const h5 = document.createElement("h5");
      h5.classList.add("card-title", "mb-1");
      h5.textContent = producto.nombre;

      const p = document.createElement("p");
      p.classList.add(
        "card-text",
        "text-secondary",
        "small",
        "mb-0",
        "flex-grow-1",
      );
      p.textContent = producto.descripcion;

      const cardFooter = document.createElement("div");
      cardFooter.classList.add(
        "card-footer",
        "bg-transparent",
        "border-0",
        "pt-0",
        "pb-3",
      );

      const precio = document.createElement("span");
      precio.classList.add("fw-bold", "mb-2", "d-block");
      precio.textContent = producto.precio;

      const botonWrapper = document.createElement("div");
      botonWrapper.classList.add( "d-flex", "justify-content-end", "mt-2");

      const Btnvermas = document.createElement("button");
      Btnvermas.classList.add("btn", "btn-sm", "btn-dark", "mt-2");
      Btnvermas.textContent = "Ver más";


      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardFooter.appendChild(precio);
      cardFooter.appendChild(botonWrapper);
      botonWrapper.appendChild(Btnvermas);
      card.appendChild(ratio);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
      col.appendChild(card);
      row.appendChild(col);

      Btnvermas.addEventListener("click", (e) => {
      e.stopPropagation();
      tituloModal.textContent = producto.nombre;
      contenidoModal.innerHTML = `
      <h6 class="mb-2">Este Producto contiene:</h6>
      <p>${producto.contiene}</p>
      <img src="${producto.imagen}" alt="${producto.nombre}" 
         class="img-fluid rounded mt-3" style="max-height:200px;object-fit:cover;">`;
      footerComandero.classList.add("d-none");
      modal.show();
      });

      card.addEventListener("click", () => {
        comandero.push(producto);
        comanderoContador.textContent = comandero.length;
      });
    });

    container.appendChild(h2);
    container.appendChild(row);
    seccion.appendChild(container);
    contenedorCartilla.appendChild(seccion);
  });
};

renderizarCartilla(cartilla);