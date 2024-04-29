
const contenidoPrincipal = document.createElement("div");

const header = document.createElement("header");
const titulo = document.createElement("h2");
titulo.textContent = "Impresoras 3D";
header.appendChild(titulo);

const nav = document.createElement("nav");
const listaNav = document.createElement("ul");

const enlaceDestacadas = document.createElement("a");
enlaceDestacadas.textContent = "Impresoras destacadas";
enlaceDestacadas.href = "#destacadas";

const enlaceMarcas = document.createElement("a");
enlaceMarcas.textContent = "Marcas";
enlaceMarcas.href = "#marcas";

const enlaceOfertas = document.createElement("a");
enlaceOfertas.textContent = "Ofertas";
enlaceOfertas.href = "#ofertas";

const enlaceContacto = document.createElement("a");
enlaceContacto.textContent = "Contacto";
enlaceContacto.href = "#contacto";

const itemDestacadas = document.createElement("li");
const itemMarcas = document.createElement("li");
const itemOfertas = document.createElement("li");
const itemContacto = document.createElement("li");

itemDestacadas.appendChild(enlaceDestacadas);
itemMarcas.appendChild(enlaceMarcas);
itemOfertas.appendChild(enlaceOfertas);
itemContacto.appendChild(enlaceContacto);

listaNav.appendChild(itemDestacadas);
listaNav.appendChild(itemMarcas);
listaNav.appendChild(itemOfertas);
listaNav.appendChild(itemContacto);

nav.appendChild(listaNav);
header.appendChild(nav);

contenidoPrincipal.appendChild(header);

const seccionDestacadas = document.createElement("section");
seccionDestacadas.id = "destacadas";
const tituloDestacadas = document.createElement("h2");
tituloDestacadas.textContent = "Impresoras 3D destacadas";
seccionDestacadas.appendChild(tituloDestacadas);

contenidoPrincipal.appendChild(seccionDestacadas);

const seccionMarcas = document.createElement("section");
seccionMarcas.id = "marcas";
const tituloMarcas = document.createElement("h2");
tituloMarcas.textContent = "Marcas de impresoras 3D";
seccionMarcas.appendChild(tituloMarcas);
contenidoPrincipal.appendChild(seccionMarcas);

const seccionOfertas = document.createElement("section");
seccionOfertas.id = "ofertas";
const tituloOfertas = document.createElement("h2");
tituloOfertas.textContent = "Ofertas en impresoras 3D";
seccionOfertas.appendChild(tituloOfertas);

const contenedorOfertas = document.createElement("div");
contenedorOfertas.classList.add("ofertas");
seccionOfertas.appendChild(contenedorOfertas);

contenidoPrincipal.appendChild(seccionOfertas);

const seccionContacto = document.createElement("section");
seccionContacto.id = "contacto";
const tituloContacto = document.createElement("h2");
tituloContacto.textContent = "Contacto";
seccionContacto.appendChild(tituloContacto);

const formularioContacto = document.createElement("form");
formularioContacto.id = "formulario-contacto";
seccionContacto.appendChild(formularioContacto);

contenidoPrincipal.appendChild(seccionContacto);

document.body.appendChild(contenidoPrincipal);

const footer = document.createElement("footer");
footer.textContent = "© 2024 - Impresoras 3D";
footer.style.color = "white"; 
document.body.appendChild(footer);
