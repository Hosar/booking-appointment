import React from "react";
import { If, Then } from "react-if";
import clsx from "clsx";

interface FadeContainerProps {
  readonly title?: string;
  readonly children: React.ReactNode;
}
const containerStyles = clsx(
  "flex",
  "flex-col",
  "rounded-lg",
  "shadow-xl",
  "bg-body",
  "min-h-[200px]",
  "border-light-black",
  "border-2",
  "border-solid",
  "pl-6",
  "pr-6",
  "pb-6"
);

export function FadeContainer({ children, title }: FadeContainerProps) {
  return (
    <div className={containerStyles}>
      <If condition={title}>
        <Then>
          <div className="pt-4 pb-4 w-full text-title font-[500] text-black">
            {title}
          </div>
        </Then>
      </If>
      {children}
    </div>
  );
}
