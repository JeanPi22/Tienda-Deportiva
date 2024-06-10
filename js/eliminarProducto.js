import { connetionAPI } from "./conexionAPI.js";

const listCard = document.querySelector("[data-card]"); //data attribute en el Html

//Función para crear un producto
async function deleteProduct(event){

  // Se verifica si el click fue en un ícono de basura
  if (event.target.classList.contains('bxs-trash')){
    // Cancelar el comportamiento predeterminado del "event".
    event.preventDefault();
  }

  // Declarar variable donde se almacena el id del producto.
  const id = event.target.dataset.id;

  try {
    //Se llama la función "deleteProduct()" de la conexionAPI.js
    await connetionAPI.deleteProduct(id);
    alert("Se elimino el producto correctamente");
    // Eliminar la tarjeta del DOM
    event.target.closest('.card').remove();
  } catch (error) {
    alert(error);
  }
}

// Evento botón para crear producto y enviar a la base de datos.
listCard.addEventListener("click", event => deleteProduct(event));