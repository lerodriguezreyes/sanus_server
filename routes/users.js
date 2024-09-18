import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/intake", async (req, res) => {
  try {
    const { name, position_spanish, position_english, email, profilePicURL } = req.body;

    //CHECKS IF REQ BODY HAS ALL INFO
    if (!name || !position_spanish ||!position_english || !email) {
      return res.status(400).json({
        message: "Please provide the required information to create user.",
      });
    }

    const foundUser = await User.findOne({ $or: [{ email }, { name }] });

    if (foundUser) {
      return res
        .status(400)
        .json({ message: "The email or name already exists." });
    }

    // Regex to validate email (checks if theres word@word.com format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: "Provide a valid email address." });
      return;
    }

    // Create new user
    const createdUser = await User.create({
      name,
      position_spanish,
      position_english,
      email,
      profilePicURL,
    });

    // Respond with success
    res.status(201).json({ message: "User created successfully", createdUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the user", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ message: "These are all the users", users });
  } catch (error) {
    console.log("error getting all the users", error);
    res.status(500).json(error);
  }
});

export default router;
