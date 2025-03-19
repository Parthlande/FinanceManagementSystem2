import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"; // Load environment variables
import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";

// Load environment variables from .env
dotenv.config(); 

// Initialize Express server
const app = express();
const port = process.env.PORT || 4000; // Use PORT from .env or default to 4000

// Connect to Database
connectDB();

// Middleware
app.use(cors()); // Allow frontend requests
app.use(express.json()); // JSON request body parsing
app.use(bodyParser.urlencoded({ extended: false })); // URL-encoded form data

// Routes
app.use("/api/v1", transactionRoutes); // Transaction routes (credit/debit)
app.use("/api/auth", userRoutes); // User routes (login/signup)

// Root route
app.get("/", (req, res) => {
  res.send("FinManager Server is working");
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server is listening on http://localhost:${port}`);
});
