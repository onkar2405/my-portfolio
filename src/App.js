import "./App.css";
import { Homepage } from "./components/Homepage";

/**
 * This is the entry file for the portfolio site. 
 */
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
