import express from "express";
import CoffeeRegistration from "../models/CoffeeRegistration.js";

const router = express.Router();

router.post("/coffee-register", async (req, res) => {
  const data = await CoffeeRegistration.create(req.body);
  res.json({ success: true });
});

router.get("/coffee-registrations", async (req, res) => {
  const data = await CoffeeRegistration.find().sort({ createdAt: -1 });
  res.json(data);
});

export default router;
