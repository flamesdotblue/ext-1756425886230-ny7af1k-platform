import JobCard from './JobCard';

export default function JobList({ jobs, onViewAssignment }) {
  return (
    <div id="open-roles" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onViewAssignment={() => onViewAssignment(job)} />
      ))}
    </div>
  );
}
