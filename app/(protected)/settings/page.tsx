"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession, signOut } from "next-auth/react";

export default function SettingsPage() {
  // const session = useSession(); // whole session object
  const user = useCurrentUser(); // only user object from session (usually enough)

  const onClick = () => {
    signOut();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <Button onClick={onClick} variant="outline">
        Sign Out
      </Button>
    </div>
  );
}
