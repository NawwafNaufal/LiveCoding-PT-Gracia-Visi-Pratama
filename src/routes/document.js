import express from "express";
import { createDocumentController} from "../controllers/document/createDocumentController.js";
import { listDocumentsController } from "../controllers/document/listDocumentsController.js";
import { detailDocumentController } from "../controllers/document/detailDocumentController.js";
import { updateDocumentController } from "../controllers/document/updateDocumentController.js";
import { upload } from "../middleware/uploadMiddleware.js";
import { validate } from "../middleware/validationMiddleware.js";
import { createDocumentSchema, updateDocumentSchema } from "../validation/documentValidation.js";

const router = express.Router();

router.post("/", upload.single("file"), validate(createDocumentSchema), createDocumentController);
router.get("/", listDocumentsController);
router.get("/:id", detailDocumentController);
router.patch("/:id", upload.single("file"), validate(updateDocumentSchema), updateDocumentController);

export default router;
