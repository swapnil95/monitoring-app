import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useHistogramLogRecords } from './hooks/useHistogramLogRecords';
import { Placeholder } from '../components/Placeholder';

const LogsHistogram = () => {
  const { histogramData, isLoading } = useHistogramLogRecords();
  // TODO: check if it makes sense to move this inside the hook
  const chartData = histogramData.map((interval) => ({
    time: interval.intervalStart.toLocaleDateString('en-GB', { month: 'short', day: '2-digit' }),
    count: interval.count,
  }));

  return (
    <div className="w-full h-80 mb-4">
      {/* TODO: Placeholder needs to be fixed */}
      {isLoading ? <Placeholder /> : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default LogsHistogram;
