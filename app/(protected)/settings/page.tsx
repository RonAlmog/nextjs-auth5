// server component
import { auth } from "@/auth";
import { json } from "stream/consumers";

const SettingsPage = async () => {
  const session = await auth();

  return <div>{JSON.stringify(session)}</div>;
};

export default SettingsPage;
