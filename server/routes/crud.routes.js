import { Router } from "express";
import { upload } from "../multer.js";
import { pool } from "../db.js";
import fs from "fs";

const router = Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  const { filename } = req.file;
  // const imagenBuffer = fs.readFileSync(`public/images/${filename}`);
  const result = await pool.query(
    "INSERT INTO imagetable(image) VALUES (?)",[filename]
  );
  console.log(result);
  res.send("imagen subida con exito");
});

export default router;
