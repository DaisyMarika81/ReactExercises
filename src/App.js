import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";

const name = "Daisy";
const user = { id: "1", name: "boi" };

const element = <h1>Hello, {name}!</h1>;
const element2 = (
  <h1>
    Hello, {user.id}, {user.name}!
  </h1>
);

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {element}
      {element2}
      <Welcome />
    </div>
  );
}

export default App;
