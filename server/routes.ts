import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { loginSchema } from "../shared/schema.js";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Login endpoint
  app.post("/api/login", async (req, res) => {
    try {
      // Validate request body
      const result = loginSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({
          success: false,
          error: "بيانات غير صالحة",
        });
      }

      const { username, password } = result.data;

      // Validate credentials
      const user = await storage.validateUser(username, password);

      if (!user) {
        return res.status(401).json({
          success: false,
          error: "اسم المستخدم أو كلمة المرور غير صحيحة",
        });
      }

      return res.json({
        success: true,
        user,
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({
        success: false,
        error: "حدث خطأ في الخادم",
      });
    }
  });

  return httpServer;
}
