import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file from `back/`
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error("⚠️ MongoDB connection string (MONGO_URI) is missing in .env");
        }

        console.log("✅ MongoDB URI Loaded:", mongoURI);
        console.log("✅ Using Database: FinManager");

        await mongoose.connect(mongoURI, {
            dbName: "FinManager", // Fixed: Use the correct database name
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected to database: FinManager");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); // Exit process on failure
    }
};
