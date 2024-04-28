import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import OpenAI from 'openai'; // Import OpenAI from the correct module
import cors from 'cors';
import bodyParser from 'body-parser'; // Import bodyParser

dotenv.config();

const jwtPassword = process.env.JWT_SECRET;
const openaiKey = process.env.OPENAI_API_KEY;

// Connect to MongoDB
await mongoose.connect(process.env.MONGODB_URI);
console.log("MongoDB connected");

// Define the User model
const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Use bodyParser.json() middleware

const PORT = process.env.PORT || 5001;

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
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ msg: 'No token provided' });
    }
    const token = req.headers.authorization.split(" ")[1]; // Extract the token
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
app.post('/scenario', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'No question provided' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: `Please provide analysis and advice on: ${question}`
      }]
    });

    res.json({ answer: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error("Failed to call OpenAI API:", error);
    res.status(500).json({ error: 'Error processing your question' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
