import { useState, useEffect } from "react";
import { timeSpot } from "@/components/SpotSelector";
import { scheduleTime2 } from "@/api/fakes";

export function useSpotSelector() {
    const [currentBatch, setCurrentBatch] = useState(0);
    const [sportByDay, setSportByDay] = useState<Array<timeSpot>>([]);
    const [days, setDays] = useState<Array<string>>([]);

    useEffect(() => {
        const batch = scheduleTime2[currentBatch];
        const _days = Object.keys(batch);
        setDays(_days);
        setSportByDay(Object.values(batch));
    }, [currentBatch]);

    const onPreviousDaysBatch = () => {
        if (currentBatch === 0) return;
        setCurrentBatch((prev) => prev - 1);
    };

    const onNextDaysBatch = () => {
        if (currentBatch === scheduleTime2.length - 1) return;
        setCurrentBatch((prev) => prev + 1);
    };

    return [
        sportByDay,
        days,
        onNextDaysBatch,
        onPreviousDaysBatch
    ] as const;
}
