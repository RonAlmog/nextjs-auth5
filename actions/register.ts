"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

// equivalent to api route!

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validatedFields.data;
  console.log("pass", password);
  const hashedPass = await bcrypt.hash(password, 10);

  console.log("hash", hashedPass);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPass,
    },
  });

  // todo: send verification token email

  return { success: "User created!" };

  // nextjs cache functions
  // revalidatePath()
  // revalidateTag()
};
