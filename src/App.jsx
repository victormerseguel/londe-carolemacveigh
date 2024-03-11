import "./App.css";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./hooks/GlobalContext";
import { Routes, Route } from "react-router-dom";
import CompletePage from "./pages/CompletePage";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { languages_class_db, languages_db } from "./databases/smalltexts_db";

function App() {
  const { globalLanguage } = useContext(GlobalContext);

  return (
    <>
      <Routes>
        <Route index element={<CompletePage lang={globalLanguage} />} />
        <Route path="/fr" element={<CompletePage lang="fr" />} />
        <Route path="/pt" element={<CompletePage lang="pt" />} />
        {/* <Route path="/en" element={<CompletePage lang="en" />} /> */}
        <Route path="/fr/terms" element={<TermsOfUse lang="fr" />} />
        <Route path="/pt/terms" element={<TermsOfUse lang="pt" />} />
        {/* <Route path="/en/terms" element={<TermsOfUse lang="en" />} /> */}
        <Route path="/fr/privacy" element={<PrivacyPolicy lang="fr" />} />
        <Route path="/pt/privacy" element={<PrivacyPolicy lang="pt" />} />
        {/* <Route path="/en/privacy" element={<PrivacyPolicy lang="en" />} /> */}
      </Routes>
    </>
  );
}

export default App;
