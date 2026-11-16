import { Router } from "express";

import { health, version } from "#controllers/health.controller.js";

const router = Router();

router.get("/", health);

router.get("/version", version);

export default router;
