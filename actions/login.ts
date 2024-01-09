"use server";
import { LoginSchema } from "@/schemas";
import { revalidatePath, revalidateTag } from "next/cache";
import * as z from "zod";

// equivalent to api route!

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };

  // nextjs cache functions
  // revalidatePath()
  // revalidateTag()
};
