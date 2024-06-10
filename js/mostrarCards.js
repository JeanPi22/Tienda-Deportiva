import { connetionAPI } from "./conexionAPI.js";

const listCard = document.querySelector("[data-card]"); //data attribute en el Html

export default function createCard (name, price, image) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <div class="card__img">
    <img src="${image}" alt="" class="card__img--src">
  </div>
  <span></span>
  <p class="card__name">${name}</p>
  <div class="card__container--price">
    <p class="card__price">${price}</p>
    <i class='bx bxs-trash' ></i>
  </div>
  `;
  return card;
}

async function listProducts() {
  try {
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