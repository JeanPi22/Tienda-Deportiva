const urlApi = "http://localhost:3000/products";

async function listProducts() {
  const connection = await fetch(urlApi); //Solicitud GET
  const connectionData = await connection.json(); //convertir Respuesta en .json
  console.log(connectionData);
  return connectionData;
}

export const connetionAPI = {
  listProducts
};