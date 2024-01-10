import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import { differences } from "./data.js";
import Button from "./components/Button/Button.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import EffectSection from "./components/EffectSection.jsx";
function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <Header></Header>
      <TabsSection active={tab} onChange={(current)=>{setTab(current)}}></TabsSection>
      <main>
        <IntroSection></IntroSection>
        {tab === "main" && (
          <>
            <TeachingSection></TeachingSection>
            <DifferencesSection></DifferencesSection>
          </>
        )}
        {tab === "feedback" && <FeedbackSection></FeedbackSection>}
        {tab === "effect" && <EffectSection></EffectSection>}
      </main>
    </>
  );
}

export default App;
