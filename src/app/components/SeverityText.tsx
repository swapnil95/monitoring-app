import classNames from "classnames";
import React from "react";

type TSeverityTextProps = {
  severity?: string
}

export const SeverityText = ({ severity }: TSeverityTextProps) => {
  const severityColorClass = classNames({
    'text-error': severity === 'ERROR',
    'text-info': severity === 'INFO',
    'text-trace': severity === 'TRACE',
    'text-debug': severity === 'DEBUG',
    'text-fatal': severity === 'FATAL',
    'text-warn': severity === 'WARN',
    'text-unspecified': severity === 'UNSPECIFIED',
  });
  return <span className={severityColorClass}>{severity}</span>;
};
