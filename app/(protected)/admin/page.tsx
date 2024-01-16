// "use clinet";

import { useCurrentRole } from "@/hooks/use-current-role";
import { currentRole } from "@/lib/auth";

const AdminPage = async () => {
  // client
  // const role = useCurrentRole();
  // server
  const role = await currentRole();

  return <div>current role: {role}</div>;
};

export default AdminPage;
