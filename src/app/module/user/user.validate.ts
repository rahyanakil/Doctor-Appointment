import z from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const createDoctorZodSchema = z.object({
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be less than 20 characters long"),
  doctor: z.object({
    name: z
      .string("Name is required and must be string")
      .min(5, "Name must be at least 5 characters long")
      .max(20, "Name must be less than 20 characters long"),
    email: z.email("Invalid email address"),
    contactNumber: z
      .string("Contact number is required")
      .min(10, "Contact number must be at least 10 characters long")
      .max(14, "Contact number must be less than 14 characters long"),
    address: z
      .string("Address is required")
      .min(10, "Address must be at least 10 characters long")
      .max(100, "Address must be less than 100 characters long")
      .optional(),

    registrationNumber: z.string("Registration number is required"),
    experience: z
      .int("Experience is an Integer")
      .nonnegative("Experience cannot be negative")
      .optional(),
    gender: z.enum(
      [Gender.MALE, Gender.FEMALE],
      "Gender Must be MALE or FEMALE",
    ),
    appointmentFee: z
      .number("Appointment fee must be a number")
      .nonnegative("Appointment fee cannot be negative"),
    qualification: z
      .number("Qualification must be a number")
      .nonnegative("Qualification cannot be negative"),
    currentWorkingPlace: z
      .string("Current working place is required")
      .min(2, "Current working place must be at least 2 characters long")
      .max(50, "Current working place must be less than 50 characters long"),
    designation: z
      .string("Designation is required")
      .min(2, "Designation must be at least 2 characters long")
      .max(50, "Designation must be less than 50 characters long"),
  }),
  specialties: z
    .array(z.uuid(), "Specialties must be an array of string")
    .min(1, "At least one specialty is required"),
});
