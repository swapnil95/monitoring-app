import { Fixed64 } from "@opentelemetry/otlp-transformer";

export const sanitizeTimestamp = (timestamp: Fixed64): number => {
  if (typeof timestamp === "string") {
    return Number(timestamp);
  } else if (typeof timestamp === "number") {
    return timestamp;
  } else {
    // TODO: not implemented
    return 0;
  }
}