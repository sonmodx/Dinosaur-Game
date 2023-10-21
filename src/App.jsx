import TypingTest from "./components/TypingTest";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">Dinosaur Typing</header>
        <div className="wrapper">
          <TypingTest />
        </div>
      </div>
    </div>
  );
}

export default App;
