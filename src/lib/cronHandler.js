export const handleCron = (req, res) => {
  try {
    const authHeader = req.headers["authorization"];

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      console.error("Gagal: Secret tidak cocok!");
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

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
};
