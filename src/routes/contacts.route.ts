import { Router } from "express";
import * as ContactController from "../controllers/contacts.controller";

const router = Router();

router.get("/", ContactController.getContacts);
router.post("/create", ContactController.createContacts);
router.put("/update", ContactController.updateContact);
router.delete("/delete", ContactController.deleteContact);

export default router;