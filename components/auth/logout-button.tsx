"use client";

import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  children?: React.ReactNode;
}
const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    signOut();
  };
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LogoutButton;
