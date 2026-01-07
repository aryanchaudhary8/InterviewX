import express from "express";
import path from "path";
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
const __dirname = path.resolve();

/* =========================
   CORS CONFIG (FINAL)
========================= */

const allowedOrigins = [
  "http://localhost:5173",
  "https://interview-x-khaki.vercel.app"
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
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
