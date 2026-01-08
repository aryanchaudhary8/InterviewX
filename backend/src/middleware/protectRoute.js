import { getAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({
        msg: "Unauthorized",
      });
    }

    // find user in db by clerk ID
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("ProtectRoute error:", error);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};
