export default function createIteratorObject(report) {
  const empty = [];
  for (const k of Object.keys(report.allEmployees)) {
    for (const j of report.allEmployees[k]) {
      empty.push(j);
    }
  }
  return empty;
}
