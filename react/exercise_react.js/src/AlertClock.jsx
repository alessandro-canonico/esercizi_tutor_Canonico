export function AlertClock() {
  function showDate() {
    const currentDate = new Date();

    alert(`The current date is ${currentDate.toLocaleTimeString()} `);
  }

  return (
    <div>
      <p>
        <b>Click the button below to show the current date</b>
      </p>
      <button onClick={showDate}>Click me!</button>
    </div>
  );
}
