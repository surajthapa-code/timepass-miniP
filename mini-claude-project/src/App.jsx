import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
