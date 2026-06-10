import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/useContext";

function PostDetails() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const { data, isErr, isLoading } = useFetch({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    intlState: {},
  });

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: theme === "dark" ? "#170d35" : "rgb(74, 84, 130)",
          color: theme === "dark" ? "whitesmoke" : "#111",
        }}
      >
        {isErr === true && <p>Something went wrong! </p>}
        {isLoading === true && <p>Loading...</p>}
        <h3>userId: {data.id}</h3>
        <h3>Title: {data.title}</h3>
        <p>Post: {data.body}</p>
      </div>
      <Link
        style={{
          color: "black",
          backgroundColor: "white",
          textTransform: "capitalize",
        }}
        to="/"
      >
        Go to Home
      </Link>
    </>
  );
}

export default PostDetails;
