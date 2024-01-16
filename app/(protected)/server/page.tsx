import { auth } from "@/auth";
import UserInfo from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  // option 1
  // const session = await auth();

  // option 2
  const user = await currentUser();

  return <UserInfo user={user} label="Server Component" />;
};

export default ServerPage;
