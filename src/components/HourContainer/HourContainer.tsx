import React from "react";
import clsx from "clsx";

interface HourContainerProps {
  readonly isAvailable: boolean;
  readonly hour: string;
  readonly exist: boolean;
}

export function HourContainer({
  isAvailable,
  hour,
  exist,
}: HourContainerProps) {
  const defaultStyles = [
    "max-w-[5rem]",
    "text-black",
    "border-solid",
    "border-black",
    "border-2",
    "max-w-[52px]",
    "text-small",
    "flex",
    "justify-center",
    "pl-2",
    "pr-2",
  ];
  const hourContainer = clsx(
    defaultStyles,
    {
      "bg-green-disabled": isAvailable,
    },
    {
      "bg-green": !isAvailable,
    }
  );

  const spotUndefinedStyles = clsx(defaultStyles, "bg-body");

  console.log("hourContainer", hourContainer, isAvailable);
  if (!exist)
    return (
      // <div className="bg-body text-black border-solid border-black border-2 max-w-[52px]">
      <div className={spotUndefinedStyles}>-</div>
    );

  return <div className={hourContainer}>{hour}</div>;
}
