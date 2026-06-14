import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Home.jsx"));
const Posts = React.lazy(() => import("./pages/Posts"));
const PostDetails = React.lazy(() => import("./pages/PostDetails.jsx"));

function App() {
  return (
    <>
      <ThemeProvider>
        <ErrorBoundary>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/post/:id" element={<PostDetails />} />
            </Routes>{" "}
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
