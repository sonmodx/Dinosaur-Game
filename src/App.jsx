import TypingTest from "./components/TypingTest";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <header className="header">Dinosaur Typing</header>

          <TypingTest />
          <footer className="footer">Made by sonmodx</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
