import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Disclaimer | Echo Room",
  description:
    "Echo Room is for information and entertainment only, not professional advice. Includes our affiliate disclosure.",
  alternates: {
    canonical: "https://www.echoroom.xyz/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <section className="legal">
      <Navbar />
      <div className="legal-inner">
        <h1>Disclaimer</h1>
        <p className="legal-updated">Last updated: October 2, 2026</p>

        <h2>About this show</h2>
        <p>
          Echo Room is a podcast and website created by Pieter Borremans.
          Everything published here, including episodes, show notes, episode
          descriptions and pages on this site, is for general information and
          entertainment only.
        </p>

        <h2>Not professional advice</h2>
        <p>
          Nothing on Echo Room is financial, investment, legal, tax, medical or
          mental health advice. Episodes about business, money, investing,
          careers or wellbeing reflect personal experience and opinion. They
          are not recommendations for your situation.
        </p>
        <p>
          Before making decisions about your money, your health, your business
          or your legal position, talk to a qualified professional who knows
          your circumstances.
        </p>

        <h2>Personal opinions</h2>
        <p>
          The views shared on Echo Room are Pieter&apos;s own. They do not
          represent the official position of Ryoka Group, OnPoint VC, or any
          other company or organisation he is involved with.
        </p>
        <p>
          Episodes are recorded without a script. Opinions can change over
          time, and some things said in an episode may later turn out to be
          incomplete or wrong.
        </p>

        <h2>Accuracy</h2>
        <p>
          We try to get things right, but we make no guarantees that any
          information on this site or in an episode is complete, accurate or up
          to date. You use it at your own risk.
        </p>

        <h2>Affiliate disclosure</h2>
        <p>
          Some links on this site, in show notes or in episode descriptions may
          be affiliate links. If you click one and make a purchase, Echo Room
          may earn a small commission at no extra cost to you.
        </p>
        <p>
          We only link to products and services we use or genuinely believe are
          worth a look. Affiliate relationships never decide what is said on the
          show. If an episode or post is sponsored, it will be clearly labelled
          as sponsored.
        </p>
        <p>
          Mentioning a company, product or person on the show does not mean they
          endorse Echo Room, or that Echo Room endorses them, unless we say so
          explicitly.
        </p>

        <h2>External links</h2>
        <p>
          This site links to other websites and platforms, such as Spotify,
          Apple Podcasts, YouTube and Amazon Music. We do not control those
          sites and are not responsible for their content, availability or
          privacy practices.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent allowed by law, Pieter Borremans and Echo Room
          are not liable for any loss or damage that results from relying on
          anything published on this site or in an episode.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this disclaimer? Email{" "}
          <a href="mailto:p@ryoka.xyz">p@ryoka.xyz</a>.
        </p>
      </div>
    </section>
  );
}
