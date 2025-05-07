function exportCSV(results) {
  const headers = Object.keys(results[0]).join(',');
  const rows = results.map(r => Object.values(r).join(','));
  return `${headers}\n${rows.join('\n')}`;
}

function exportJSON(results) {
  return JSON.stringify(results, null, 2);
}