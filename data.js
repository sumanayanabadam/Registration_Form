// Collect performance data
const performanceData = [
    { name: 'Navigation start', value: performance.timing.navigationStart },
    { name: 'Page load time', value: performance.timing.loadEventEnd - performance.timing.navigationStart },
    { name: 'Response time', value: performance.timing.responseEnd - performance.timing.requestStart },
    // Add other performance metrics as required
  ];
  
  // Create data series for graph
  const labels = performanceData.map(data => data.name);
  const values = performanceData.map(data => data.value);
  
  // Create graph
  const chart = new Chart(document.getElementById('performance-chart'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Performance metrics',
        data: values,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  // Display graph
  chart.render();
  