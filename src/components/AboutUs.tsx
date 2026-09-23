import React, { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
} from 'lucide-react';
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import ecosystemHeroImage from '../assets/images/ayudh-ecosystem-hero.png';
import healthcareImage from '../assets/images/service_deep_cleaning_1784719519754.jpg';
import communityImage from '../assets/images/service_corporate_staffing_1784719493174.jpg';
import poshalaNareshImage from '../assets/images/poshala-naresh.jpg';
import jannuRajuImage from '../assets/images/jannu-raju.jpg';
import vijenderProfileImage from '../assets/images/vijender-profile.jpg';
import govinduProfileImage from '../assets/images/govindu-vinay-kumar-profile.jpg';
import allamAshokImage from '../assets/images/allam-ashok-profile.jpg';
import ravinderProfileImage from '../assets/images/ravinder-profile.jpg';

GlobalWorkerOptions.workerSrc = pdfWorker;

const leadershipProfiles = [
  {
    name: 'M. Vijender, MA, MBA, (LLB)',
    role: 'Honourable Director',
    image: vijenderProfileImage,
    alt: 'M. Vijender, Honourable Director',
    position: 'object-[center_20%]',
    summary:
      'Mr. Vijender is the Managing Director of Ayudh Vikas. With an MBA background and strong leadership skills, he drives the organization with a clear vision of delivering reliable manpower solutions, professional cleaning services and impactful healthcare initiatives. His focus on innovation, integrity and customer satisfaction continues to guide the company towards sustainable growth and social impact.',
    highlights: ['MBA-backed leadership', 'Focus on innovation and integrity', 'Customer satisfaction and sustainable growth'],
  },
  {
    name: 'Poshala Naresh M.PHAM (LLB)',
    role: 'Director',
    image: poshalaNareshImage,
    alt: 'Poshala Naresh, Director',
    position: 'object-[center_18%]',
    summary:
      'Mr. Poshala Naresh brings a valuable combination of pharmacy knowledge, legal understanding and public-service commitment to Ayudh Vikas Manpower. His multidisciplinary background supports ethical operations, compliance-oriented planning, team discipline and responsible service delivery.',
    highlights: ['Pharmacy and legal perspective', 'Compliance support', 'Ethical and responsible planning'],
  },
  {
    name: 'Allam Ashok',
    role: 'Director',
    image: allamAshokImage,
    alt: 'Allam Ashok, Director',
    position: 'object-[center_20%]',
    summary:
      'Mr. Allam Ashok serves as a Director and plays a key role in administration, project coordination and the successful execution of organizational initiatives. His dedication, discipline and commitment to teamwork help strengthen operational efficiency and contribute significantly to the organization’s mission and long-term success.',
    highlights: ['Administration and coordination', 'Team discipline and commitment', 'Operational efficiency and long-term success'],
  },
  {
    name: 'Govindu Vinay Kumar',
    role: 'Director',
    image: govinduProfileImage,
    alt: 'Govindu Vinay Kumar, Director',
    position: 'object-[center_12%]',
    summary:
      'Mr. Govindu Vinay Kumar serves as a Director and is responsible for financial planning, budgeting and maintaining transparency in all financial operations. His strategic approach and strong financial management ensure the organization’s stability, accountability and sustainable development.',
    highlights: ['Financial planning and budgeting', 'Transparent operations', 'Strategic financial stability'],
  },
  {
    name: 'Dr. V. Ravinder',
    role: 'Chief Advisor',
    image: ravinderProfileImage,
    alt: 'Dr. V. Ravinder, Chief Advisor',
    position: 'object-[center_18%]',
    summary:
      'Dr. V. Ravinder serves as the Chief Advisor of Ayudh Vikas. With his vast experience and valuable guidance, he supports the organization in strategic decision-making, policy development and overall growth. His wisdom and vision continue to inspire the team and strengthen our commitment to serve the community.',
    highlights: ['Strategic guidance', 'Policy development', 'Community-focused leadership'],
  },
  {
    name: 'Jannu Raju',
    role: 'Operations Director',
    image: jannuRajuImage,
    alt: 'Jannu Raju, Operations Director',
    position: 'object-[center_12%]',
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
          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
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
              <div className="relative h-52 sm:h-72">
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
  const liveCanvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const turningRef = useRef(false);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const [isTurning, setIsTurning] = useState(false);

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
    let cancelled = false;

    const renderPage = async () => {
      const pdf = pdfRef.current;
      const canvas = liveCanvasRef.current;
      const stage = stageRef.current;
      if (!pdf || !canvas || !stage) return;

      const page = await pdf.getPage(pageNumber);
      if (cancelled) return;

      const originalViewport = page.getViewport({ scale: 1 });
      const availableWidth = Math.max(stage.clientWidth, 280);
      const availableHeight = Math.min(window.innerHeight * 0.82, window.innerWidth < 640 ? 640 : 920);
      const scale = Math.min(availableWidth / originalViewport.width, availableHeight / originalViewport.height);
      const viewport = page.getViewport({ scale });
      const outputScale = Math.min(window.devicePixelRatio || 1, 2);
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) return;

      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({
        canvas,
        canvasContext: context,
        viewport,
        transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
      }).promise;
    };

    renderPage();
    const resizeObserver = new ResizeObserver(() => {
      if (!turningRef.current) renderPage();
    });
    if (stageRef.current) resizeObserver.observe(stageRef.current);
    return () => {
      cancelled = true;
      resizeObserver.disconnect();
    };
  }, [pageNumber, pageCount]);

  const snapshotLivePage = () => {
    const source = liveCanvasRef.current;
    const overlay = overlayCanvasRef.current;
    if (!source || !overlay || source.width === 0) return;
    overlay.width = source.width;
    overlay.height = source.height;
    overlay.style.width = source.style.width;
    overlay.style.height = source.style.height;
    const context = overlay.getContext('2d', { alpha: false });
    if (!context) return;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.drawImage(source, 0, 0);
  };

  const changePage = (nextPage: number) => {
    if (turningRef.current) return;
    if (nextPage < 1 || nextPage > pageCount || nextPage === pageNumber) return;
    snapshotLivePage();
    turningRef.current = true;
    setDirection(nextPage > pageNumber ? 'next' : 'previous');
    setIsTurning(true);
    setPageNumber(nextPage);
    window.setTimeout(() => {
      turningRef.current = false;
      setIsTurning(false);
    }, 740);
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

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerRef.current;
    pointerRef.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) changePage(pageNumber + 1);
    else changePage(pageNumber - 1);
  };

  return (
    <section className="bg-slate-950 py-10 text-white sm:py-14">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
          <BookOpen className="h-4 w-4" /> Company Profile
        </div>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Explore our story</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
          Swipe, tap the arrows, or use the keyboard to turn the pages.
        </p>
      </div>

      <div
        ref={stageRef}
        className="flipbook-viewport relative mx-auto mt-6 w-full max-w-5xl select-none px-2 sm:px-4"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerRef.current = null;
        }}
      >
        {isLoading ? (
          <div className="grid min-h-[24rem] place-items-center text-sm font-semibold text-slate-300">Loading company profile…</div>
        ) : pageCount ? (
          <div className="relative mx-auto w-fit max-w-full">
            <div className="flipbook-leaf overflow-hidden">
              <canvas ref={liveCanvasRef} aria-label={`Company profile page ${pageNumber} of ${pageCount}`} />
            </div>

            <div className={`flipbook-sheet ${isTurning ? `flipbook-sheet--${direction}` : 'hidden'}`}>
              <canvas ref={overlayCanvasRef} aria-hidden="true" />
            </div>

            <button
              type="button"
              onClick={() => changePage(pageNumber - 1)}
              disabled={pageNumber === 1 || isTurning}
              className="absolute left-1 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-slate-950/55 text-white backdrop-blur-md disabled:opacity-0 sm:left-3 sm:h-12 sm:w-12"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => changePage(pageNumber + 1)}
              disabled={pageNumber === pageCount || isTurning}
              className="absolute right-1 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-slate-950/55 text-white backdrop-blur-md disabled:opacity-0 sm:right-3 sm:h-12 sm:w-12"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="py-16 text-center">
            <a className="text-sm font-bold text-amber-300 underline" href={`${import.meta.env.BASE_URL}about-us-brochure.pdf`} target="_blank" rel="noreferrer">
              Open company profile PDF
            </a>
          </div>
        )}
      </div>

      {pageCount > 0 && (
        <div className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-3 px-4">
          <button
            onClick={() => changePage(pageNumber - 1)}
            disabled={pageNumber === 1 || isTurning}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-slate-200">
            Page {pageNumber} / {pageCount}
          </span>
          <button
            onClick={() => changePage(pageNumber + 1)}
            disabled={pageNumber === pageCount || isTurning}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-35"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
          <span className="w-full text-center text-xs font-semibold text-slate-400">Swipe left or right to turn the page</span>
        </div>
      )}
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
              className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-slate-950/30 backdrop-blur md:grid-cols-[15rem_1fr] lg:grid-cols-[17.5rem_1fr]"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden bg-slate-200 sm:max-w-md md:mx-0 md:aspect-auto md:h-full md:max-w-none md:min-h-[22rem]">
                <img
                  src={profile.image}
                  alt={profile.alt}
                  className={`absolute inset-0 h-full w-full object-cover ${profile.position}`}
                />
              </div>

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
