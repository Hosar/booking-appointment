"use client";
import React from "react";
import { CircleWithLabel } from "../CircleWithLabel";
import Image from "next/image";
import RightArrow from "../../../public/right-arrow.svg";
import LeftArrow from "../../../public/left-arrow.svg";

interface DaysBarProps {
  readonly onNextDaysBatch: () => void;
  readonly onPreviousDaysBatch: () => void;
  readonly days: string[];
}

export function DaysBar({
  days = ["1", "2", "3", "4", "5"],
  onNextDaysBatch,
  onPreviousDaysBatch,
}: DaysBarProps) {
  const getDayLabel = (day: number) => {
    switch (day) {
      case 0:
        return "Mon";
      case 1:
        return "Tue";
      case 2:
        return "Wed";
      case 3:
        return "Thu";
      case 4:
        return "Fri";
      default:
        return "";
    }
  };

  return (
    <div className="flex justify-between ">
      <button title="Previous days" type="button" onClick={onPreviousDaysBatch}>
        <Image src={LeftArrow} width={10} height={10} alt="Left Calendar" />
      </button>
      <div className="flex w-full justify-evenly">
        {days.map((day, index) => (
          <CircleWithLabel
            key={day}
            number={parseInt(day)}
            label={getDayLabel(index)}
          />
        ))}
      </div>

      <button title="Next days" type="button" onClick={onNextDaysBatch}>
        <Image src={RightArrow} width={10} height={10} alt="Right Calendar" />
      </button>
    </div>
  );
}
