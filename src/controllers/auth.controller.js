import jwt from "jsonwebtoken";

const default_user = {
	id: 1,
	email: "hBqgG@example.com",
	password: "123456",
};

export const login = (req, res) => {
	const { email, password } = req.body;

	// Validar el usuario, no usar información sensible
	const user = { id: 1 };

	if (email == default_user.email && password == default_user.password) {
		const payload = { user };
		const expiration = { expiresIn: "1h" };

		// Generar el token - validar la información y firma
		const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);

		res.json({ token });
	} else {
		return res.sendStatus(401);
	}

	res.json({ message: "Ok" });
};
