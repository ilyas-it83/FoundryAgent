import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is healthy" });
});

// TODO: Add routes for /api/teams, /api/players, /api/matches, /api/news, /api/polls, /api/standings

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
