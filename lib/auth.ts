import { auth } from "@/auth";

// helper for server components to get the user directly.
export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};
