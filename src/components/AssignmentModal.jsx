import { X, ExternalLink } from 'lucide-react';

export default function AssignmentModal({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full sm:max-w-3xl mx-auto">
        <div className="rounded-t-2xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a132b] to-[#0a1a3a] text-white shadow-2xl">
          <header className="flex items-center justify-between p-5 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-300/80">Assignment</p>
              <h3 className="text-xl font-semibold mt-1">{job.assignment.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-white/10 text-sky-200"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </header>
          <div className="p-5 sm:p-6 space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-sky-300">Overview</h4>
              <p className="mt-2 text-sky-100/80 leading-relaxed">{job.assignment.brief}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-sky-300">Deliverables</h4>
              <ul className="mt-2 list-disc list-inside text-sky-100/90 space-y-1">
                {job.assignment.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            {job.assignment.resources?.length ? (
              <div>
                <h4 className="text-sm font-semibold text-sky-300">Resources</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.assignment.resources.map((r) => (
                    <a
                      key={r.url}
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-sky-400/30 bg-sky-500/10 px-3 py-2 text-sky-200 hover:bg-sky-500/20 transition"
                    >
                      <ExternalLink className="h-4 w-4" /> {r.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sky-200/80 text-sm">
                Include a link to your repo or prototype and a short README. We value clarity, thoughtful tradeoffs, and measurable results.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-xl bg-sky-500/90 hover:bg-sky-400 text-white px-5 py-3 font-medium shadow-lg shadow-sky-500/30 transition"
              >
                Start Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
