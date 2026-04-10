import { Routes, Route } from "react-router-dom";
import { MainScreen } from "./MainScreen";

function App() {
  return (
    /* Added: 
       1. dark:bg-zinc-950 (or any dark color you prefer)
       2. text-slate-900 dark:text-white (to ensure text is readable)
    */
    <main className="max-w-md mx-auto bg-[#F7F8FA] dark:bg-zinc-950 text-slate-900 dark:text-white min-h-screen overflow-auto">
      <Routes>
        <Route path="/" element={<MainScreen />} />

        
      </Routes>
    </main>
  );
}

export default App;