import Navbar from "./Navbar";
import Polaroid from "./Polaroid";

const STUDY_BREW_URL = "https://studybrew.co";

const FACTS = [
  { label: "Show", value: "Echo Room" },
  { label: "Level", value: "B2" },
  { label: "Part of", value: "Study Brew" },
];

const SHOW_FACTS = [
  { label: "Level", value: "B2", line: "Words you know or can guess. Nothing too hard." },
  { label: "Pace", value: "Natural", line: "Closer to real conversation than the slow Study Brew shows." },
  { label: "Length", value: "5–10 min", line: "Short enough for a walk, a train ride or a coffee." },
  { label: "Topics", value: "Ordinary life", line: "Work, habits, cities, friendship, decisions. One topic per episode." },
];

const LEVELS = [
  { text: "A1–A2 · Story Valley, Simply Why" },
  { text: "B1 · Good Morning" },
  { text: "B1–B2 · Study Brew, Story Brew" },
  { text: "B2 · Echo Room", current: true },
];

// Profile URLs are a subset of the sameAs list in app/about/page.tsx
const SOCIAL_LINKS = [
  { label: "Personal blog", href: "https://pieterborremans.com" },
  { label: "pieter.tw", href: "https://www.pieter.tw" },
  { label: "indiehacker.blog", href: "https://www.indiehacker.blog" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pieter-borremans/" },
];

export default function About() {
  return (
    <section className="about">
      <Navbar />

      <div className="about-hero container">
        <div className="about-hero-text">
          <p className="label">About the voice</p>
          <h1 className="about-h1">Pieter Borremans</h1>
          <p className="about-lead">
            The voice of Echo Room. Born in Indonesia, raised in Belgium, lived in Shenzhen, London
            and the US. English is not his first language.
          </p>
          <dl className="about-facts">
            {FACTS.map((f) => (
              <div key={f.label} className="about-fact">
                <dt className="label">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="about-hero-side">
          <Polaroid
            className="polaroid-about"
            sizes="(max-width: 900px) 80vw, 340px"
            alt="Portrait of Pieter Borremans"
            priority
          />
        </div>
      </div>

      <div className="about-block container">
        <div className="about-block-head">
          <p className="label">Why a non-native voice</p>
          <h2 className="about-h2">He learned English the way you are learning it now.</h2>
        </div>
        <div className="about-block-body">
          <p>
            English is Pieter&apos;s second language. He learned it over many years, because he
            needed it. He still makes mistakes, and he still looks up words.
          </p>
          <p>
            There is no AI voice on Echo Room and no hired narrator. Every episode is recorded by him.
          </p>
          <p>
            If English is your second language too, it can help to hear someone who went the same
            way. Not a perfect accent. Just clear English, from someone who had to learn it.
          </p>
        </div>
      </div>

      <div className="about-block container">
        <div className="about-block-head">
          <p className="label">What Echo Room is</p>
          <h2 className="about-h2">One topic. Clear English. Natural pace.</h2>
        </div>
        <div className="about-block-body">
          <div className="about-cards">
            {SHOW_FACTS.map((f) => (
              <div key={f.label} className="about-card">
                <span className="label">{f.label}</span>
                <span className="about-card-value">{f.value}</span>
                <span className="about-card-line">{f.line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-block container">
        <div className="about-block-head">
          <p className="label">Part of Study Brew</p>
          <h2 className="about-h2">The top step of the ladder.</h2>
        </div>
        <div className="about-block-body">
          <p>
            Echo Room is one of the English shows by Study Brew, recorded by the same voice from easy
            stories for kids up to B2. When the slow stories feel easy, Echo Room is the next step.
          </p>
          <ul className="about-levels">
            {LEVELS.map((l) => (
              <li key={l.text} className={`about-level${l.current ? " about-level-current" : ""}`}>
                {l.text}
              </li>
            ))}
          </ul>
          <p>
            <a href={STUDY_BREW_URL} className="about-accent-link" target="_blank" rel="noopener noreferrer">
              See all shows on studybrew.co ↗
            </a>
          </p>
        </div>
      </div>

      <div className="about-block about-block-last container">
        <div className="about-block-head">
          <p className="label">Outside the show</p>
          <h2 className="about-h2">Builder and writer.</h2>
        </div>
        <div className="about-block-body">
          <p>
            Outside Echo Room, Pieter is the founder of{" "}
            <a href="https://www.ryokagroup.com" className="about-inline-link" target="_blank" rel="noopener noreferrer">
              Ryoka Group
            </a>{" "}
            and{" "}
            <a href="https://www.onpointvc.com" className="about-inline-link" target="_blank" rel="noopener noreferrer">
              OnPoint VC
            </a>
            , where he builds software and media brands. He also writes about life abroad and about
            building things alone.
          </p>
          <div className="about-links">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="about-link-pill" target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
