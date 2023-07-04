/* Estamos utilizando el módulo  https de Node.js para hacer una solicitud POST a una API externa. 
Primero, definimos los datos que queremos enviar en la solicitud POST en formato JSON y 
los convertimos en una cadena utilizando  JSON.stringify() . 
Luego, definimos las opciones de solicitud, incluyendo la URL del punto final de la API, 
el método de solicitud (en este caso, POST), los encabezados y la longitud de los datos.  
 
Después, creamos la solicitud utilizando  https.request()>  y pasamos las opciones de solicitud como argumento.
 La función   https.request()>  devuelve un objeto de solicitud que podemos usar para escribir los datos de la 
 solicitud y manejar la respuesta.  
 
En el código de ejemplo, estamos escribiendo los datos de la solicitud utilizando  req.write()  y 
finalizando la solicitud utilizando  req.end() . También estamos manejando la respuesta de la API utilizando 
el evento  res.on('data')  y escribiendo la respuesta en la consola. 
 
Recuerda que debes reemplazar la URL de la API y los datos de la solicitud con los tuyos propios. 
Además, asegúrate de instalar cualquier dependencia necesaria (como  https en este caso) antes de ejecutar el código. 
 
Espero que esto te haya ayudado. Si tienes alguna pregunta, no dudes en preguntar. */

/* export const enviarSolicitudWS = async (req, res) => {
  try {
    const https = require("https");
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: "584141015267",
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US",
        },
      },
    });

    const options = {
      hostname: "graph.facebook.com",
      path: "/v17.0/101112756371877/messages",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
        Authorization:
          "Bearer " +
          "EAAEEDinZB4nEBAFL16CL7HI52aiuCEOrrRTarTZBQlZAgU7fagvcUu4FWNguODfPpiuec1C7FZA9ZBZACueJBz9VycMnbjUff4xyzHjq9EvHX33qzEHw30JOqT6fuCWZCbLPeeawZCVZBSTnMGLwu58iZA71AdGUdLA0O2p5He183gzRv2utZBlTlWl",
      },
    };

    const request = https.request(options, (response) => {
      console.log('statusCode: ${response.statusCode}');

      response.on('data', (d) => {
        data += d;
      });
    });

    request.on('error', (error) => {
      console.error(error);
    });

    request.end();

    req.write(data);
    req.end();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}; */

export const enviarSolicitudWS = async (req, res) => {
  try {
    const url = 'https://graph.facebook.com/v17.0/101112756371877/messages/';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 
    };
    const body = JSON.stringify({
      "messaging_product": "whatsapp",
      "to": "584141015267",
      "type": "template",
      "template": {
          "name": "hello_world",
          "language": {
              "code": "en_US"
          }
      }
  });
    
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
      .then(response => response.json())
      .then(data => {
        // Aquí puedes trabajar con los datos recibidos
        return res.status(200).json(data);
      })
      .catch(error => {
        // Manejo de errores en caso de que la solicitud falle
        return res.status(500).json(error.message);
      });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
