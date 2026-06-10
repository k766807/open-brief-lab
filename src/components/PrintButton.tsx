export function PrintButton() {
  return (
    <button className="button button--secondary no-print" type="button" onClick={() => window.print()}>
      Print / Save brief
    </button>
  );
}
