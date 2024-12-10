import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
import programActions from "./modules/program/programActions";

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.browse);
router.post("/api/programs", programActions.browse);

/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Define 'Welcome' route
import sayWelcome from "./sayActions";

router.get("/", sayWelcome);

/* ************************************************************************* */

export default router;
