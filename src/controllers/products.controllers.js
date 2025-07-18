/// Importante;
// Desde el controlador siempre se responde al cliente, solo desde aquí. 👍

// Aquí dejamos toda la lógica de los métodos y las peticiones

// Importamos los models
import * as model from "../models/products.model.js";

// GET ALL
export const getAllProducts = async (req, res) => {
	const products = await model.getAllProducts();

	res.json(products);
};

// SEARCH
export const searchProducts = (req, res) => {
	const { name } = req.query;

	const products = model.getAllProducts();

	const filteredProducts = products.filter((p) =>
		p.name.toLowerCase().includes(name.toLowerCase()),
	);

	res.json(filteredProducts);
};

// GET ID
export const getProductById = async (req, res) => {
	const productsId = req.params.id;

	const products = await model.getAllProducts();

	const product = products.find((p) => p.id === productsId);

	if (!product) {
		return res
			.status(404)
			.json({ Error: "El producto con ese id no existe. " });
	}

	res.json({ product });
};

// POST
export const postProduct = async (req, res) => {
	// Obtenemos los parámetros del cuerpo del archivo
	const { name, price, categories, description } = req.body;

	if (!name || !price || !categories || !description) {
		return res.json({
			message: "Faltan datos: name, price o category.",
		});
	}

	const newProduct = await model.postProduct({
		name,
		price,
		categories,
		description,
	});

	res.status(201).json({ New_Product: newProduct });
};

// PUT
export const putProductId = (req, res) => {
	const products = model.getAllProducts();
	const productsId = parseInt(req.params.id, 10);
	const productsIndex = products.findIndex((p) => p.id === productsId);

	if (productsIndex === -1) {
		return res.status(404).json({ Error: "Producto no encontrado 💤" });
	}

	const { name, price } = req.body;

	products[productsIndex] = { id: productsId, name, price };
	res.json(products[productsIndex]);
};

// DELETE
export const deleteProductId = async (req, res) => {
	const productId = req.params.id;

	const product = await model.deleteProductId(productId);

	if (!product) {
		return res.status(404).json({ Error: "Producto no encontrado 💤 " });
	}

	// código 200 para responde json, 204 para send
	res.status(200).json({ message: "Producto eliminado con exito." });
};
