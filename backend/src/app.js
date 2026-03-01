import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

/* ================= SECURITY ================= */
app.use(helmet());

/* ================= CORS CONFIG ================= */
/*
  Allows:
  - Local development
  - Production frontend (from env variable)
*/

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

/* ================= MIDDLEWARE ================= */
app.use(express.json());

/* ================= ROUTES ================= */
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Backend is running",
  });
});

app.use("/api/contact", contactRoutes);

/* ================= ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;