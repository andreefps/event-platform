import { Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import Event from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<>OI NE</>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
