import { useState, useEffect } from "react";
import { timeSpot } from "@/components/SpotSelector";
import { scheduleTime2 } from "@/api/fakes";
import { TimeScheduleModel2 } from '@/gql/graphql';

interface SpotSelectorProps {
    data: TimeScheduleModel2[][] | undefined;
}

export function useSpotSelector({ data }: SpotSelectorProps) {
    const [currentBatch, setCurrentBatch] = useState(0);
    const [sportByDay, setSportByDay] = useState<Array<timeSpot>>([]);
    const [days, setDays] = useState<Array<string>>([]);

    // TODO:
    // Here I need to work with data from the server, instead of the fake data

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
