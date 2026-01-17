import Image from "next/image";
import Link from "next/link";

export default function SnakShotPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#101e22] text-[#f7fafa]">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
        {/* Logo */}
        <div className="mb-2 sm:mb-4 flex justify-center">
          <Link href="/snakshot">
            <Image src="/201-logo.svg" alt="201 Studio" width={160} height={44} className="opacity-80 hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* Main Content */}
        <article>
          <header className="mb-10 sm:mb-14">
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Privacy Policy for SnakShot</h1>
            <p className="text-white/50 text-sm sm:text-base text-center">Last Updated: January 12, 2026</p>
          </header>

          {/* Privacy Notice for Young Users */}
          <section className="mb-10 sm:mb-14 rounded-xl sm:rounded-2xl bg-green-500/10 p-5 sm:p-8 ring-1 ring-green-500/20">
            <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-3 text-left md:text-center">Privacy Notice for Young Users</h2>
            <p className="text-white/80 mb-5 leading-relaxed text-center text-balance">
              Hello! We want you to understand how SnakShot works and why it&apos;s safe for you to use.
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-green-300 mb-2 border-t border-white/10 pt-4">What does SnakShot do?</h3>
            <p className="text-white/70 mb-5 leading-relaxed">
              SnakShot lets you take photos and work with pictures on your phone or tablet. All your photos stay
              on your device - they never leave it.
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-green-300 mb-2">What information do we collect about you?</h3>
            <p className="text-white/70 mb-5 leading-relaxed">
              We don&apos;t collect any information about you. We can&apos;t see your photos, we don&apos;t know
              your name, and we don&apos;t know where you are. Everything you do in SnakShot stays private on
              your device.
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-green-300 mb-2">Is my information safe?</h3>
            <p className="text-white/70 mb-5 leading-relaxed">
              Yes! Because we never collect or send your information anywhere, nobody else can see it. Your
              photos and everything you do in the app stay on your phone or tablet.
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-green-300 mb-2">Can I ask questions?</h3>
            <p className="text-white/70 mb-5 leading-relaxed">
              If you have questions about SnakShot, you can ask a parent, teacher, or trusted adult to contact
              us at{" "}
              <a href="mailto:apps@201.studio" className="text-green-400 hover:text-green-300 underline underline-offset-2">
                apps@201.studio
              </a>
            </p>

            <p className="text-sm text-white/50 border-t border-white/10 pt-4 mt-5">
              The rest of this document explains our privacy practices in more detail for parents and adults.
            </p>
          </section>

          {/* Introduction */}
          <section className="mb-10 sm:mb-12">
            <p className="text-white/70 leading-relaxed mb-4">
              201 Studio Ltd (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the SnakShot mobile
              application (the &quot;App&quot;). This Privacy Policy explains our practices regarding data
              collection, use, and protection when you use our App.
            </p>
            <p className="text-white/70 leading-relaxed">
              SnakShot is designed with privacy in mind. We do not collect, transmit, or store any personal data
              on external servers. All data remains on your device.
            </p>
          </section>

          {/* Developer Information */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">1. Developer Information</h2>
            <div className="rounded-lg bg-white/5 p-4 sm:p-5 text-sm sm:text-base text-white/70 space-y-1">
              <p className="font-medium text-white/90">201 Studio Ltd</p>
              <p>368 Forest Road</p>
              <p>London E17 5JF</p>
              <p>United Kingdom</p>
              <p className="pt-2">
                Email:{" "}
                <a href="mailto:apps@201.studio" className="text-green-400 hover:text-green-300 underline underline-offset-2">
                  apps@201.studio
                </a>
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              SnakShot accesses the following data solely for the purpose of providing app functionality:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70 mb-4">
              <li>
                <span className="font-medium text-white/90">Photos:</span> The App accesses your device&apos;s camera and photo library/gallery to
                allow you to take photos and select existing photos.
              </li>
            </ul>
            <p className="font-medium text-white/90 mb-3">We do not:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Collect any personal information (such as name, email, phone number, or location)</li>
              <li>Collect analytics data or usage statistics</li>
              <li>Use tracking technologies, cookies, or similar technologies</li>
              <li>Transmit any data from your device to our servers or any third parties</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              All photos accessed through SnakShot remain exclusively on your device. The App processes photos
              locally to provide its functionality. We do not upload, transmit, or share your photos with anyone.
            </p>
            <p className="text-white/70 leading-relaxed">Your photos are never sent to external servers, cloud services, or third parties.</p>
          </section>

          {/* Data Storage and Security */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">4. Data Storage and Security</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              All data created or modified by SnakShot is stored locally on your device. We do not maintain any
              servers or databases that store user data.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Since all data remains on your device, you maintain complete control over your information. You can:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Delete the App at any time to remove all associated data</li>
              <li>Manage your photos through your device&apos;s standard photo management tools</li>
              <li>Control app permissions through your device settings</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">5. Third-Party Services</h2>
            <p className="text-white/70 leading-relaxed">
              SnakShot does not integrate with any third-party services, analytics platforms, advertising
              networks, or external APIs. The App functions entirely offline and does not communicate with
              external servers.
            </p>
          </section>

          {/* Data Sharing and Disclosure */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">6. Data Sharing and Disclosure</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We do not share, sell, rent, or disclose any user data to third parties because we do not collect
              or have access to any user data.
            </p>
            <p className="text-white/70 leading-relaxed">
              Since all data remains on your device, we have no data to share even if legally compelled to do so.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              SnakShot does not knowingly collect any personal information from children. The App is designed to
              be used by users of all ages, including children, and operates with the same privacy-by-design
              principles for all users.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Since we do not collect, transmit, or store any personal data, there is no risk of children&apos;s
              information being collected or shared.
            </p>
            <p className="text-white/70 leading-relaxed">
              Parents and guardians can review their children&apos;s use of the App through their device&apos;s
              standard parental controls and photo library permissions.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">8. Your Rights and Choices</h2>
            <p className="text-white/70 leading-relaxed mb-4">Because all data remains on your device, you have complete control over your information:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>
                <span className="font-medium text-white/90">Access and Control:</span> You can access, modify, or delete photos at any time through
                your device&apos;s photo library.
              </li>
              <li>
                <span className="font-medium text-white/90">Permission Management:</span> You can revoke camera and photo library permissions
                through your device settings at any time.
              </li>
              <li>
                <span className="font-medium text-white/90">Data Deletion:</span> Uninstalling the App will remove all App-specific data from your
                device.
              </li>
            </ul>
          </section>

          {/* International Data Transfers */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-white/70 leading-relaxed">
              Since SnakShot does not transmit any data from your device, there are no international data
              transfers. All data processing occurs locally on your device, regardless of your location.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be reflected in the
              &quot;Last Updated&quot; date at the top of this policy. We will notify users of material changes
              through the App or app store update notes.
            </p>
            <p className="text-white/70 leading-relaxed">
              Your continued use of the App after any changes indicates your acceptance of the updated Privacy
              Policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or SnakShot&apos;s privacy practices, please
              contact us at:
            </p>
            <div className="rounded-lg bg-white/5 p-4 sm:p-5 text-sm sm:text-base text-white/70 space-y-1">
              <p className="font-medium text-white/90">201 Studio Ltd</p>
              <p>368 Forest Road</p>
              <p>London E17 5JF</p>
              <p>United Kingdom</p>
              <p className="pt-2">
                Email:{" "}
                <a href="mailto:apps@201.studio" className="text-green-400 hover:text-green-300 underline underline-offset-2">
                  apps@201.studio
                </a>
              </p>
            </div>
          </section>

          {/* Legal Basis for Processing (GDPR) */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">12. Legal Basis for Processing (GDPR)</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              For users in the European Economic Area (EEA) and United Kingdom, we process data locally on your
              device based on your consent when you grant camera and photo library permissions.
            </p>
            <p className="text-white/70 leading-relaxed">
              Since we do not collect or process personal data on our servers, most GDPR obligations related to
              data controllers do not apply. You retain full control over your data through your device settings.
            </p>
          </section>

          {/* California Privacy Rights (CCPA) */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">13. California Privacy Rights (CCPA)</h2>
            <p className="text-white/70 leading-relaxed mb-4">For California residents, we want to clarify that:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>We do not sell personal information</li>
              <li>We do not collect personal information for commercial purposes</li>
              <li>All data remains on your device under your control</li>
              <li>You can delete all app data by uninstalling the application</li>
            </ul>
          </section>

          {/* Compliance with ICO Children's Code */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">14. Compliance with ICO Children&apos;s Code</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              SnakShot is designed in accordance with the UK Information Commissioner&apos;s Office (ICO) Age
              Appropriate Design Code (Children&apos;s Code). Our approach includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>
                <span className="font-medium text-white/90">Best Interests of the Child:</span> Privacy and safety are built into the app&apos;s
                core design.
              </li>
              <li>
                <span className="font-medium text-white/90">Data Minimization:</span> We collect zero personal data from users of any age.
              </li>
              <li>
                <span className="font-medium text-white/90">Privacy by Default:</span> All processing happens locally on the device with maximum
                privacy.
              </li>
              <li>
                <span className="font-medium text-white/90">Transparency:</span> We provide clear, age-appropriate privacy information.
              </li>
              <li>
                <span className="font-medium text-white/90">Detrimental Use of Data:</span> We do not use data in ways that could be harmful to
                children&apos;s wellbeing.
              </li>
            </ul>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">15. Summary</h2>
            <p className="text-white/70 leading-relaxed mb-4">To summarize, SnakShot is a privacy-focused application that:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
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
        <footer className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 justify-center">
            <Link href="/snakshot" className="text-sm text-white/50 hover:text-white transition-colors">
              ← Back to SnakShot
            </Link>
            <span className="hidden sm:inline text-white/40">•</span>
            <Link href="/support" className="text-sm text-white/50 hover:text-white transition-colors">
              Contact Support
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
