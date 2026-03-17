import { toNodeHandler } from "better-auth/node";
import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import { auth } from "./app/lib/auth";
import { prisma } from "./app/lib/prisma";
import { globalErrorHandler } from "./app/middleware/globalErrorHandle";
import { notFound } from "./app/middleware/notFound";
import { IndexRoutes } from "./app/routes";

export const app: Application = express();
app.use(express.json());
app.use(cookieParser());

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies

app.use("/api/auth", toNodeHandler(auth));

app.use("/api/v1/", IndexRoutes);
// Basic route
app.get("/", async (req: Request, res: Response) => {
  const specialty = await prisma.specialty.create({
    data: {
      title: "Cardiology",
    },
  });
  res.status(201).json({
    success: true,
    message: "Api is working",
    data: specialty,
  });
});

app.use(globalErrorHandler);
app.use(notFound);
