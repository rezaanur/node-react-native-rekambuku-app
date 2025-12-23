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

// Endpoint Books
app.use("/api/books", bookRoutes);

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`server is running on port ${PORT}`);
//   connectDB();
// });

// Root endpoint (opsional agar saat buka domain tidak muncul 'Cannot GET /')
app.get("/", (req, res) => {
  res.send("Backend RekamBuku API is running...");
});
// Endpoint Cron Job untuk menjaga server tetap aktif
app.get("/api/cron", (req, res) => {
  // Validasi keamanan menggunakan Header Authorization
  const authHeader = req.headers["authorization"];

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.error("Percobaan akses Cron ilegal!");
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  console.log("Cron Job Berhasil: Server tetap aktif pada " + new Date().toISOString());

  res.status(200).json({
    success: true,
    message: "Server is awake!",
    timestamp: new Date().toISOString(),
  });
});
// selesai cron job

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
