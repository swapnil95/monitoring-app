import { SeverityText } from '../components/SeverityText';
import { TablePlaceholder } from '../components/TablePlaceholder';
import { useTableLogRecords } from './hooks/useTableLogRecords';

export const LogsTable = () => {
  const { logRecords, isLoading, error } = useTableLogRecords();

  if (error) return <div>Error fetching logs</div>;

  return (
      <div className="container mx-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Severity</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <TablePlaceholder repeat={4} columns={3} />}
            {logRecords?.map((log) => (
              <tr key={log.time} className="border-b">
                <td className="px-4 py-2"><SeverityText severity={log.severityText} /></td>
                <td className="px-4 py-2">
                  {log.time}
                </td>
                <td className="px-4 py-2">{log.body?.stringValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
