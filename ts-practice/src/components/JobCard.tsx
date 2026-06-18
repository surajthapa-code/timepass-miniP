import type { Job } from "../Shared";

interface jobCardProps {
  job: Job;
  onRemove: (id: number) => void;
}
function JobCard({ job, onRemove }: jobCardProps) {
  return (
    <div>
      <h2>Company's Name: {job.company}</h2>
      <h3>Role: {job.role}</h3>
      <p>id: {job.id}</p>
      <p>status: {job.status}</p>
      <p>salary: {job.salary} </p>
      <p>data: {job.date}</p>
      <button onClick={() => onRemove(job.id)}>remove</button>
      {job.salary && <p>salary: {job.salary}</p>}
    </div>
  );
}

export default JobCard;
