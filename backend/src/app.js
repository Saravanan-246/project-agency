import dotenv from "dotenv";
dotenv.config(); // MUST be first

import express from "express";
import cors from "cors";
import helmet from "helmet";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

/* ================= SECURITY ================= */
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

/* ================= MIDDLEWARE ================= */
app.use(express.json());

/* ================= ROUTES ================= */
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

app.use("/api/contact", contactRoutes);

/* ================= ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

export default app;