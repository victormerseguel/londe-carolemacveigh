import "./App.css";

import { useContext } from "react";
import { GlobalContext } from "./hooks/GlobalContext";
import { Routes, Route } from "react-router-dom";
import CompletePage from "./components/CompletePage";

function App() {
  let { globalLanguage } = useContext(GlobalContext);
  globalLanguage === "" ? (globalLanguage = "fr") : globalLanguage;

  return (
    <>
      <Routes>
        <Route index element={<CompletePage lang={globalLanguage} />} />
        <Route path="/fr" element={<CompletePage lang="fr" />} />
        <Route path="/pt" element={<CompletePage lang="pt" />} />
        <Route path="/en" element={<CompletePage lang="en" />} />
      </Routes>
    </>
  );
}

export default App;
