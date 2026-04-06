import { Routes, Route } from "react-router-dom";
import { MainScreen } from "./MainScreen";

function App() {
  return (
    <main className="max-w-md mx-auto bg-[#F7F8FA] left-auto right-auto mx-auto min-h-screen overflow-auto">
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </main>
  );
}

export default App;