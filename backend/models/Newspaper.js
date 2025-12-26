import mongoose from "mongoose";

const newspaperSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Newspaper", newspaperSchema);
