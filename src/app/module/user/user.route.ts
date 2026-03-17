import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { UserController } from "./user.controller";
import { createDoctorZodSchema } from "./user.validate";
const router = express.Router();
router.post(
  "/create-doctor",
  validateRequest(createDoctorZodSchema),
  UserController.createDoctor,
);
// router.post("/create-admin", UserController.createDoctor);
// router.post("/create-superAdmin", UserController.createDoctor);

export const UserRoutes = router;
