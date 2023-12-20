"use client";
import React from "react";
import { DaysBar } from "@/components/DaysBar";
import { FadeContainer } from "@/components/FadeContainer";
import { SpotSelector } from "@/components/SpotSelector";
import { MainLayout } from "@/components/MainLayout";
import { RoundedButton } from "@/components/RoundedButton";
import BuildingIcon from "../../../public/building-icon.svg";
import HouseIcon from "../../../public/house-icon.svg";
import VideoIcon from "../../../public/video-icon.svg";
import { useSpotSelector } from "@/hooks/useSpotSelector";
import { useGetAllQuery } from "@/gql/graphql";

export function Booking() {
  const { data, error } = useGetAllQuery();
  const [sportByDay, days, onNextDaysBatch, onPreviousDaysBatch] =
    useSpotSelector();

  console.log("data", data, error);
  return (
    <MainLayout>
      <FadeContainer title="Book Appointment">
        <div className="flex flex-col">
          <span className="text-black size-default">
            What service are you looking for? *
          </span>
          <div className="flex gap-2">
            <RoundedButton text="Behavior Therapy" isSelected />
            <RoundedButton text="Massage Therapy" />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <span className="text-black text-default">
            What's the reason(s) for your visit?* *
          </span>
          <select
            className="
              rounded-md
              border-[1px]
              border-solid
              border-border-gray
              text-gray-icons
              "
            name="selectedFruit"
            title="select fruit"
          >
            <option value="0">Select Services</option>
            <option value="1">Swedish Massage</option>
            <option value="2">Sports Massage</option>
            <option value="3">Trigger Point Massage</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-black text-default">
            Where do you want to meet service provider? *
          </span>
          <div className="flex flex-wrap gap-2">
            <RoundedButton
              iconImg={BuildingIcon}
              text="On provider’s location"
              isSelected
            />
            <RoundedButton iconImg={HouseIcon} text="On my location" />
            <RoundedButton iconImg={VideoIcon} text="On video call" />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-black text-default">
            Did you seen this provider before?
          </span>
          <div className="flex gap-2">
            <RoundedButton text="Yes" isSelected />
            <RoundedButton text="No" />
          </div>
        </div>
        <div className="mt-4 rounded-md border-[1px] border-light-black border-solid bg-white p-4">
          <span className="text-black text-default">
            Select an available time
          </span>
          <DaysBar
            days={days}
            onNextDaysBatch={onNextDaysBatch}
            onPreviousDaysBatch={onPreviousDaysBatch}
          />
          <SpotSelector spotsByDay={sportByDay} />
        </div>
        <div className="mt-4">
          <button
            className="bg-green text-white rounded-md p-2 w-full"
            title="Continue Booking"
          >
            Continue Booking
          </button>
        </div>
      </FadeContainer>
    </MainLayout>
  );
}
