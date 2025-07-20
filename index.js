// Importamos variables de entorno
import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Apis Rest en Node.js y Express 😄" });
});

// Usamos las rutas exportadas.
// Poner una ruta por defecto.
app.use("/api", productsRouter);

// Se debe usar la ruta del login antes del Middleware para evitar conflicto
import authRouter from "./src/routes/auth.router.js";
// Usamos la ruta del login
app.use(authRouter);

// Middleware para manejar errores 404, por defecto
app.use((req, res, next) => {
	res.status(404).json({ message: "Informacion no valida." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
