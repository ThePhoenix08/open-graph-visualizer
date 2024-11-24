import express, { RequestHandler } from "express";
import MetadataController from "../controllers/metadata.controller.js";

const router = express.Router();

router.post("/extract", MetadataController.extractMetaData as RequestHandler);
router.get("/get", MetadataController.getMetaData as RequestHandler);

export default router;
