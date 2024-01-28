import "./App.css";
import { Homepage } from "./components/Homepage";

function App() {
  return (
    <>
      <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <Homepage />
      </div>
    </>
  );
}

export default App;
