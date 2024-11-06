
import { useQuery } from '@tanstack/react-query';
import type { ILogRecord } from '@opentelemetry/otlp-transformer';
import { sanitizeTimestamp } from '@/app/utils/sanitizeTimestamp';
import { getLogs } from '@/app/api/logs';

type timestampToSort = Omit<ILogRecord, 'timeUnixNano'> & { time: number }

const sortByTimestamp = (x: timestampToSort, y: timestampToSort) => {
  return x.time - y.time;
}

export const useLogRecords = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['repoData'],
    queryFn: getLogs,
  });

  // TODO: See if this can be simplified or made more readable
  const logRecords = data?.resourceLogs?.flatMap((resourceLog) =>
    resourceLog.scopeLogs.flatMap((scopeLog) =>
      (scopeLog.logRecords ?? []).map((logRecord) => ({
        ...logRecord,
        time: sanitizeTimestamp(logRecord.timeUnixNano),
      })).sort(sortByTimestamp)
    )
  ) ?? [];

  const sortedLogRecords = logRecords.sort(sortByTimestamp);
  return { logRecords: sortedLogRecords, isLoading, error };
};
