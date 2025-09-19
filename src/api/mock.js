// A tiny mock API to simulate data for dashboards and registration
export function getMockSummary() {
  return {
    totalTourists: 12543,
    activeIDs: 8432,
    checkinsToday: 624,
    incidentsToday: 7,
  };
}

export function getMockHeatmapClusters() {
  return [
    { id: 1, lat: 28.6139, lng: 77.2090, count: 12, risk: 65 }, // Delhi
    { id: 2, lat: 26.9124, lng: 75.7873, count: 8, risk: 40 }, // Jaipur
    { id: 3, lat: 12.9716, lng: 77.5946, count: 20, risk: 80 }, // Bangalore
  ];
}
