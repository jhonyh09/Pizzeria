import Client from '../models/client.model.js'

// Método GET para traer todos los clientes
export const getClients = async (req, res) => {
  try {
    // Client.find busca todas los clientes para enviarlos en el res
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Método GET para consultar por Email
export const getClientByEmail = async (req, res) => {
  try {
    // Obtengo el ID de los parametros con req.params
    const { email } = req.params;

    // El metodo findOne consulta en mongo el registro por un parametro especifico
    const client = await Client.findOne({email: email});
    //Validación de cliente existente
    if (!client) return res.status(404).json({ msg: "Cliente no encontrado" });

    res.status(200).json(client);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Método POST para crear cliente
export const createClient = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newClient = new Client({
        name,
        email,
        phone
    });
    if (!newClient.email) return res.status(404).json({ msg: "Email vacío" });
    if (!newClient.phone) return res.status(404).json({ msg: "Teléfono vacío" });
    // Guardamos el registro nuevo con la funcion save()
    const result = await newClient.save();

    res.status(200).json(result);
  } catch (error) {
    return res.json(error.message);
  }
};

// Método PUT para actualizar por ID
export const updateClient = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    // Actualizamos el registro con el Id enviado utilizando la funcion findByIdAndUpdate y la opción new es para que devuelva el objeto modificado
    const client = await Client.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true }
    );

    //Validate query
    if (!client) return res.status(404).json({ status: "Updated Faild" });
    // Return Query
    return res.status(200).json({ client });
  } catch (error) {
    return res.json(error.message);
  }
};

// Método DELETE para borrar por ID
export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    // Se utiliza la función findByIdAndRemove para eliminar el registro ubicado por el ID enviado
    const client = await Client.findByIdAndRemove(id);
    // Valida que el cliente existe
    if (!client)
      return res.status(404).json({ msg: "Cliente no encontrado" });

    return res.status(200).json(client);
  } catch (error) {
    return res.json(error.message);
  }
};