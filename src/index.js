import express from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Jalankan koneksi database di luar listen agar lebih stabil di serverless
connectDB();

// Endpoint Authentication
app.use("/api/auth", authRoutes);

app.use("/api/books", bookRoutes);

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`server is running on port ${PORT}`);
//   connectDB();
// });

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
