import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Blog } from "./pages/blog/Blog";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
