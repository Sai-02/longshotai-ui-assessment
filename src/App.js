import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="grid-cols-11 grid w-screen h-screen">
      <div className="col-span-2 h-screen">
        <Sidebar />
      </div>
      <div className="col-span-9 h-screen">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
