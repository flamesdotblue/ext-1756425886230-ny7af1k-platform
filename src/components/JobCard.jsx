import { FileText, MapPin, Briefcase, ArrowRight } from 'lucide-react';

export default function JobCard({ job, onViewAssignment }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 hover:border-sky-300/40 transition relative overflow-hidden">
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl" />
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-sky-100/80">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
            <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.type}</span>
          </div>
        </div>
      </header>
      <p className="mt-4 text-sky-100/80 leading-relaxed">{job.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags?.map((tag) => (
          <span key={tag} className="text-xs rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-200 px-3 py-1">{tag}</span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={onViewAssignment}
          className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 text-sm font-medium transition"
        >
          <FileText className="h-4 w-4" /> View Assignment
        </button>
        <a href="#apply" className="inline-flex items-center gap-1 text-sky-300 hover:text-white transition text-sm">
          Apply Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
