import { Router } from "express";

const router = Router();

import { login } from "../controllers/auth.controller.js";

// Siempre para manejar información vencible se hace con post,
// get invulnerable
router.post("/login", login);

export default router;
