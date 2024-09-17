import express from "express";
import User from "../models/User";

const router = express.Router();

// router.post("/intake", async (req,res) = {
//     try {
//         const { name, position, email, profilePicUrl } = req.body;
    
//         //CHECKS IF REQ BODY HAS ALL INFO 
//                 if (!name || !position || !email || !profilePicUrl) {
//           return res
//             .status(400)
//             .json({ message: "Please provide the required information to create user." });
//         }
    
//         const foundUser = await User.findOne({ $or: [{ email }, { username }] });
    
//         if (foundUser) {
//           return res
//             .status(400)
//             .json({ message: "The email or name was already taken." });
//         }
    
//         // Regex to validate email (checks if theres word@word.com format)
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//         if (!emailRegex.test(email)) {
//           res.status(400).json({ message: "Provide a valid email address." });
//           return;
//         }
    
//         // Use regex to validate the password format
//         const passwordRegex =
//           /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/;
//         if (!passwordRegex.test(password)) {
//           res.status(400).json({
//             message:
//               "Password must have at least 6 characters and contain at least one number, one lowercase, one uppercase letter and a special character.",
//           });
//           return;
//         }
    
//         const salts = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(password, salts);
    
//         const createdUser = await User.create({
//           email,
//           username,
//           password: hashedPassword,
//         });
    
//         res.status(201).json({ message: "User created succesfully", createdUser });
//       } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//       }
// })