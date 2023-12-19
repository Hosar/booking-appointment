import React from "react";
import { HourContainer } from "../HourContainer";
import { scheduleTime, scheduleTime2 } from "@/api/fakes";
import { v4 as uuidv4 } from "uuid";

export type timeSpot = {
  time: string;
  isAvailable: boolean;
  exist: boolean;
};

interface SpotSelectorProps {
  readonly spotsByDay: Array<timeSpot>;
}

export function SpotSelector({ spotsByDay }: SpotSelectorProps) {
  //   const { monday, tuesday, wednesday, thursday, friday } = scheduleTime;
  //   const batch = scheduleTime2[0];
  //   const spotsByDay = [monday, tuesday, wednesday, thursday, friday];

  const fillNotExistingSpot = (day: Array<timeSpot>) => {
    const arrDefaults = new Array(5).fill({
      time: "-",
      isAvailable: false,
      exist: false,
    });
    const newArr = arrDefaults.map((item: timeSpot, index: number) => {
      if (index < day.length) {
        return day[index];
      }
      return item;
    });
    return newArr;
  };

  return (
    <div className="flex justify-center gap-2">
      {spotsByDay.map((day: any) => {
        const newArr = fillNotExistingSpot(day);
        return (
          <div className="flex flex-col" key={uuidv4()}>
            {newArr.map((item: any, index) => (
              <HourContainer
                key={uuidv4()}
                isAvailable={item.isAvailable}
                exist={item.exist}
                hour={item.time}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
