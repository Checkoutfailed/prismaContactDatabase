import { Router } from "express";
import * as SyncController from "../controllers/sync.controller";

const router = Router();

router.post("/backlog", SyncController.syncBackLog);
router.post("/local", SyncController.syncLocalContacts);

export default router;