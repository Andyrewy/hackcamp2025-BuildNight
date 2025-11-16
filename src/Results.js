/* example function */
export default function App() {
  const result = {
    normalHours: 10,
    spedUpHours: 5
  };

  return (
    <div className="p-4">
      <h2>Results</h2>

      <p>Normal time: {result.normalHours.toFixed(2)} hours</p>
      <p>With speeding: {result.spedUpHours.toFixed(2)} hours</p>

      <p>
        Time saved: {(result.normalHours - result.spedUpHours).toFixed(2)} hours
      </p>
    </div>
  );
}
