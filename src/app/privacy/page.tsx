import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Echo Room",
  description:
    "How Echo Room handles your information: no accounts, no ads, no tracking cookies, and no selling of personal data.",
  alternates: {
    canonical: "https://www.echoroom.xyz/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="legal">
      <Navbar />
      <div className="legal-inner">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: October 2, 2026</p>

        <h2>Who we are</h2>
        <p>
          Echo Room (echoroom.xyz) is a podcast and website by Pieter
          Borremans, part of Ryoka Group. If you have any question about your
          privacy, contact us at <a href="mailto:p@ryoka.xyz">p@ryoka.xyz</a>.
        </p>

        <h2>The short version</h2>
        <p>
          Echo Room does not have user accounts, does not run ads and does not
          sell personal data. We collect as little as possible.
        </p>

        <h2>Information collected automatically</h2>
        <p>
          Like almost every website, this site is served by a hosting provider
          (Vercel) that keeps standard server logs. These logs can include your
          IP address, browser type, device type, the pages you visited and the
          time of your visit. They are used to keep the site running, secure
          and free of abuse. We do not use them to identify you personally.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          This site does not use advertising cookies or tracking cookies, and
          does not use third-party analytics to profile visitors.
        </p>

        <h2>Emails you send us</h2>
        <p>
          If you email us, we use your email address and message only to read
          and reply to you. We keep that correspondence for as long as it is
          useful for the conversation, and you can ask us to delete it at any
          time.
        </p>

        <h2>Podcast platforms and other sites</h2>
        <p>
          When you click through to Spotify, Apple Podcasts, YouTube, Amazon
          Music or any other external site, that platform&apos;s own privacy
          policy applies. We do not receive personal information about you from
          those platforms, apart from anonymous, aggregated listening
          statistics that podcast hosts normally see.
        </p>

        <h2>Sharing your information</h2>
        <p>
          We do not sell, rent or trade personal information. We only share it
          with service providers that are needed to run the site (such as our
          hosting provider), or when the law requires it.
        </p>

        <h2>International transfers</h2>
        <p>
          Our hosting provider may process data on servers outside your
          country, including in the United States. Where required, those
          transfers are covered by appropriate safeguards offered by the
          provider.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live, including the European Union, the United
          Kingdom and Taiwan, you may have the right to:
        </p>
        <ul>
          <li>ask what personal information we hold about you</li>
          <li>ask us to correct or delete it</li>
          <li>object to or restrict how we use it</li>
          <li>receive a copy of it</li>
        </ul>
        <p>
          To use any of these rights, email{" "}
          <a href="mailto:p@ryoka.xyz">p@ryoka.xyz</a>. If you are unhappy with
          how we handled your request, you can also contact your local data
          protection authority.
        </p>

        <h2>Children</h2>
        <p>
          Echo Room is not directed at children under 16, and we do not
          knowingly collect personal information from them.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If we change this policy, we will update the date at the top of this
          page. Significant changes will be noted on this page.
        </p>

        <h2>Contact</h2>
        <p>
          Email <a href="mailto:p@ryoka.xyz">p@ryoka.xyz</a> for any privacy
          question or request.
        </p>
      </div>
    </section>
  );
}
