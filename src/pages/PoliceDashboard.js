import React from 'react';
import Card from '../components/Card';
import SummaryCard from '../components/SummaryCard';
import { getMockSummary, getMockHeatmapClusters } from '../api/mock';

const PoliceDashboard = () => {
  const summary = getMockSummary();
  const clusters = getMockHeatmapClusters();

  return (
    <div className="container police-dashboard">
      <h2>Tourism Department & Police Control Dashboard</h2>

      <div className="summary-row">
        <SummaryCard label="Emergency Cases" value={summary.incidentsToday} accent="red" />
        <SummaryCard label="High-Risk Tourists" value={120} accent="orange" />
        <SummaryCard label="Active Alerts" value={24} accent="blue" />
        <SummaryCard label="Being Monitored" value={432} accent="green" />
      </div>

      <div className="grid-2">
        <Card title="Heat Map & Clusters">
          <p>A mock heatmap visualization area. In a real app you would integrate with a mapping library (Leaflet / Google Maps) and an analytics backend.</p>
          <ul>
            {clusters.map(c => (
              <li key={c.id}>Zone {c.id} — {c.count} tourists — Risk {c.risk}%</li>
            ))}
          </ul>
        </Card>

        <Card title="Zone Risk Assessment">
          <table className="risk-table">
            <thead><tr><th>Location</th><th>Incidents</th><th>Risk %</th></tr></thead>
            <tbody>
              <tr><td>Delhi Central</td><td>5</td><td className="risk red">65%</td></tr>
              <tr><td>Bengaluru South</td><td>8</td><td className="risk red">80%</td></tr>
              <tr><td>Jaipur Old City</td><td>2</td><td className="risk orange">40%</td></tr>
            </tbody>
          </table>
        </Card>
      </div>

      <div className="card-row">
        <Card title="Digital ID Records">Sample list of recent IDs and flags.</Card>
        <Card title="Alert History">Recent incidents and responses.</Card>
        <Card title="E-FIR Generation">E-FIR quick action panel (mock).</Card>
      </div>
    </div>
  );
};

export default PoliceDashboard;
