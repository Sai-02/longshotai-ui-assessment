import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import { data } from "./data";
function App() {
  return (
    <div className="grid-cols-11 grid w-screen h-screen">
      <div className="col-span-2 h-screen">
        <Sidebar />
      </div>
      <div className="col-span-9 h-screen">
        <Dashboard data={data} />
      </div>
    </div>
  );
}

export default App;
