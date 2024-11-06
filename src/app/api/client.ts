import axios from 'axios';

// TODO: move the baseURL in an env variable
export const apiClient = axios.create({
  baseURL: 'https://take-home-assignment-otlp-logs-api.vercel.app',
});
