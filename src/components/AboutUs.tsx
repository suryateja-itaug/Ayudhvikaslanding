import React, { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
} from 'lucide-react';
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import chiefAdvisorImage from '../assets/images/about-chief-advisor.jpg';
import directorsImage from '../assets/images/about-directors.jpg';
import ecosystemHeroImage from '../assets/images/ayudh-ecosystem-hero.png';
import healthcareImage from '../assets/images/service_deep_cleaning_1784719519754.jpg';
import communityImage from '../assets/images/service_corporate_staffing_1784719493174.jpg';
import poshalaNareshImage from '../assets/images/poshala-naresh.jpg';
import jannuRajuImage from '../assets/images/jannu-raju.jpg';
import vijenderProfileImage from '../assets/images/vijender-profile.jpg';
import govinduProfileImage from '../assets/images/govindu-vinay-kumar-profile.jpg';

GlobalWorkerOptions.workerSrc = pdfWorker;

const leadershipProfiles = [
  {
    name: 'M. Vijender, MA, MBA, (LLB)',
    role: 'Honourable Director',
    image: vijenderProfileImage,
    alt: 'M. Vijender, Honourable Director',
    crop: { backgroundSize: 'cover', backgroundPosition: 'center 20%' },
    summary:
      'Mr. Vijender is the Managing Director of Ayudh Vikas. With an MBA background and strong leadership skills, he drives the organization with a clear vision of delivering reliable manpower solutions, professional cleaning services and impactful healthcare initiatives. His focus on innovation, integrity and customer satisfaction continues to guide the company towards sustainable growth and social impact.',
    highlights: ['MBA-backed leadership', 'Focus on innovation and integrity', 'Customer satisfaction and sustainable growth'],
  },
  {
    name: 'Poshala Naresh M.PHAM (LLB)',
    role: 'Director',
    image: poshalaNareshImage,
    alt: 'Poshala Naresh, Director',
    crop: { backgroundSize: 'cover', backgroundPosition: 'center 24%' },
    summary:
      'Mr. Poshala Naresh brings a valuable combination of pharmacy knowledge, legal understanding and public-service commitment to Ayudh Vikas Manpower. His multidisciplinary background supports ethical operations, compliance-oriented planning, team discipline and responsible service delivery.',
    highlights: ['Pharmacy and legal perspective', 'Compliance support', 'Ethical and responsible planning'],
  },
  {
    name: 'Allam Ashok',
    role: 'Director',
    image: directorsImage,
    alt: 'Allam Ashok, Director',
    crop: { backgroundSize: '335% auto', backgroundPosition: '50% 44%' },
    summary:
      'Mr. Allam Ashok serves as a Director and plays a key role in administration, project coordination and the successful execution of organizational initiatives. His dedication, discipline and commitment to teamwork help strengthen operational efficiency and contribute significantly to the organization’s mission and long-term success.',
    highlights: ['Administration and coordination', 'Team discipline and commitment', 'Operational efficiency and long-term success'],
  },
  {
    name: 'Govindu Vinay Kumar',
    role: 'Director',
    image: govinduProfileImage,
    alt: 'Govindu Vinay Kumar, Director',
    crop: { backgroundSize: 'cover', backgroundPosition: 'center 18%' },
    summary:
      'Mr. Govindu Vinay Kumar serves as a Director and is responsible for financial planning, budgeting and maintaining transparency in all financial operations. His strategic approach and strong financial management ensure the organization’s stability, accountability and sustainable development.',
    highlights: ['Financial planning and budgeting', 'Transparent operations', 'Strategic financial stability'],
  },
  {
    name: 'Dr. V. Ravinder',
    role: 'Chief Advisor',
    image: chiefAdvisorImage,
    alt: 'Dr. V. Ravinder, Chief Advisor',
    crop: { backgroundSize: '105% auto', backgroundPosition: '20% 9%' },
    summary:
      'Dr. V. Ravinder serves as the Chief Advisor of Ayudh Vikas. With his vast experience and valuable guidance, he supports the organization in strategic decision-making, policy development and overall growth. His wisdom and vision continue to inspire the team and strengthen our commitment to serve the community.',
    highlights: ['Strategic guidance', 'Policy development', 'Community-focused leadership'],
  },
  {
    name: 'Jannu Raju',
    role: 'Operations Director',
    image: jannuRajuImage,
    alt: 'Jannu Raju, Operations Director',
    crop: { backgroundSize: 'cover', backgroundPosition: 'center 20%' },
    summary:
      'Mr. Jannu Raju serves as Operations Director and supports the day-to-day coordination, execution and monitoring of Ayudh Vikas Manpower activities. His operational focus helps strengthen field-level implementation, team coordination, service delivery and timely follow-up across manpower, security and cleaning assignments.',
    highlights: ['Operational coordination', 'Field execution and follow-up', 'Service delivery management'],
  },
];

