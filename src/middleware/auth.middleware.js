// // codingan Lama
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const protectRoute = async (req, res, next) => {
//   try {
//     // get token from headers
//     const token = req.headers("Authorization").replace("Bearer ", "");
//     if (!token) {
//       return res.status(401).json({
//         message: "No authentication token, access denied !",
//       });
//     }

//     // verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // find user by id
//     const user = await User.findById(decoded.userId).select("-password");
//     if (!user) {
//       return res.status(401).json({
//         message: "token is not valid, access denied !",
//       });
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     console.log("Authentication error", error.message);
//     res.status(500).json({ message: "Token is not valid" });
//   }
// };

// export default protectRoute;
// // end codingan lama

import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protectRoute = async (req, res, next) => {
  try {
    // PERBAIKAN: Gunakan req.headers.authorization atau req.header('Authorization')
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No authentication token, access denied!",
      });
    }

    // Ambil token setelah kata "Bearer "
    const token = authHeader.split(" ")[1];

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // find user by id
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({
        message: "User not found, access denied!",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Authentication error:", error.message);
    // Jika token salah atau expired, kirim status 401, bukan 500
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default protectRoute;
