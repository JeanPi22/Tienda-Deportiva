import { connetionAPI } from "./conexionAPI.js";

const formProduct = document.querySelector("[data-product]"); //data attribute en el Html

//Función para crear un producto
async function createProduct(event){

  // Cancelar el comportamiento predeterminado del "event".
  event.preventDefault();

  // Declarar variables donde se almacenan los datos de cada input.
  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  try {
    //Se llama la función "sendProduct()" de la conexionAPI.js
    await connetionAPI.sendProduct(name, price, image);
    alert("Se creo el producto correctamente")
  } catch (error) {
    alert(error);
  }
}

// Evento botón para crear producto y enviar a la base de datos.
formProduct.addEventListener("submit", event => createProduct(event));