export const enviarSolicitudWS = async (req, res) => {
  try {
    const url = 'https://graph.facebook.com/v17.0/101112756371877/messages/';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer EAAEEDinZB4nEBAFNKgl8mtGHYcDfRysQd6eiEZAnf5DP4SB5bX7jZCiUkEjCWs2HCnuZCCQ4iijgMvuGuCMigWkuYCj81sCNSbID3P3aNDMnpPzr1Jeta5l8Lnr4tSCG0R1NpDFKIzDV4N7T5BObx9Dv0ZC1uwf30Pdo5fXqUOwPn4QSwVRFu'
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
