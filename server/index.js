import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connnectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("It`s A.I.");
});

const startServer = async () => {
  try {
    connnectDB(process.env.MONGO_DB_URL);
    app.listen(8080, () =>
      console.log("server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
