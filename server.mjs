import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import OpenAI from 'openai'; // Import OpenAI from the correct module
import cors from 'cors';

dotenv.config();

const jwtPassword = process.env.JWT_SECRET;
const openaiKey = process.env.OPENAI_API_KEY;

// Connect to MongoDB
await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log("MongoDB connected");

// Define the User model
const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());
app.use(cors());

// Create OpenAI client
const openai = new OpenAI({
  apiKey: openaiKey
});

// Function to check if user exists and password is correct
async function userExists(username, password) {
    const user = await User.findOne({ username });
    return user && user.password === password;
}

// Login endpoint
app.post("/login", async function(req, res){
    const { username, password } = req.body;
    if (!await userExists(username, password)) {
        return res.status(403).json({
            msg: "Invalid username or password"
        });
    }
    const token = jwt.sign({ username }, jwtPassword);
    res.json({
        token,
    });
});

// Users endpoint to demonstrate token verification
app.get("/users", function(req, res){
    const token = req.headers.authorization.split(" ")[1]; // Assumes Bearer Token
    try {
        const decoded = jwt.verify(token, jwtPassword);
        res.json({
            msg: "Access granted",
            user: decoded.username
        });
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid token!"
        });
    }
});

// Scenario Planning endpoint using OpenAI
app.post("/scenario", async (req, res) => {
    const { question } = req.body;
    if (!question) {
        return res.status(400).json({ error: "No question provided" });
    }
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Change to gpt-3.5-turbo or gpt-4 if available in your plan
            prompt: question,
            max_tokens: 150,
            messages: [],
            
        });

        res.json({ answer: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error asking question:', error);
        res.status(500).json({ msg: "Error processing your question", details: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
