import { connetionAPI } from "./conexionAPI.js";

const listCard = document.querySelector("[data-card]"); //data attribute en el Html

// Función para formatear precio
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

//Función para crear card de productos
export default function createCard (name, price, image) {

  // Llamado de la función ppara formatear precio
  const formatPrice = formatNumber(price);

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <div class="card__img">
    <img src="${image}" alt="" class="card__img--src">
  </div>
  <span></span>
  <p class="card__name">${name}</p>
  <div class="card__container--price">
    <p class="card__price">$${formatPrice}</p>
    <i class='bx bxs-trash' ></i>
  </div>
  `;
  return card;
}

async function listProducts() {
  try {
    //Se asigna a la variable "listApi" la función "listProducts()" de la conexionAPI.js
    const listApi = await connetionAPI.listProducts();
    listApi.forEach(card => listCard.appendChild(
      createCard(card.name, card.price, card.image)
    ));
  }
  catch (error) {
    card.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión</h2>`
  }
}

listProducts();