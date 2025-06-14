import express from "express";

const app = express();

const productos = [
  { id: 1, nombre: "RTX 3060 12 VRAM", precio: 300, categoria: "GPU" },
  { id: 2, nombre: "RX 9060 XT 16 VRAM", precio: 400, categoria: "GPU" },
  { id: 3, nombre: "GTX 1660 Super 6 VRAM", precio: 200, categoria: "GPU" },
];

app.get("/", (req, res) => {
  res.send("<h1> Hola desde la API Rest, usando Nodemon.<h1>");
});

// Ruta para obtener todos los productos
app.get("/productos", (req, res) => {
  res.json(productos);
});

// Ruta para obtener los productos por id
app.get("/productos/:id", (req, res) => {
  const productosId = productos.find(
    (item) => item.id === parseInt(req.params.id),
  );
  res.json(productosId);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
