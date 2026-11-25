import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Polaroid from "@/components/Polaroid";
import { PLATFORM_LINKS } from "@/lib/links";

export const revalidate = 3600;

const TITLE = "Echo Room | B2 English Podcast at a Natural Pace";
const DESCRIPTION =
  "A B2 English podcast about ordinary life, spoken clearly at a natural pace by a non-native speaker. Part of Study Brew.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Echo Room",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const STUDY_BREW_URL = "https://studybrew.co";
const linkFor = (label: string) =>
  PLATFORM_LINKS.find((p) => p.label === label)?.href ?? PLATFORM_LINKS[0].href;

const STEPS = [
  { level: "A1–A2", name: "Story Valley", line: "Easy English stories to share with your child." },
  { level: "A1–A2", name: "Simply Why", line: "One everyday “why” question in very easy English." },
  { level: "B1", name: "Good Morning", line: "A calm daily habit to start your day in English." },
  { level: "B1–B2", name: "Study Brew", line: "Everyday stories about daily life, travel and work." },
  { level: "B1–B2", name: "Story Brew", line: "Bedtime stories in slow, calm English." },
  { level: "B2", name: "Echo Room", line: "Ordinary life, spoken at a natural pace.", current: true },
];

const POINTS = [
  {
    title: "Same voice at every level",
    text: "You get used to one speaker, so each new step only changes the English, not the person.",
  },
  {
    title: "Slow first, then natural",
    text: "The lower shows are slow on purpose. Echo Room keeps the words clear and lets the speed go up.",
  },
  {
    title: "Move up when it feels easy",
    text: "If the slow stories don’t challenge you anymore, this is your next show.",
  },
];

function PodcastIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M7.5 17.5a7 7 0 1 1 9 0" />
      <path d="M9.5 14.5a3.5 3.5 0 1 1 5 0" />
      <circle cx="12" cy="11" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 14.5v6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="landing">
      <section className="landing-hero">
        <Navbar />
        <div className="landing-hero-grid container">
          <div className="landing-hero-text">
            <div className="landing-label-row">
              <span className="level-pill">B2</span>
              <span className="label">A Study Brew show</span>
            </div>
            <h1 className="landing-h1">B2 English at the speed people really talk.</h1>
            <p className="landing-lede">
              A B2 English podcast about ordinary life. One topic in every episode, five to ten
              minutes, spoken in clear English at a natural pace. For people building a life in a
              second language.
            </p>
            <div className="landing-ctas">
              <a href={linkFor("Apple Podcasts")} className="btn-primary" target="_blank" rel="noopener noreferrer">
                <PodcastIcon />
                Listen on Apple Podcasts
              </a>
              <a href={linkFor("Spotify")} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
              <a href="#listen" className="btn-secondary">
                All platforms
              </a>
            </div>
            <p className="landing-note">
              <span className="landing-dot" aria-hidden="true" />
              New episodes regularly · No AI voice
            </p>
          </div>

          <div className="landing-hero-side">
            <Polaroid className="polaroid-hero" sizes="(max-width: 900px) 80vw, 420px" priority />
            <div className="who-card">
              <span className="label label-accent">Who&apos;s talking</span>
              <p>
                <strong>Pieter.</strong> Born in Indonesia, raised in Belgium, lived in Shenzhen and
                London. English is not his first language. He learned it the way you are learning it
                now, and he records every episode himself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ladder" aria-labelledby="ladder-heading">
        <div className="container">
        <div className="ladder-head">
          <div>
            <p className="label">The Study Brew ladder</p>
            <h2 id="ladder-heading" className="ladder-h2">One voice. Six shows. Pick your step.</h2>
          </div>
          <p className="ladder-intro">
            Every show is recorded by the same non-native voice. You start slow, with simple words.
            When the slow stories feel easy, you move up. Echo Room is the step where the words stay
            at B2, but the pace gets closer to real conversation.
          </p>
        </div>

        <ol className="ladder-steps">
          {STEPS.map((step, i) => (
            <li
              key={step.name}
              className={`ladder-step ladder-step-${i + 1}${step.current ? " ladder-step-current" : ""}`}
              aria-current={step.current ? "step" : undefined}
            >
              {step.current && (
                <Polaroid className="polaroid-step" sizes="140px" alt="" />
              )}
              <span className="ladder-level">{step.level}</span>
              <div className="ladder-step-body">
                <span className="ladder-name">{step.name}</span>
                <span className="ladder-line">{step.line}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="ladder-points">
          {POINTS.map((point) => (
            <div key={point.title} className="ladder-point">
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          ))}
        </div>

        <p>
          <a href={STUDY_BREW_URL} className="ladder-link" target="_blank" rel="noopener noreferrer">
            See every show and level on studybrew.co ↗
          </a>
        </p>
        </div>
      </section>
    </main>
  );
}
