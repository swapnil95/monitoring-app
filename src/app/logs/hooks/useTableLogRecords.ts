import { useLogRecords } from './useLogRecords';

const convertUnixNanoToDate = (timestamp: number): string => {
  return new Date(timestamp / 1000000).toLocaleString();
};

export const useTableLogRecords = () => {
  const { logRecords, isLoading, error } = useLogRecords();

  const sortedLogRecords = logRecords.map((logRecord) => ({
    ...logRecord,
    time: convertUnixNanoToDate(logRecord.time)
  }));

  return { logRecords: sortedLogRecords, isLoading, error };
};