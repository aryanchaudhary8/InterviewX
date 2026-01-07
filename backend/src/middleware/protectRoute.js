import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const { userId } = req.auth();

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      let user = await User.findOne({ clerkId: userId });

      if (!user) {
        const clerkUser = await clerkClient.users.getUser(userId);

        const email =
          clerkUser.emailAddresses?.[0]?.emailAddress;

        if (!email) {
          return res
            .status(400)
            .json({ message: "Email not found in Clerk" });
        }

        const name =
          clerkUser.firstName || clerkUser.lastName
            ? `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim()
            : "User";

        user = await User.create({
          clerkId: userId,
          email,
          name,
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
