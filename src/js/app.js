document.addEventListener("DOMContentLoaded", function () {
  navegacioFija();
  creargaleria();
  resaltar();
  scrollNav();
});

function navegacioFija() {
  const header = document.querySelector(".header");
  const festival = document.querySelector(".sobre-festival");

  window.addEventListener("scroll", function () {
    if (festival.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

function creargaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  const cantidadImagenes = 16;

  for (let i = 1; i <= cantidadImagenes; i++) {
    const imagen = document.createElement("img");
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "imagen galeria";

    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(i) {
  const imagen = document.createElement("img");
  imagen.src = `src/img/gallery/full/${i}.jpg`;
  imagen.alt = "imagen galeria";
  // generar modal
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // boton cerrar modal

  const cerrarBtnm = document.createElement("button");
  cerrarBtnm.textContent = "X";
  cerrarBtnm.classList.add("btn-cerrar");

  cerrarBtnm.onclick = cerrarModal;

  modal.appendChild(imagen);
  modal.appendChild(cerrarBtnm);

  modal.onclick = cerrarModal;

  const body = document.querySelector("body");
  body.appendChild(modal);
  body.classList.add("overflow");
}

function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fadeUp");

  setTimeout(() => {
    modal?.remove();
    document.body.classList.remove("overflow");
  }, 450);
}
function resaltar() {
  document.addEventListener("scroll", function () {
    const section = document.querySelectorAll("section");
    const links = document.querySelectorAll(".navegacion-principal a");

    let actual = "";

    section.forEach((section) => {
      const sectionnTop = section.offsetTop;
      const sectionHeigth = section.clientHeight;
      if (window.scrollY >= sectionnTop - sectionHeigth / 3) {
        actual = section.id;
      }
    });
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + actual) {
        link.classList.add("active");
      }
    });
  });
}
function scrollNav() {
  const navLinks = document.querySelectorAll(".navegacion-principal a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionScroll = e.target.getAttribute("href");
      const section1 = document.querySelector(sectionScroll);

      section1.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
