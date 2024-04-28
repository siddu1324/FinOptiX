const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const jwtPassword = "123456";
const cors = require('cors');



// Connect to MongoDB
mongoose.connect('mongodb+srv://kunalsingh909090:XKsiFgTxA9wBviFM@cluster0.hyny3zd.mongodb.net/new_db');

// Define the User model
const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());
app.use(cors());

// Function to check if user exists and password is correct
async function userExists(username, password) {
    const user = await User.findOne({ username });
    return user && user.password === password;
}

// Login endpoint
app.post("/login", async function(req, res){
    const { username, password } = req.body;

    if(!await userExists(username, password)) {
        return res.status(403).json({
            msg: "Invalid username or password"
        });
    }
    const token = jwt.sign({ username: username }, jwtPassword);
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

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
