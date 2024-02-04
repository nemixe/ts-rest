// contract.ts

import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
  phone: z.number().optional(),
});

export const userContract = c.router({
  createPost: {
    method: "POST",
    path: "/user",
    responses: {
      201: PostSchema,
    },
    body: z.object({
      name: z.string(),
      age: z.number(),
      phone: z.number().optional(),
    }),
    summary: "Create a user",
  },
  getPost: {
    method: "GET",
    path: `/user/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: "Get a user by id",
  },
});