const FoundationStory: React.FC = () => (
  <section className="overflow-hidden bg-slate-950 text-white">
    <div className="relative min-h-[34rem] px-4 py-16 sm:px-6 lg:px-8">
      <img src={ecosystemHeroImage} alt="Ayudh Vikas Manpower service ecosystem" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-200">
            Ayudh Vikas Manpower
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Security, Deep Cleaning & Manpower Support
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">
            Ayudh Vikas Manpower provides disciplined security personnel, trained deep-cleaning teams, housekeeping support and operational manpower for homes, apartments, offices, institutions, events and industrial sites.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Our work is built around verified deployment, practical supervision, hygienic processes, fast coordination and dependable local teams who keep every site safer, cleaner and easier to manage.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <div className="-m-6 mb-5 overflow-hidden rounded-t-2xl border-b border-amber-200/20">
              <div className="relative h-72">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Sri_Sathya_Sai_Baba_PIC.jpg"
                  alt="Sri Sathya Sai Baba with devotees during bhajans"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-amber-100/10" />
                <div className="absolute bottom-4 left-4 rounded-full border border-amber-200/30 bg-amber-200/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-amber-100 backdrop-blur-md">
                  Love All • Serve All
                </div>
              </div>
            </div>
            <HeartHandshake className="h-9 w-9 text-amber-300" />
            <h2 className="mt-4 text-2xl font-black">Inspired by Sri Sathya Sai Baba</h2>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Ayudh Vikas Manpower draws inspiration from discipline, responsibility and service-minded leadership. Those values guide how we train teams, supervise sites and deliver dependable manpower, security and deep-cleaning support.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              ప్రేమ, కరుణ, నిస్వార్థ సేవ మరియు మానవత్వం వంటి విలువలు ప్రజలకు గౌరవంతో, వినయంతో మరియు ఎటువంటి వివక్ష లేకుండా సేవ చేయడానికి మాకు స్ఫూర్తినిస్తున్నాయి.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
          <img src={healthcareImage} alt="Healthcare and community support" className="h-56 w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-black">Our Purpose</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Our purpose is to protect people, property, workplaces, homes, institutions, and events through dependable security services and disciplined deep cleaning support. Ayudh Vikas focuses on practical ground execution: trained manpower, verified deployment, planned supervision, hygienic environments, and quick response for daily operational needs.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              We aim to make every site safer, cleaner, healthier, and easier to manage by combining professional security guarding, facility support, and deep cleaning practices with responsible local service.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
          <img src={communityImage} alt="Community development and teamwork" className="h-56 w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-black">Vision & Mission</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Our vision is to become a trusted name for security and deep cleaning across Telangana by delivering consistent manpower, transparent coordination, and service quality that clients can rely on every day.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Our mission is to deploy police-verified guards, trained cleaning teams, supervisors, and support staff with clear accountability, fast coordination, and a strong focus on safety, hygiene, dignity, and customer confidence.
            </p>
          </div>
        </article>
      </div>

      <div className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85"
            alt="Professional operations team planning security and cleaning services"
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-black">Founder & Chairman Message</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Ayudh Vikas was built with a practical belief: every client deserves a safe site, a clean environment, and a team that takes responsibility from the first call to final execution. Security and deep cleaning are not just services for us; they are daily commitments to discipline, trust, and public confidence.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Our focus is to deploy dependable guards, trained cleaning personnel, site supervisors, and support teams who understand ground realities. We continue to strengthen our systems, verification practices, training discipline, and customer response so homes, offices, schools, hospitals, apartments, events, and industrial locations can operate with confidence.
            </p>
            <p className="mt-4 text-sm font-black text-amber-200">
              Our promise is simple: reliable manpower, visible supervision, cleaner spaces, safer premises, and accountable service.
            </p>
            <p className="mt-2 text-sm font-bold text-slate-300">
              With Humble Regards, Mandala Vijender, MA, MBA, (LLB), Founder & Chairman, Ayudh Vikas
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Flipbook: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');

  useEffect(() => {
    let disposed = false;
    const loadingTask = getDocument({ url: `${import.meta.env.BASE_URL}about-us-brochure.pdf` });

    loadingTask.promise
      .then((pdf) => {
        if (disposed) return;
        pdfRef.current = pdf;
        setPageCount(pdf.numPages);
        setIsLoading(false);
      })
      .catch(() => {
        if (!disposed) setIsLoading(false);
      });

    return () => {
      disposed = true;
      loadingTask.destroy();
    };
  }, []);

  useEffect(() => {
    const renderPage = async () => {
      const pdf = pdfRef.current;
      const canvas = canvasRef.current;
      const stage = stageRef.current;
      if (!pdf || !canvas || !stage) return;

      const page = await pdf.getPage(pageNumber);
      const originalViewport = page.getViewport({ scale: 1 });
      const availableWidth = Math.min(stage.clientWidth - 24, 1100);
      const availableHeight = Math.max(360, window.innerHeight * 0.78);
      const scale = Math.min(availableWidth / originalViewport.width, availableHeight / originalViewport.height);
      const viewport = page.getViewport({ scale });
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width = Math.floor(viewport.width * pixelRatio);
      canvas.height = Math.floor(viewport.height * pixelRatio);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;
      await page.render({ canvas, canvasContext: context, viewport, transform: [pixelRatio, 0, 0, pixelRatio, 0, 0] }).promise;
    };

    renderPage();
    const resizeObserver = new ResizeObserver(renderPage);
    if (stageRef.current) resizeObserver.observe(stageRef.current);
    return () => resizeObserver.disconnect();
  }, [pageNumber, pageCount]);

  const changePage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > pageCount || nextPage === pageNumber) return;
    setDirection(nextPage > pageNumber ? 'next' : 'previous');
    setPageNumber(nextPage);
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (!pageCount) return;
      if (event.key === 'ArrowRight') changePage(pageNumber + 1);
      if (event.key === 'ArrowLeft') changePage(pageNumber - 1);
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [pageCount, pageNumber]);

  const progress = pageCount ? (pageNumber / pageCount) * 100 : 0;

  return (
    <section className="bg-[radial-gradient(circle_at_top,#1e293b_0%,#0f172a_45%,#020617_100%)] px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
          <BookOpen className="h-4 w-4" /> Company Profile
        </div>
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Explore our story</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">Turn through the company profile with realistic page depth, shadows, and keyboard navigation.</p>

        <div ref={stageRef} className="flipbook-stage relative mt-8 flex min-h-[430px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#111827,#020617_65%)] p-5 shadow-2xl shadow-slate-950/60 sm:p-8">
          <div className="absolute inset-x-10 bottom-6 h-8 rounded-full bg-black/45 blur-2xl" />
          <div className="absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-200/25 to-transparent md:block" />
          {isLoading ? (
            <div className="text-sm font-semibold text-slate-300">Loading company profile…</div>
          ) : pageCount ? (
            <>
              <button
                type="button"
                onClick={() => changePage(pageNumber - 1)}
                disabled={pageNumber === 1}
                className="absolute left-3 top-1/2 z-20 hidden h-16 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 disabled:pointer-events-none disabled:opacity-0 sm:flex"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => changePage(pageNumber + 1)}
                disabled={pageNumber === pageCount}
                className="absolute right-3 top-1/2 z-20 hidden h-16 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 disabled:pointer-events-none disabled:opacity-0 sm:flex"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="flipbook-stack relative">
                <div className="flipbook-paper-shadow flipbook-paper-shadow--one" />
                <div className="flipbook-paper-shadow flipbook-paper-shadow--two" />
                <div key={pageNumber} className={`flipbook-page flipbook-page--${direction} relative overflow-hidden bg-white shadow-2xl`}>
                  <div className="flipbook-page-sheen" />
                  <canvas ref={canvasRef} aria-label={`Company profile page ${pageNumber} of ${pageCount}`} />
                  <div className="flipbook-page-curl" />
                </div>
              </div>

              <div className="absolute bottom-4 left-6 right-6 z-20">
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-amber-300 transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </>
          ) : (
            <a className="text-sm font-bold text-amber-300 underline" href={`${import.meta.env.BASE_URL}about-us-brochure.pdf`} target="_blank" rel="noreferrer">Open company profile PDF</a>
          )}
        </div>

        {pageCount > 0 && (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => changePage(pageNumber - 1)} disabled={pageNumber === 1} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35">
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-slate-200">Page {pageNumber} / {pageCount}</span>
            <button onClick={() => changePage(pageNumber + 1)} disabled={pageNumber === pageCount} className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-35">
              Next <ChevronRight className="h-4 w-4" />
            </button>
            <span className="w-full text-xs font-semibold text-slate-400">Use left and right arrow keys to turn pages</span>
          </div>
        )}
      </div>
    </section>
  );
};

export const AboutUs: React.FC = () => (
  <>
    <FoundationStory />
    <section className="bg-slate-950 px-4 py-14 text-white sm:py-18 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-200">
            Leadership Team
          </span>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Guided by vision. Driven by purpose.
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Meet the leadership behind Ayudh Vikas Manpower, security and deep-cleaning services. Each profile is presented with the person image beside their role, responsibility, and contribution.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {leadershipProfiles.map((profile) => (
            <article
              key={profile.name}
              className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-slate-950/30 backdrop-blur md:grid-cols-[18rem_1fr]"
            >
              <div
                className="min-h-72 bg-slate-900 bg-no-repeat md:min-h-full"
                style={{ backgroundImage: `url(${profile.image})`, ...profile.crop }}
                role="img"
                aria-label={profile.alt}
              />

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-950">
                    {profile.role}
                  </span>
                  <span className="h-px min-w-12 flex-1 bg-gradient-to-r from-amber-300/70 to-transparent" />
                </div>
                <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">{profile.name}</h2>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base lg:leading-8">{profile.summary}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {profile.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-bold text-slate-100">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <Flipbook />
  </>
);
