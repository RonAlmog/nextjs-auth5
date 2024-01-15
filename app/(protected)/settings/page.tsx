"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  // const session = useSession(); // whole session object
  const user = useCurrentUser(); // only user object from session (usually enough)

  const onClick = () => {
    signOut();
  };

  return (
    <div>
      {JSON.stringify(user)}

      <Button onClick={onClick} variant="outline">
        Sign Out
      </Button>
    </div>
  );
};

export default SettingsPage;
