import { useState } from 'react';
import Hero from './components/Hero';
import JobList from './components/JobList';
import AssignmentModal from './components/AssignmentModal';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 'qeng-001',
      title: 'Quantum Software Engineer',
      location: 'Remote / Chicago, IL',
      type: 'Full-time',
      description:
        'Design and implement quantum-classical hybrid workflows, optimize circuits for NISQ devices, and collaborate on Bloq’s quantum orchestration stack.',
      tags: ['Qiskit', 'Cirq', 'Rust/Go', 'CUDA'],
      assignment: {
        title: 'Quantum Circuit Optimization Challenge',
        brief:
          'Given a set of parameterized circuits (U3, CNOT layers), implement an optimizer that reduces two-qubit gate depth while keeping fidelity ≥ 0.98 on a noisy backend model. Submit: repo link, a 2-page report, and benchmark plots.',
        deliverables: [
          'Optimizer module with clear API and tests',
          'Notebook demonstrating before/after metrics',
          'Short report explaining tradeoffs and results',
        ],
        resources: [
          { label: 'Qiskit Documentation', url: 'https://qiskit.org/documentation/' },
          { label: 'Cirq Documentation', url: 'https://quantumai.google/cirq' },
        ],
      },
    },
    {
      id: 'qarch-002',
      title: 'Quantum Systems Architect',
      location: 'San Francisco, CA',
      type: 'Hybrid',
      description:
        'Lead design of scalable, hardware-agnostic quantum execution pipelines. Define interfaces, error models, and orchestration strategies across vendors.',
      tags: ['Distributed Systems', 'gRPC', 'Scheduling', 'Noise Models'],
      assignment: {
        title: 'Multi-Backend Orchestrator Spec',
        brief:
          'Draft an architecture spec for a multi-backend quantum job orchestrator that handles queue times, error mitigation, and resumable runs. Include sequence diagrams and SLAs.',
        deliverables: [
          'Architecture document (5–8 pages)',
          '2 sequence diagrams for submit/monitor flows',
          'Risk analysis and rollout plan',
        ],
        resources: [
          { label: 'OpenQASM 3', url: 'https://github.com/Qiskit/openqasm' },
          { label: 'Mitiq (Error Mitigation)', url: 'https://mitiq.readthedocs.io' },
        ],
      },
    },
    {
      id: 'rsearch-003',
      title: 'Quantum Algorithms Researcher',
      location: 'Remote',
      type: 'Contract / Fellowship',
      description:
        'Explore near-term algorithms for optimization and simulation. Prototype VQE/ADAPT-VQE variants and benchmark against classical baselines.',
      tags: ['VQE', 'ADAPT-VQE', 'MPS/DMRG', 'Python'],
      assignment: {
        title: 'VQE Baseline and Enhancements',
        brief:
          'Implement a VQE baseline for a small molecular system (e.g., H2, LiH) and compare two ansatz/improvement strategies (e.g., ADAPT-VQE, SPSA). Present energy convergence vs. shot noise.',
        deliverables: [
          'Code + notebook with reproducible runs',
          'Plots of convergence and resource usage',
          'Discussion on scalability and noise sensitivity',
        ],
        resources: [
          { label: 'OpenFermion', url: 'https://github.com/quantumlib/OpenFermion' },
          { label: 'PennyLane', url: 'https://pennylane.ai' },
        ],
      },
    },
    {
      id: 'pd-004',
      title: 'Product Designer (Quantum UX)',
      location: 'New York, NY',
      type: 'On-site',
      description:
        'Craft intuitive experiences for complex quantum workflows. Translate research UX into elegant, production-ready design systems.',
      tags: ['Design Systems', 'Prototyping', 'Data Viz', 'Figma'],
      assignment: {
        title: 'Quantum Workflow UX Prototype',
        brief:
          'Design a dashboard for monitoring quantum jobs across providers. Include states for compiling, queueing, running, and mitigating. Provide interaction flows and empty states.',
        deliverables: [
          'Clickable prototype (Figma/Framer)',
          'Component library and tokens (blue/white theme)',
          'Annotated user flows (PNG/PDF)',
        ],
        resources: [
          { label: 'IBM Q Experience (Inspiration)', url: 'https://quantum-computing.ibm.com/' },
          { label: 'Radix UI', url: 'https://www.radix-ui.com' },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050915] via-[#0b1630] to-[#0a1a3a] text-white">
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 pb-24">
        <section className="backdrop-blur-xl/40 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-sky-500/10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Open Roles at bloq</h2>
              <p className="text-sky-200/80 mt-1">Build the quantum future with us.</p>
            </div>
          </div>
          <JobList jobs={jobs} onViewAssignment={setSelectedJob} />
        </section>
      </main>
      <AssignmentModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sky-100/70 text-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} bloq. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-white transition" href="#">Privacy</a>
              <a className="hover:text-white transition" href="#">Terms</a>
              <a className="hover:text-white transition" href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
