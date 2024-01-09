"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

// equivalent to api route!

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };

  // nextjs cache functions
  // revalidatePath()
  // revalidateTag()
};
