import { Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import Event from "./pages/Event";
import Subscribe from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
