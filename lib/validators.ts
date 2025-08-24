import { z } from "zod";

export const messageSchema = z.object({
  name: z.string().min(1, "Name is required").max(80),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(1, "Message is required").max(500),
  is_public: z.boolean().optional().default(true),
});

export const rsvpSchema = z.object({
  name: z.string().min(1, "Name is required").max(80),
  email: z.string().email().optional().or(z.literal("")),
  attending: z.boolean(),
  guest_count: z.coerce.number().int().min(1).max(10),
});
