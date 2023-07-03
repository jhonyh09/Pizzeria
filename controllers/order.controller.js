import Order from "../models/order.model.js";

// Método GET para traer todos los pedidos
export const getOrders = async (req, res) => {
  try {
    // Order.find busca todas las ordenes para enviarlas en el res
    const orders = await Order.find().populate(['products','client']);
    res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Método GET para consultar pedidos por ID
export const getOrdersById = async (req, res) => {
  try {
    // Obtengo el ID de los parametros con req.params
    const { id } = req.params;
    // El metodo findById consulta en mongo el registro por ID
    const order = await Order.findById(id).populate(['products','client']);
    //Validación de pedido existente
    if (!order) return res.status(404).json({ msg: "Orden no encontrada" });

    res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Método POST para crear orden
export const createOrder = async (req, res) => {
  try {
    //Obtenemos el listado de productos y el usuario y los guardamos en la variable newOrder
    const { products, client } = req.body;
    const newOrder = new Order({
        products,
        client
    });
    // Guardamos el registro nuevo con la funcion save()
    const result = await newOrder.save();

    res.status(200).json(result);
  } catch (error) {
    return res.json(error.message);
  }
};

// Método PUT para actualizar por ID
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { client, products } = req.body;
    // Actualizamos el registro con el Id enviado utilizando la funcion findByIdAndUpdate y la opción new es para que devuelva el objeto modificado
    const order = await Order.findByIdAndUpdate(
      id,
      { products, client },
      { new: true }
    );

    //Validate query
    if (!order) return res.status(404).json({ status: "Updated Faild" });
    // Return Query
    return res.status(200).json({ order });
  } catch (error) {
    return res.json(error.message);
  }
};

// Método DELETE para borrar por ID
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    // Se utiliza la función findByIdAndRemove para eliminar el registro ubicado por el ID enviado
    const order = await Order.findByIdAndRemove(id);
    // Valida que la orden existe
    if (!order)
      return res.status(404).json({ msg: "Orden no encontrada" });

    return res.status(200).json(order);
  } catch (error) {
    return res.json(error.message);
  }
};
