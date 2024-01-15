"use client";

import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    signOut();
  };

  return (
    <div>
      {JSON.stringify(session)}

      <Button onClick={onClick} variant="outline">
        Sign Out
      </Button>
    </div>
  );
};

export default SettingsPage;
