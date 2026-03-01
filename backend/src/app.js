import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

/* ================= TRUST PROXY ================= */
/* Required for Render / Railway / reverse proxy */
app.set("trust proxy", 1);

/* ================= SECURITY ================= */
app.use(
  helmet({
    crossOriginResourcePolicy: false, // prevents CORS image/font issues
  })
);

/* ================= BODY PARSER ================= */
app.use(express.json({ limit: "10kb" }));

/* ================= CORS CONFIG ================= */

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

/* ================= CORS CONFIG ================= */

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman

      // Allow localhost
      if (origin === "http://localhost:5173") {
        return callback(null, true);
      }

      // Allow any Vercel deployment
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      console.warn("Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Backend is running",
    environment: process.env.NODE_ENV || "development",
  });
});

/* ================= ROUTES ================= */
app.use("/api/contact", contactRoutes);

/* ================= GLOBAL ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);

  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal server error",
  });
});

export default app;