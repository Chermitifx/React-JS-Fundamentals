const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Register a new user 

exports.registerUser = async (req, res) => {
    const { Username, Email, Password ,Role} = req.body;
    console.log(req.body);
 
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ Username });
        if (existingUser) {
            return res.status(400).send({ message: "User already exists." });
        }

        // Hash the Password before saving
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create a new user
        const newUser = new User({
            Username,
            Email,
            Password: hashedPassword
        }); 
        // Save the user to the database
        await newUser.save();
        res.status(201).send({ message: "User registered successfully!" });
    } 
    catch (error) {
        res.status(500).send({ message: "An error occurred during registration." });
    }
};


// ------------------------- Login user
exports.loginUser = async (req, res) => {
    const { Email, Password } = req.body;

    // Validate input
    if (!Email || !Password) {
        return res.status(400).send({ message: "Email and Password are required." });
    }

    try {
        // Find the user by Email
        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(401).send({ message: "Invalid Email or Password." });
        }

        // Compare the provided Password with the hashed Password
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid Email or Password." });
        }

        // Create a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, Email: user.Email },
            "Z3r0s@f3cjsjqpphA$Jkf9b1QpL3R8D1zY2cV", // Ensure you have this in your .env file
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        res.status(200).send({ message: "Login successful!", token });
    } catch (error) {
        res.status(500).send({ message: "An error occurred during login." });
    }
};


// ------------------------- Find User by Email 
/*
exports.findUserByEmail = async (req, res) => {
    const { Email } = req.body;

    // Validate input
    if (!Email) {
        return res.status(400).send({ message: "Email is required." });
    }

    try {
        // Find the user by Email
        const user = await User.findOne({ Email });
        
        if (!user) {
            return res.status(404).send({ message: "User not found with this email." });
        }

        // Return the user's username along with a success message
        res.status(200).send({ message: "User found successfully!", username: user.Username });
    } catch (error) {
        res.status(500).send({ message: "An error occurred while retrieving the user." });
    }
};
*/


// ------------------------- Find User by Email 
// ------------------------- Find User by Email 
exports.findUserByEmail = async (req, res) => {
    const { Email } = req.query; // Extract email from query parameters

    // Validate input
    if (!Email) {
        return res.status(400).send({ message: "Email is required." });
    }

    try {
        // Find the user by Email
        const user = await User.findOne({ Email });
        
        if (!user) {
            return res.status(404).send({ message: "User not found with this email." });
        }

        // Return the user's name and role along with a success message
        res.status(200).send({ 
            message: "User found successfully!", 
            name: user.Username, 
            role: user.Role 
        });
    } catch (error) {
        res.status(500).send({ message: "An error occurred while retrieving the user." });
    }
};



