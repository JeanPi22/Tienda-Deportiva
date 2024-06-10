const urlApi = "http://localhost:3000/products";

async function listProducts() {
  const connection = await fetch(urlApi); //Solicitud GET
  const connectionData = await connection.json(); //convertir Respuesta en .json
  console.log(connectionData);
  return connectionData;
}

async function sendProduct(name, price, image) {
  //Solicitud POST
  const connection = await fetch(urlApi, {
    method: "POST",
    headers:{"content-type" : "application/json"},
    body:JSON.stringify({
      name:name,
      price:price,
      image:image
    })
  })  
  
  if (!connection.ok) {
    throw new Error("Ha ocurrido un error al crear el producto");
  }

  const connectionData = await connection.json(); //convertir Respuesta en .json

  return connectionData
}

export const connetionAPI = {
  listProducts,
  sendProduct
};