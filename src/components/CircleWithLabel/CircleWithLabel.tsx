import React from "react";
import { clsx } from "clsx";

interface CircleWithLabelProps {
  readonly label: string;
  readonly number: number;
}

export function CircleWithLabel({ label, number }: CircleWithLabelProps) {
  const numberContainer = clsx(
    "flex",
    "rounded-full",
    "border-solid",
    "min-w-[1.5rem]",
    "max-w-[1.5rem]",
    "max-h-[1.5rem]",
    "border-border-gray",
    "border-2",
    "text-black",
    "justify-center",
    "text-[0.8rem]",
    "bg-purple"
  );
  return (
    <div className="flex flex-col bg-white">
      <div className={numberContainer}>{number}</div>
      <span className="text-disabled text-[0.8rem]">{label}</span>
    </div>
  );
}
