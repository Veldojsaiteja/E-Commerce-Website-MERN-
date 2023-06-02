import express from "express";
import {
  registerController,
  loginController,
  updateProfileController,
} from "../controllers/authController.js";

const router = express.Router();

// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

router.put("/profile", updateProfileController);

export default router;
