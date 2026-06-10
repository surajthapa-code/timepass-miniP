import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import ThemecontextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemecontextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>{" "}
      </ThemecontextProvider>
    </>
  );
}

export default App;
