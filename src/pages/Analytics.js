import React from 'react';
import Card from '../components/Card';
import SummaryCard from '../components/SummaryCard';
import { getMockSummary } from '../api/mock';

const Analytics = () => {
  const summary = getMockSummary();

  return (
    <div className="container analytics-page">
      <h2>Analytics</h2>
      <div className="summary-row">
        <SummaryCard label="Total Tourists" value={summary.totalTourists} />
        <SummaryCard label="Active IDs" value={summary.activeIDs} />
        <SummaryCard label="Check-ins Today" value={summary.checkinsToday} />
        <SummaryCard label="Incidents" value={summary.incidentsToday} accent="red" />
      </div>

      <div className="grid-2">
        <Card title="Tourist Distribution by Entry Point">
          <p>Interactive chart placeholder — integrate Chart.js / Recharts for live charts.</p>
        </Card>
        <Card title="Tourist Status Distribution">
          <p>Pie/Donut chart placeholder: Active, Checked-in, High Risk, Offline.</p>
        </Card>
      </div>

      <Card title="Live Monitoring">
        <p>Live incident feed and metrics (mock). Integrate websocket/streaming for real realtime updates.</p>
      </Card>
    </div>
  );
};

export default Analytics;
