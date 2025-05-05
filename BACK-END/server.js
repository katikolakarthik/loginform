import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
mongoose.connect("mongodb://localhost:27017/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.post("/api/users", async (req, res) => {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
});
app.get("/api/users/get", async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});
 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

