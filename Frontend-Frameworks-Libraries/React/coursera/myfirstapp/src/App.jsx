function App() {
  const currDate = new Date();
  const myName = ["Rathord", "Raj", "max", "Herry"];

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>I am {myName.at(3)}!</h2>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;