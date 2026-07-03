import Link from "next/link";
import { Fraunces, Outfit } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["900"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Lifelist privacy policy — stable URL /lifelist/privacy. Owned by ticket 201-113.
// Written to match the app's actual behaviour (verified: no analytics/tracking/
// crash SDKs; data is Google OAuth identity + saved lists + completions in Supabase).
//
// Confirmed items (kept for history):
//   1. EFFECTIVE_DATE = publish date; bumped when the policy materially changes.
//   2. Supabase hosting region: EU West 1 (Ireland), stated in sections 6 and 9.
//   3. In-app account deletion (ticket 201-114) shipped — the "Deleting your
//      data" section leads with the in-app Settings route, email as a fallback.
// A light legal review is recommended given Apple's prior scrutiny.

const EFFECTIVE_DATE = "3 July 2026";

export default function LifelistPrivacyPolicy() {
  return (
    <main className={`${outfit.className} min-h-screen bg-white text-[#111111]`}>
      {/* Diagonal sunset stripes (Figma node 1450:633) */}
      <div
        className="h-24 w-full sm:h-28"
        style={{
          background:
            "linear-gradient(125deg, #f5c800 0%, #f5c800 20%, #f7a046 20%, #f7a046 40%, #f05a28 40%, #f05a28 60%, #e61e2a 60%, #e61e2a 80%, #1c1d6e 80%, #1c1d6e 100%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <Link href="/lifelist" className="text-sm text-[#555555] hover:text-[#111111]">
          ← Back to Lifelist
        </Link>

        <article className="mt-8">
          <header className="mb-10">
            <h1
              className={`${fraunces.className} m-0 mt-0 text-4xl font-black tracking-tight text-[#111111] sm:text-5xl`}
            >
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-[#bbbbbb]">Last updated: {EFFECTIVE_DATE}</p>
          </header>

          <section className="mb-10 leading-relaxed text-[#555555]">
            <p className="mb-4">
              201 Studio Ltd (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
              Lifelist mobile application (the &quot;App&quot;). This Privacy Policy explains what
              personal data we collect when you use Lifelist, why we collect it, how it is stored, and
              the rights and choices you have.
            </p>
            <p>
              We have deliberately kept Lifelist&apos;s data use minimal. We do not use any analytics,
              advertising, or tracking technologies, and we only collect what we need to run the
              features you use. By using the App, you agree to the practices described in this policy.
            </p>
          </section>

          <Section title="1. Who we are">
            <p>
              The data controller responsible for your personal data is 201 Studio Ltd, a company
              registered in the United Kingdom. Our contact details are in the{" "}
              <a href="#contact" className="text-[#822B8C] underline underline-offset-2">
                Contact us
              </a>{" "}
              section below.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <p className="mb-3">We collect the following, and only the following:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-[#111111]">Account identity.</span> When you sign in
                with Google, we receive basic profile information from Google — typically your name,
                email address, and a unique account identifier — which we use to create and identify
                your account.
              </li>
              <li>
                <span className="font-medium text-[#111111]">Your saved lists.</span> The curated
                lists you choose to save and pursue within the App.
              </li>
              <li>
                <span className="font-medium text-[#111111]">Your completions.</span> The experiences
                you mark as done, which we use to show your progress and award medals.
              </li>
            </ul>
          </Section>

          <Section title="3. What we do not collect">
            <p className="mb-3">
              To be clear about what Lifelist does <span className="font-medium">not</span> do:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>We do not use analytics or usage-tracking tools.</li>
              <li>We do not use advertising networks or share data with advertisers.</li>
              <li>We do not use cookies or similar tracking technologies for advertising.</li>
              <li>
                We do not collect your location, contacts, photos, or any data beyond what is listed
                in section 2.
              </li>
              <li>We do not sell or rent your personal data to anyone.</li>
            </ul>
          </Section>

          <Section title="4. How we use your information">
            <p>
              We use your information solely to provide and operate the App: to authenticate you, to
              save the lists you choose, to record the experiences you complete, and to show your
              progress and medals. We do not use your data for profiling, advertising, or any purpose
              unrelated to the features you use.
            </p>
          </Section>

          <Section title="5. Legal basis for processing (UK GDPR)">
            <p className="mb-3">
              For users in the United Kingdom and the European Economic Area, we rely on the following
              legal bases under the UK GDPR and EU GDPR:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-[#111111]">Performance of a contract</span> —
                processing your account identity, saved lists, and completions is necessary to provide
                the App&apos;s functionality to you.
              </li>
              <li>
                <span className="font-medium text-[#111111]">Consent</span> — you provide consent when
                you choose to sign in and use the App, and you may withdraw it at any time by deleting
                your account.
              </li>
            </ul>
          </Section>

          <Section title="6. How your data is stored and secured">
            <p className="mb-4">
              Your account and activity are stored in our backend, which is hosted by Supabase, a
              third-party cloud platform that provides our database and authentication. Our Supabase
              infrastructure is located in the European Union (Ireland). Data is transmitted over
              encrypted (HTTPS/TLS) connections, and access to your records is restricted so that
              only your authenticated account can read or change them.
            </p>
            <p>
              While no method of electronic storage is completely secure, we take reasonable technical
              and organisational measures to protect your personal data against unauthorised access,
              loss, or misuse.
            </p>
          </Section>

          <Section title="7. Data retention">
            <p>
              We keep your personal data for as long as your account remains active. If you delete your
              account, we delete your identity and all associated saved lists and completions. We may
              retain limited records where required to comply with legal obligations, after which they
              are securely deleted.
            </p>
          </Section>

          <Section title="8. Third-party services">
            <p className="mb-3">Lifelist relies on the following third-party services:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-[#111111]">Google Sign-In</span> — used to
                authenticate you. Your use of Google Sign-In is also subject to Google&apos;s own
                privacy policy.
              </li>
              <li>
                <span className="font-medium text-[#111111]">Supabase</span> — hosts our database and
                authentication infrastructure.
              </li>
            </ul>
            <p className="mt-3">
              These providers process data on our behalf to deliver the App. We do not sell your
              personal data to them or anyone else.
            </p>
          </Section>

          <Section title="9. International data transfers">
            <p>
              Your personal data is hosted within the European Economic Area (in Ireland). For users
              in the United Kingdom, the EEA is covered by UK &quot;adequacy&quot; regulations, meaning
              it provides an equivalent level of data protection, so no additional transfer safeguards
              are required. Should we ever move data outside the United Kingdom or EEA, we would rely on
              appropriate safeguards — such as standard contractual clauses or an adequacy decision — to
              ensure your data continues to receive an equivalent level of protection.
            </p>
          </Section>

          <Section title="10. Your rights">
            <p className="mb-3">
              Depending on your location, you have rights over your personal data, including the right
              to:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>access the personal data we hold about you;</li>
              <li>correct inaccurate or incomplete data;</li>
              <li>delete your data (&quot;the right to erasure&quot;);</li>
              <li>restrict or object to how we process your data;</li>
              <li>request a copy of your data in a portable format.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us using the details below. UK and EEA users
              also have the right to lodge a complaint with a supervisory authority — in the UK, the
              Information Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#822B8C] underline underline-offset-2"
              >
                ico.org.uk
              </a>
              .
            </p>
          </Section>

          <Section title="11. Deleting your data">
            <p>
              You can delete your account and all associated data at any time directly in the App, from
              the Settings screen. Deleting your account immediately and permanently removes your
              identity and all of your saved lists and completions from our systems, and cannot be
              undone. If you would prefer, you can instead request deletion by emailing us at{" "}
              <a
                href="mailto:apps@201.studio"
                className="font-medium text-[#822B8C] underline underline-offset-2"
              >
                apps@201.studio
              </a>
              , and we will action your request within 30 days.
            </p>
          </Section>

          <Section title="12. Children's privacy">
            <p>
              Lifelist is not directed at children under the age of 13 (or the minimum age required in
              your country), and we do not knowingly collect personal data from children. If you
              believe a child has provided us with personal data, please contact us and we will delete
              it.
            </p>
          </Section>

          <Section title="13. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected by the
              &quot;Last updated&quot; date at the top of this page, and material changes may be
              communicated through the App. Your continued use of the App after changes take effect
              indicates your acceptance of the updated policy.
            </p>
          </Section>

          <Section title="14. Contact us" id="contact">
            <p className="mb-4">
              If you have any questions about this Privacy Policy or how we handle your data, please
              contact us:
            </p>
            <div className="rounded-lg bg-black/5 p-5 text-sm text-[#555555]">
              <p className="font-medium text-[#111111]">201 Studio Ltd</p>
              <p>368 Forest Road</p>
              <p>London E17 5JF</p>
              <p>United Kingdom</p>
              <p className="pt-2">
                Email:{" "}
                <a
                  href="mailto:apps@201.studio"
                  className="font-medium text-[#822B8C] underline underline-offset-2"
                >
                  apps@201.studio
                </a>
              </p>
            </div>
          </Section>
        </article>

        {/* Footer navigation */}
        <footer className="mt-14 border-t border-black/10 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link href="/lifelist" className="text-sm text-[#555555] hover:text-[#111111]">
              ← Back to Lifelist
            </Link>
            <span className="hidden text-[#822B8C] sm:inline">•</span>
            <Link href="/support" className="text-sm text-[#555555] hover:text-[#111111]">
              Contact Support
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-6">
      <h2 className="mb-4 text-xl font-semibold text-[#111111]">{title}</h2>
      <div className="leading-relaxed text-[#555555]">{children}</div>
    </section>
  );
}
