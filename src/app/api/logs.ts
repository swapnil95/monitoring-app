import { IExportLogsServiceRequest } from "@opentelemetry/otlp-transformer";
import { apiClient } from './client';

export const getLogs = async () => {
  const response = await apiClient.get<IExportLogsServiceRequest>('/api/logs');
  return response.data;
};