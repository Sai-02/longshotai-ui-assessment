import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="grid-cols-11 grid">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-8">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
