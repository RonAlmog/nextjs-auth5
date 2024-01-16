import { auth } from "@/auth";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  // option 1
  // const session = await auth();

  // option 2
  const user = await currentUser();

  return <div>{JSON.stringify(user)}</div>;
};

export default ServerPage;
