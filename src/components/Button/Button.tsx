import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { If, Then } from "react-if";

interface ButtonProps {
  readonly text: string;
  readonly isSelected?: boolean;
  readonly iconImg?: any;
}

export function Button({
  text,
  isSelected = false,
  iconImg = null,
}: ButtonProps) {
  const btnStyle = clsx(
    "rounded-full",
    "max-h-[36px]",
    "max-w-[186px]",
    "border-[1px]",
    "border-solid",
    "pl-2",
    "pr-2",
    "text-default",

    {
      "bg-green-disabled": isSelected === true,
      "border-green": isSelected === true,
      "text-green": isSelected === true,
    },
    {
      "bg-body": isSelected === false,
      "border-border-gray": isSelected === false,
      "text-black": isSelected === false,
    }
  );
  return (
    <button className={btnStyle}>
      <span className="flex gap-1">
        <If condition={iconImg}>
          <Then>
            <Image src={iconImg} width={15} height={15} alt="Left Calendar" />
          </Then>
        </If>
        {text}
      </span>
    </button>
  );
}
