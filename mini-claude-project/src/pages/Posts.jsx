import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../contexts/useContext";

function Posts() {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading, isErr } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
    intlState: [],
  });
  console.log(data);
  return (
    <>
      <Navbar />
      <Link
        style={{
          color: "black",
          backgroundColor: "white",
          textTransform: "capitalize",
        }}
        to="/"
      >
        {" "}
        get back
      </Link>
      <h2>posts here: </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: theme === "dark" ? "#170d35" : "rgb(74, 84, 130)",
          color: theme === "dark" ? "whitesmoke" : "#111",
          
        }}
      >
        {isLoading === true && <p>loading...</p>}
        {isErr === true && <p>Something went wrong</p>}
        {data.slice(0, 10).map((post) => {
          return (
            <Link
              style={{
                color: "white",
              }}
              to={`/post/${post.id}`}
              key={post.id}
            >
              <span
                style={{
                  width: "30px",
                  borderRadius: "10px",
                  height: "20px",
                  backgroundColor: "lavender",
                  color: "black",
                }}
              >
                {post.id}
              </span>
              <h3>Title: {post.title}</h3>
              <p>Post: {post.body}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Posts;
