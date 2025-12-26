import express from "express";
import multer from "multer";
import Newspaper from "../models/Newspaper.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/newspapers", upload.single("image"), async (req, res) => {
  await Newspaper.create({
    title: req.body.title,
    image: req.file.filename,
  });
  res.json({ success: true });
});

router.get("/newspapers", async (req, res) => {
  const data = await Newspaper.find().sort({ createdAt: -1 });
  res.json(data);
});

export default router;
