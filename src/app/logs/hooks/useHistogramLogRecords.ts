import { ILogRecord } from '@opentelemetry/otlp-transformer';
import { useLogRecords } from './useLogRecords';
import { sanitizeTimestamp } from '@/app/utils/sanitizeTimestamp';

type IntervalCount = {
  intervalStart: Date;
  count: number;
};

function groupLogsBy15MinInterval(logs: ILogRecord[]): IntervalCount[] {
  const groupedLogs: Record<string, number> = {};

  logs.forEach((log) => {
    const date = new Date(sanitizeTimestamp(log.timeUnixNano) / 1000000);
    date.setHours(0, 0, 0, 0);
    const intervalKey = date.toISOString();
    groupedLogs[intervalKey] = (groupedLogs[intervalKey] || 0) + 1;
  });

  return Object.entries(groupedLogs).map(([interval, count]) => ({
    intervalStart: new Date(interval),
    count,
  }));
}

export const useHistogramLogRecords = () => {
  const { logRecords, isLoading, error } = useLogRecords();

  const histogramData = groupLogsBy15MinInterval(logRecords);

  return { histogramData, isLoading, error };
};