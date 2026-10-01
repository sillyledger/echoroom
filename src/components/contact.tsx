import Image from "next/image";
import Navbar from "./Navbar";
import CopyEmail from "./CopyEmail";

const EMAIL = "p@ryoka.xyz";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Echo Room")}`;

const PROMPTS = [
  "A topic you want me to think out loud about",
  "A question you've been sitting on",
  "A take from an episode you think I got wrong",
];

export default function Contact() {
  return (
    <section className="contact">
      <Navbar />
      <div className="contact-inner">
        <p className="section-label contact-label">Contact</p>
        <h1>Talk back.</h1>
        <p className="contact-lede">
          Echo Room is one voice, but it doesn&apos;t have to be one-sided. The best
          episodes often start with someone else&apos;s question. Send me:
        </p>

        <ol className="contact-list">
          {PROMPTS.map((p, i) => (
            <li key={p}>
              <span className="contact-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="contact-item">{p}</span>
            </li>
          ))}
        </ol>

        <div className="contact-card">
          <div className="contact-avatar">
            <Image
              src="/Pieter_Borremans.jpeg"
              alt="Pieter Borremans"
              fill
              sizes="72px"
              className="contact-avatar-img"
            />
          </div>
          <div className="contact-who">
            <span className="contact-name">Pieter Borremans</span>
            <a href={MAILTO} className="contact-email">{EMAIL}</a>
          </div>
          <div className="contact-actions">
            <CopyEmail email={EMAIL} />
            <a href={MAILTO} className="btn-primary contact-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Email me
            </a>
          </div>
        </div>

        <p className="contact-note">
          I read every email. If your idea makes it into an episode, I&apos;ll mention
          you by first name, or keep it anonymous if you prefer.
        </p>
      </div>
    </section>
  );
}
