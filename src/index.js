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

// Cron Job Endpoint
// Buka file src/index.js
// Masukkan kode ini setelah app.use(cors())

app.get("/api/cron", (req, res) => {
  try {
    // 1. Ambil Header Authorization
    const authHeader = req.headers["authorization"];

    // 2. Validasi dengan Secret dari Environment Variables
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      console.error("Gagal: Secret tidak cocok!");
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // 3. Logika yang ingin dijalankan
    console.log("Cron Job manual run triggered! Server tetap aktif.");

    res.status(200).json({
      success: true,
      message: "Keep-alive successful",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Cron Crash Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
// End cron

// Root endpoint (opsional agar saat buka domain tidak muncul 'Cannot GET /')
app.get("/", (req, res) => {
  res.send("Backend RekamBuku API is running...");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
