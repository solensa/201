import Image from "next/image";
import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-8 sm:px-8 sm:py-12">
        {/* Logo */}
        <div className="mb-1 flex justify-center">
          <Link href="/">
            <Image src="/201LogoWhite.svg" alt="201 Studio" width={154} height={43} className="opacity-90" />
          </Link>
        </div>

        {/* Main Content */}
        <div className="mt-8 space-y-8">
          <h1 className="m-0 text-center text-5xl font-bold text-white sm:text-6xl">Support</h1>

          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Need help with one of our apps? We&apos;re here to assist you. Whether you have questions,
              feedback, or need technical support, feel free to reach out.
            </p>

            <div className="my-12 space-y-4 rounded-2xl bg-white/5 p-8 backdrop-blur">
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Email</span>
                    <br />
                    <a href="mailto:hello@201.studio" className="text-white/80 hover:text-white">
                      hello&#64;201&#46;studio
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Address</span>
                    <br />
                    201 Studio Ltd, 368 Forest Road,
                    <br />
                    London E17 5JF, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12 space-y-4 rounded-2xl bg-white/5 p-8 backdrop-blur">
              <h2 className="text-2xl font-bold text-white">What We Can Help With</h2>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <p className="text-white/80">
                    • Technical issues or bugs
                    <br />
                    • Account or app-related questions
                    <br />
                    • General feedback
                  </p>
                </div>
                <div>
                  <p className="text-white/80">
                    • Feature requests and suggestions
                    <br />
                    • Privacy and data inquiries
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12 space-y-4 rounded-2xl bg-white/5 p-8 backdrop-blur">
              <h2 className="text-2xl font-bold text-white">Response Time</h2>
              <p className="text-white/80">
                We typically respond to support requests within 10-15 business days. For urgent issues, please
                include &quot;URGENT&quot; in your subject line.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <Link href="/" className="text-white/60 hover:text-white">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
