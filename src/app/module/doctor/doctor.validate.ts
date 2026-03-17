import { z } from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const updateDoctorZodSchema = z.object({
  doctor: z
    .object({
      name: z
        .string("Name must be a string")
        .min(5, "Name must be at least 5 characters long")
        .max(50, "Name must be less than 50 characters long")
        .optional(),

      email: z.email("Invalid email address").optional(),

      profilePhoto: z
        .string()
        .url("Profile photo must be a valid URL")
        .optional(),

      contactNumber: z
        .string()
        .min(10, "Contact number must be at least 10 characters")
        .max(14, "Contact number must be less than 14 characters")
        .optional(),

      address: z
        .string()
        .min(10, "Address must be at least 10 characters")
        .max(100, "Address must be less than 100 characters")
        .optional(),

      registrationNumber: z.string().optional(),

      experience: z
        .number("Experience must be a number")
        .int("Experience must be an integer")
        .nonnegative("Experience cannot be negative")
        .optional(),

      gender: z.enum([Gender.MALE, Gender.FEMALE]).optional(),

      appointmentFee: z
        .number("Appointment fee must be a number")
        .nonnegative("Appointment fee cannot be negative")
        .optional(),

      qualification: z
        .string("Qualification must be a string")
        .max(100, "Qualification must be less than 100 characters")
        .optional(),

      currentWorkingPlace: z
        .string()
        .min(2, "Current working place must be at least 2 characters")
        .max(100, "Current working place must be less than 100 characters")
        .optional(),

      designation: z
        .string()
        .min(2, "Designation must be at least 2 characters")
        .max(100, "Designation must be less than 100 characters")
        .optional(),
    })
    .optional(),

  specialties: z.array(z.string().uuid()).optional(),
});
