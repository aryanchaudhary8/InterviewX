import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import dotenv from "dotenv";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

dotenv.config();

const app = express();

/* =========================
   CORS (FINAL FIX)
========================= */

/**
 * ✔ Allows http://localhost:any-port (5173, 5174, etc.)
 * ✔ Allows cookies (Clerk auth)
 * ✔ NO throwing errors
 * ✔ NO missing headers
 */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());
app.use(clerkMiddleware());

/* =========================
   ROUTES
========================= */

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

/* =========================
   START SERVER
========================= */

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("✅ Server running on port:", ENV.PORT);
    });
  } catch (error) {
    console.error("💥 Error starting server:", error);
  }
};

startServer();
