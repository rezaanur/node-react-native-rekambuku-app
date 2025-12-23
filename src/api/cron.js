// // backend/api/cron.js
// export default function handler(req, res) {
//   // Cek keamanan dari Vercel
//   const authHeader = req.headers["authorization"];
//   if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   console.log("Cron Job Berhasil dijalankan!");
//   return res.status(200).json({ success: true, message: "Server is awake!" });
// }
