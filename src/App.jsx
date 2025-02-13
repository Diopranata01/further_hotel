import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./page/Layout";
import { MainPage } from "./page/MainPage";
import { Suites } from "./page/Suites";
import DetailRoomPage from "./page/DetailRoomPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="room" element={<Suites />}/>
        <Route path="room/:id" element={<DetailRoomPage />} />
      </Route>
    </Routes>
  );
}

export default App;