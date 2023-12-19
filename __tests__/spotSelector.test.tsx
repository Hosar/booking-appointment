import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { DaysBar } from "@/components/DaysBar";
import { SpotSelector } from "@/components/SpotSelector";
import { scheduleTime2 } from "@/api/fakes";
import { useSpotSelector } from "@/hooks/useSpotSelector";
import { renderHook, fireEvent, waitFor } from "@testing-library/react";

describe("Select the time for the appointment", () => {
  describe("Days Bar", () => {
    it("should render days from 1 to 5", () => {
      const days = ["1", "2", "3", "4", "5"];

      const handler = () => {
        console.log("event handler");
      };

      render(
        <DaysBar
          days={days}
          onNextDaysBatch={handler}
          onPreviousDaysBatch={handler}
        />
      );

      days.map((day) => {
        const dayText = screen.queryByText(day);
        expect(dayText).toBeInTheDocument();
      });

      const day7 = screen.queryByText("7");
      expect(day7).not.toBeInTheDocument();
    });

    it("should render days from 7 to 11", () => {
      const days = ["7", "8", "9", "10", "11"];

      const handler = () => {
        console.log("event handler");
      };

      render(
        <DaysBar
          days={days}
          onNextDaysBatch={handler}
          onPreviousDaysBatch={handler}
        />
      );

      days.map((day) => {
        const dayText = screen.queryByText(day);
        expect(dayText).toBeInTheDocument();
      });

      const day5 = screen.queryByText("5");
      expect(day5).not.toBeInTheDocument();
    });
  });

  describe("Spot selector", () => {
    it("should render all available spots in batch 1", () => {
      const batch = scheduleTime2[0];
      const spotsByDay = Object.values(batch);
      render(<SpotSelector spotsByDay={spotsByDay} />);
      const eightCount = screen.queryAllByText(new RegExp("8.*", "i"));
      const nineCount = screen.queryAllByText(new RegExp("9.*", "i"));
      const sevenCount = screen.queryAllByText(new RegExp("7.*", "i"));
      const sixCount = screen.queryAllByText(new RegExp("6.*", "i"));

      expect(eightCount.length).toBe(5);
      expect(nineCount.length).toBe(2);
      expect(sevenCount.length).toBe(2);
      expect(sixCount.length).toBe(1);
    });

    it("should render all available spots in batch 2", () => {
      const batch = scheduleTime2[1];
      const spotsByDay = Object.values(batch);
      render(<SpotSelector spotsByDay={spotsByDay} />);
      const eightCount = screen.queryAllByText(new RegExp("8.*", "i"));
      const nineCount = screen.queryAllByText(new RegExp("9.*", "i"));
      const sevenCount = screen.queryAllByText(new RegExp("7.*", "i"));
      const sixCount = screen.queryAllByText(new RegExp("6.*", "i"));

      expect(eightCount.length).toBe(5);
      expect(nineCount.length).toBe(3);
      expect(sevenCount.length).toBe(2);
      expect(sixCount.length).toBe(2);
    });

    it("should render new spots when clicking right arrow ", async () => {
      const daysExpected = ["7", "8", "9", "10", "11"];
      const { result } = renderHook(() => useSpotSelector());
      const [sportByDay, days, onNextDaysBatch, onPreviousDaysBatch] =
        result.current;

      const { rerender } = render(
        <>
          <DaysBar
            days={days}
            onNextDaysBatch={onNextDaysBatch}
            onPreviousDaysBatch={onPreviousDaysBatch}
          />
          <SpotSelector spotsByDay={sportByDay} />
        </>
      );

      const rightArrow = screen.getByTitle("Next days");
      fireEvent.click(rightArrow);

      const [sportByDay2, days2, onNextDaysBatch2, onPreviousDaysBatch2] =
        result.current;

      rerender(
        <>
          <DaysBar
            days={days2}
            onNextDaysBatch={onNextDaysBatch2}
            onPreviousDaysBatch={onPreviousDaysBatch2}
          />
          <SpotSelector spotsByDay={sportByDay2} />
        </>
      );

      await waitFor(() => {
        daysExpected.map((day) => {
          const dayText = screen.queryByText(day);
          expect(dayText).toBeInTheDocument();
        });
        const eightCount = screen.queryAllByText(new RegExp("8:.*", "i"));
        const nineCount = screen.queryAllByText(new RegExp("9:.*", "i"));
        const sevenCount = screen.queryAllByText(new RegExp("7:.*", "i"));
        const sixCount = screen.queryAllByText(new RegExp("6:.*", "i"));

        expect(eightCount.length).toBe(5);
        expect(nineCount.length).toBe(3);
        expect(sevenCount.length).toBe(2);
        expect(sixCount.length).toBe(2);
      });
    });
  });
});
