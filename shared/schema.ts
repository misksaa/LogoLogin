import { z } from "zod";

// User schema for the demo login system
export const users = {
  user1: {
    id: "1",
    username: "user1",
    password: "123",
    displayName: "المستخدم الأول",
    accessLevel: 2 // Access to both chats
  },
  user2: {
    id: "2",
    username: "user2",
    password: "123",
    displayName: "المستخدم الثاني",
    accessLevel: 1 // Access to one chat only
  }
} as const;

// Chat configurations
export const chatConfigs = {
  saudiHistory: {
    id: "saudi-history",
    title: "منهج التاريخ الوطني السعودي",
    description: "تعلم تاريخ المملكة العربية السعودية بطريقة تفاعلية",
    url: "https://n8n.srv1091470.hstgr.cloud/webhook/38407da3-710f-4302-a6d7-423798edab9e/chat",
    icon: "book"
  },
  prophetBiography: {
    id: "prophet-biography",
    title: "منهج معالم في السيرة النبوية",
    description: "استكشف السيرة النبوية الشريفة مع مساعدك الذكي",
    url: "https://n8n.srv1091470.hstgr.cloud/webhook/571d697b-7fbd-4261-a649-6b1228c0eff4/chat",
    icon: "star"
  }
} as const;

// Login schema
export const loginSchema = z.object({
  username: z.string().min(1, "اسم المستخدم مطلوب"),
  password: z.string().min(1, "كلمة المرور مطلوبة")
});

export type LoginFormData = z.infer<typeof loginSchema>;

export interface User {
  id: string;
  username: string;
  displayName: string;
  accessLevel: number;
}

export interface ChatConfig {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

// Insert user schema for compatibility
export const insertUserSchema = loginSchema;
export type InsertUser = LoginFormData;