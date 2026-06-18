import { useEffect } from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import type { Post, Job } from "./Shared";
import fetchData from "./utils/apiHelpers";

function App() {
  useEffect(() => {
    fetchData<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((post) => console.log(post[0]))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  const jobs: Job[] = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Dev",
      status: "applied",
      date: "2026-06-01",
      salary: 10000,
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Backend Dev",
      status: "interview",
      date: "2026-06-05",
      salary: 120000,
    },
    {
      id: 3,
      company: "Amazon",
      role: "Full Stack",
      status: "rejected",
      date: "2026-06-10",
    },
  ];
  function onRemove(id: number): void {
    //  const updatedList =  jobs.filter((job)=>job.id !== id);
    //  jobs = [...jobs,updatedList]
    console.log("remove", { id });
  }

  return (
    <>
      {jobs.map((job) => {
        return (
          <div key={job.id}>
            <JobCard job={job} onRemove={onRemove} />
          </div>
        );
      })}
    </>
  );
}

export default App;
