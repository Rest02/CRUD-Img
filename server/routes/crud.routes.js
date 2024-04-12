import { Router } from "express";
import { upload } from '../multer.js'

const router = Router();

router.post("/upload", upload.single("image") ,(req, res) => {
  console.log(req.file)
});

export default router;
