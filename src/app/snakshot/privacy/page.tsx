import Image from "next/image";
import Link from "next/link";

export default function SnakShotPrivacyPolicy() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#101e22", color: "#f7fafa" }}>
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Link href="/snakshot">
            <Image src="/201-logo.svg" alt="201 Studio" width={200} height={55} className="opacity-90" />
          </Link>
        </div>

        {/* Main Content */}
        <article className="prose prose-invert prose-lg mx-auto max-w-none">
          <h1 className="mb-4 text-center text-5xl font-bold">Privacy Policy for SnakShot</h1>
          <p className="mb-12 text-center text-white/60">Last Updated: January 12, 2026</p>

          {/* Privacy Notice for Young Users */}
          <section className="mb-12 rounded-2xl bg-green-500/10 p-8 ring-1 ring-green-500/20">
            <h2 className="mt-0 text-3xl font-bold text-green-400">Privacy Notice for Young Users</h2>
            <p className="text-lg">
              Hello! We want you to understand how SnakShot works and why it&apos;s safe for you to use.
            </p>

            <h3 className="text-2xl font-bold text-green-300">What does SnakShot do?</h3>
            <p>
              SnakShot lets you take photos and work with pictures on your phone or tablet. All your photos stay
              on your device - they never leave it.
            </p>

            <h3 className="text-2xl font-bold text-green-300">What information do we collect about you?</h3>
            <p>
              We don&apos;t collect any information about you. We can&apos;t see your photos, we don&apos;t know
              your name, and we don&apos;t know where you are. Everything you do in SnakShot stays private on
              your device.
            </p>

            <h3 className="text-2xl font-bold text-green-300">Is my information safe?</h3>
            <p>
              Yes! Because we never collect or send your information anywhere, nobody else can see it. Your
              photos and everything you do in the app stay on your phone or tablet.
            </p>

            <h3 className="text-2xl font-bold text-green-300">Can I ask questions?</h3>
            <p>
              If you have questions about SnakShot, you can ask a parent, teacher, or trusted adult to contact
              us at{" "}
              <a href="mailto:apps@201.studio" className="text-green-400 hover:text-green-300">
                apps@201.studio
              </a>
            </p>

            <p className="mb-0 text-white/60">
              The rest of this document explains our privacy practices in more detail for parents and adults.
            </p>
          </section>

          {/* Introduction */}
          <section className="mb-12">
            <h2>Introduction</h2>
            <p>
              201 Studio Ltd (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the SnakShot mobile
              application (the &quot;App&quot;). This Privacy Policy explains our practices regarding data
              collection, use, and protection when you use our App.
            </p>
            <p>
              SnakShot is designed with privacy in mind. We do not collect, transmit, or store any personal data
              on external servers. All data remains on your device.
            </p>
          </section>

          {/* Developer Information */}
          <section className="mb-12">
            <h2>1. Developer Information</h2>
            <div className="rounded-lg bg-white/5 p-6">
              <p className="mb-2">
                <strong>201 Studio Ltd</strong>
              </p>
              <p className="mb-2">368 Forest Road</p>
              <p className="mb-2">London E17 5JF</p>
              <p className="mb-2">United Kingdom</p>
              <p className="mb-0">
                Email:{" "}
                <a href="mailto:apps@201.studio" className="text-green-400 hover:text-green-300">
                  apps@201.studio
                </a>
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2>2. Information We Collect</h2>
            <p>
              SnakShot accesses the following data solely for the purpose of providing app functionality:
            </p>
            <ul>
              <li>
                <strong>Photos:</strong> The App accesses your device&apos;s camera and photo library/gallery to
                allow you to take photos and select existing photos.
              </li>
            </ul>
            <p>
              <strong>We do not:</strong>
            </p>
            <ul>
              <li>Collect any personal information (such as name, email, phone number, or location)</li>
              <li>Collect analytics data or usage statistics</li>
              <li>Use tracking technologies, cookies, or similar technologies</li>
              <li>Transmit any data from your device to our servers or any third parties</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2>3. How We Use Your Information</h2>
            <p>
              All photos accessed through SnakShot remain exclusively on your device. The App processes photos
              locally to provide its functionality. We do not upload, transmit, or share your photos with anyone.
            </p>
            <p>Your photos are never sent to external servers, cloud services, or third parties.</p>
          </section>

          {/* Data Storage and Security */}
          <section className="mb-12">
            <h2>4. Data Storage and Security</h2>
            <p>
              All data created or modified by SnakShot is stored locally on your device. We do not maintain any
              servers or databases that store user data.
            </p>
            <p>
              Since all data remains on your device, you maintain complete control over your information. You
              can:
            </p>
            <ul>
              <li>Delete the App at any time to remove all associated data</li>
              <li>Manage your photos through your device&apos;s standard photo management tools</li>
              <li>Control app permissions through your device settings</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2>5. Third-Party Services</h2>
            <p>
              SnakShot does not integrate with any third-party services, analytics platforms, advertising
              networks, or external APIs. The App functions entirely offline and does not communicate with
              external servers.
            </p>
          </section>

          {/* Data Sharing and Disclosure */}
          <section className="mb-12">
            <h2>6. Data Sharing and Disclosure</h2>
            <p>
              We do not share, sell, rent, or disclose any user data to third parties because we do not collect
              or have access to any user data.
            </p>
            <p>
              Since all data remains on your device, we have no data to share even if legally compelled to do so.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2>7. Children&apos;s Privacy</h2>
            <p>
              SnakShot does not knowingly collect any personal information from children. The App is designed to
              be used by users of all ages, including children, and operates with the same privacy-by-design
              principles for all users.
            </p>
            <p>
              Since we do not collect, transmit, or store any personal data, there is no risk of children&apos;s
              information being collected or shared.
            </p>
            <p>
              Parents and guardians can review their children&apos;s use of the App through their device&apos;s
              standard parental controls and photo library permissions.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className="mb-12">
            <h2>8. Your Rights and Choices</h2>
            <p>Because all data remains on your device, you have complete control over your information:</p>
            <ul>
              <li>
                <strong>Access and Control:</strong> You can access, modify, or delete photos at any time through
                your device&apos;s photo library.
              </li>
              <li>
                <strong>Permission Management:</strong> You can revoke camera and photo library permissions
                through your device settings at any time.
              </li>
              <li>
                <strong>Data Deletion:</strong> Uninstalling the App will remove all App-specific data from your
                device.
              </li>
            </ul>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2>9. International Data Transfers</h2>
            <p>
              Since SnakShot does not transmit any data from your device, there are no international data
              transfers. All data processing occurs locally on your device, regardless of your location.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-12">
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected in the
              &quot;Last Updated&quot; date at the top of this policy. We will notify users of material changes
              through the App or app store update notes.
            </p>
            <p>
              Your continued use of the App after any changes indicates your acceptance of the updated Privacy
              Policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or SnakShot&apos;s privacy practices, please
              contact us at:
            </p>
            <div className="rounded-lg bg-white/5 p-6">
              <p className="mb-2">
                <strong>201 Studio Ltd</strong>
              </p>
              <p className="mb-2">368 Forest Road</p>
              <p className="mb-2">London E17 5JF</p>
              <p className="mb-2">United Kingdom</p>
              <p className="mb-0">
                Email:{" "}
                <a href="mailto:apps@201.studio" className="text-green-400 hover:text-green-300">
                  apps@201.studio
                </a>
              </p>
            </div>
          </section>

          {/* Legal Basis for Processing (GDPR) */}
          <section className="mb-12">
            <h2>12. Legal Basis for Processing (GDPR)</h2>
            <p>
              For users in the European Economic Area (EEA) and United Kingdom, we process data locally on your
              device based on your consent when you grant camera and photo library permissions.
            </p>
            <p>
              Since we do not collect or process personal data on our servers, most GDPR obligations related to
              data controllers do not apply. You retain full control over your data through your device settings.
            </p>
          </section>

          {/* California Privacy Rights (CCPA) */}
          <section className="mb-12">
            <h2>13. California Privacy Rights (CCPA)</h2>
            <p>For California residents, we want to clarify that:</p>
            <ul>
              <li>We do not sell personal information</li>
              <li>We do not collect personal information for commercial purposes</li>
              <li>All data remains on your device under your control</li>
              <li>You can delete all app data by uninstalling the application</li>
            </ul>
          </section>

          {/* Compliance with ICO Children's Code */}
          <section className="mb-12">
            <h2>14. Compliance with ICO Children&apos;s Code</h2>
            <p>
              SnakShot is designed in accordance with the UK Information Commissioner&apos;s Office (ICO) Age
              Appropriate Design Code (Children&apos;s Code). Our approach includes:
            </p>
            <ul>
              <li>
                <strong>Best Interests of the Child:</strong> Privacy and safety are built into the app&apos;s
                core design.
              </li>
              <li>
                <strong>Data Minimization:</strong> We collect zero personal data from users of any age.
              </li>
              <li>
                <strong>Privacy by Default:</strong> All processing happens locally on the device with maximum
                privacy.
              </li>
              <li>
                <strong>Transparency:</strong> We provide clear, age-appropriate privacy information.
              </li>
              <li>
                <strong>Detrimental Use of Data:</strong> We do not use data in ways that could be harmful to
                children&apos;s wellbeing.
              </li>
            </ul>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <h2>15. Summary</h2>
            <p>To summarize, SnakShot is a privacy-focused application that:</p>
            <ul>
              <li>Processes all data locally on your device</li>
              <li>Does not collect, transmit, or store any personal information</li>
              <li>Does not use analytics, tracking, or third-party services</li>
              <li>Gives you complete control over your data</li>
              <li>Operates entirely offline with no server communication</li>
              <li>Is safe for users of all ages, including children</li>
            </ul>
          </section>
        </article>

        {/* Footer Navigation */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/snakshot" className="text-white/60 hover:text-white">
              ← Back to SnakShot
            </Link>
            <span className="hidden sm:inline text-white/40">•</span>
            <Link href="/support" className="text-white/60 hover:text-white">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
