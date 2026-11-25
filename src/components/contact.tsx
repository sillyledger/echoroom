import Navbar from "./Navbar";
import CopyEmail from "./CopyEmail";
import Polaroid from "./Polaroid";

const EMAIL = "p@ryoka.xyz";
const MAILTO = `mailto:${EMAIL}?subject=Echo%20Room`;

const REASONS = [
  {
    title: "A topic from ordinary life",
    text: "Work, habits, cities, friendship, decisions. Something you would like explained in clear English.",
  },
  {
    title: "A part that was hard to follow",
    text: "A word, a sentence or a moment where the pace felt too fast. It helps make the next episodes better.",
  },
  {
    title: "Where you listen from",
    text: "Your city, your level, how you use the show. It is good to know who is on the other side.",
  },
];

export default function Contact() {
  return (
    <section className="contact">
      <Navbar />

      <div className="contact-hero container">
        <div className="contact-hero-text">
          <p className="label">Contact</p>
          <h1 className="contact-h1">Send a topic.</h1>
          <p className="contact-lead">
            Echo Room is one voice, but the best topics often come from listeners. If something from
            ordinary life is on your mind, send it. Simple English is fine.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-person">
            <Polaroid className="polaroid-contact" sizes="110px" alt="Pieter Borremans" />
            <div className="contact-person-text">
              <span className="contact-name">Pieter Borremans</span>
              <span className="contact-role">The voice of Echo Room</span>
            </div>
          </div>
          <a href={MAILTO} className="contact-email">{EMAIL}</a>
          <div className="contact-actions">
            <a href={MAILTO} className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Email
            </a>
            <CopyEmail email={EMAIL} label="Copy address" className="btn-secondary" />
          </div>
        </div>
      </div>

      <div className="contact-block container">
        <div className="contact-block-head">
          <p className="label">What to send</p>
          <h2 className="contact-h2">Three good reasons to write.</h2>
        </div>
        <ol className="contact-reasons">
          {REASONS.map((r, i) => (
            <li key={r.title} className="contact-reason">
              <span className="contact-reason-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <span className="contact-reason-title">{r.title}</span>
                <span className="contact-reason-text">{r.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="contact-foot container">
        <p className="contact-note">
          Pieter reads every email. Topics that work well for B2 learners may become an episode.
        </p>
      </div>
    </section>
  );
}
