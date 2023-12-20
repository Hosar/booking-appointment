import React from "react";

interface MainLayoutProps {
  readonly children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex justify-center p-[15px] bg-body">{children}</main>
  );
}
