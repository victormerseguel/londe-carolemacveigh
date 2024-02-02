import "./App.css";

import { useContext } from "react";
import { GlobalContext } from "./hooks/GlobalContext";
import { Routes, Route } from "react-router-dom";
import CompletePage from "./pages/CompletePage";
import TermsOfUse from "./pages/TermsOfUse";

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
        <Route path="/fr/terms" element={<TermsOfUse lang="fr" />} />
        <Route path="/pt/terms" element={<TermsOfUse lang="pt" />} />
        <Route path="/en/terms" element={<TermsOfUse lang="en" />} />
      </Routes>
    </>
  );
}

export default App;
