import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./page/Layout";
import { MainPage } from "./page/MainPage";
import { Suites } from "./page/Suites";

function App() {
  return ( // Add return statement
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/suites" element={<Suites />} />
      </Route>
    </Routes>
  );
}

export default App;