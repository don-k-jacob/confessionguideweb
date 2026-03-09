const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=tech.tatos.confessionguide&pcampaignid=web_share";
const APP_STORE =
  "https://apps.apple.com/in/app/confession-guide-catholic-aid/id6756385223";

const features = [
  {
    title: "Examination of Conscience",
    desc: "Tailored questions based on your state of life — single, married, religious, or children — so every reflection is personal.",
    icon: "examine",
  },
  {
    title: "Step-by-Step Rite Guide",
    desc: "Follow the confession rite in real time with prayers, responses, and the correct order, so you never feel lost.",
    icon: "guide",
  },
  {
    title: "Common Prayers",
    desc: "Access the Act of Contrition in traditional and modern forms, plus the Rosary and other essential prayers.",
    icon: "prayer",
  },
  {
    title: "Confession Reminders",
    desc: "Schedule gentle reminders — weekly, bi-weekly, or monthly — to build a consistent practice of reconciliation.",
    icon: "reminder",
  },
  {
    title: "On-Device Privacy",
    desc: "Your examination data stays on your device. Nothing is uploaded, shared, or stored on any server.",
    icon: "privacy",
  },
  {
    title: "Dark Mode & Multilingual",
    desc: "Designed for dimly lit confessionals with dark mode, and available in English, Malayalam, and Hindi.",
    icon: "dark",
  },
];

const steps = [
  {
    num: "01",
    title: "Examine",
    desc: "Work through conscience prompts organized by life area. Mark what you want to bring to confession.",
  },
  {
    num: "02",
    title: "Prepare",
    desc: "Walk through the confession rite step by step with prayers and responses ready at hand.",
  },
  {
    num: "03",
    title: "Complete",
    desc: "Finish with confidence. Your session data is cleared when confession is done — nothing lingers.",
  },
];

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    examine: (
      <svg viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    guide: (
      <svg viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    prayer: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    reminder: (
      <svg viewBox="0 0 24 24">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    privacy: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    dark: (
      <svg viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
  };
  return <>{icons[type]}</>;
}

export default function Home() {
  return (
    <>
      {/* Ambient background */}
      <div className="ambient" aria-hidden="true">
        <div className="ambient-orb ambient-orb--gold" />
        <div className="ambient-orb ambient-orb--warm" />
        <div className="ambient-orb ambient-orb--green" />
      </div>
      <div className="grain" aria-hidden="true" />

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav__inner">
          <a href="#" className="nav__brand">
            <div className="nav__icon">
              <img src="/app-icon.png" alt="Confession Guide icon" />
            </div>
            <span className="nav__title">Confession Guide</span>
          </a>
          <div className="nav__links">
            <a href="#features" className="nav__link">
              Features
            </a>
            <a href="#how-it-works" className="nav__link">
              How It Works
            </a>
            <a href="#privacy" className="nav__link">
              Privacy
            </a>
            <a href="#download" className="nav__cta">
              Download
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="fade-in">
              <span className="hero__badge">
                <span className="hero__badge-dot" />
                Available on iOS & Android
              </span>
            </div>

            <h1 className="hero__title fade-in fade-in-delay-1">
              Prepare for confession with <em>clarity & calm</em>
            </h1>

            <p className="hero__subtitle fade-in fade-in-delay-2">
              Your personal companion for the Sacrament of Reconciliation.
              Examine your conscience, follow the rite, and pray — all in one
              private, guided experience.
            </p>

            <div className="hero__actions fade-in fade-in-delay-3">
              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
              >
                <span className="store-btn__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </span>
                <span className="store-btn__text">
                  <span className="store-btn__label">Download on the</span>
                  <span className="store-btn__name">App Store</span>
                </span>
              </a>

              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
              >
                <span className="store-btn__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33a1 1 0 010 1.73l-2.302 1.33-2.535-2.535 2.535-2.535zM5.864 2.658L16.8 8.99l-2.302 2.303-8.635-8.635z" />
                  </svg>
                </span>
                <span className="store-btn__text">
                  <span className="store-btn__label">Get it on</span>
                  <span className="store-btn__name">Google Play</span>
                </span>
              </a>
            </div>

            {/* Phone Mockup */}
            <div className="hero__mockup fade-in fade-in-delay-4">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="phone-screen__icon">
                    <img src="/app-icon.png" alt="" />
                  </div>
                  <p className="phone-screen__title">Confession Guide</p>
                  <div className="phone-screen__items">
                    <div className="phone-item">
                      <span className="phone-item__dot phone-item__dot--gold" />
                      <span className="phone-item__text">
                        Examination of Conscience
                      </span>
                    </div>
                    <div className="phone-item">
                      <span className="phone-item__dot phone-item__dot--warm" />
                      <span className="phone-item__text">
                        Guided Confession Rite
                      </span>
                    </div>
                    <div className="phone-item">
                      <span className="phone-item__dot phone-item__dot--green" />
                      <span className="phone-item__text">
                        Prayers & Act of Contrition
                      </span>
                    </div>
                    <div className="phone-item">
                      <span className="phone-item__dot phone-item__dot--gold" />
                      <span className="phone-item__text">
                        Confession Reminders
                      </span>
                    </div>
                    <div className="phone-item">
                      <span className="phone-item__dot phone-item__dot--warm" />
                      <span className="phone-item__text">
                        Biometric Session Security
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="social-proof fade-in fade-in-delay-5">
              <div className="social-proof__item">
                <span className="social-proof__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </span>
                100% On-Device Privacy
              </div>
              <div className="social-proof__item">
                <span className="social-proof__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </span>
                3 Languages Supported
              </div>
              <div className="social-proof__item">
                <span className="social-proof__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </span>
                Free & No Ads
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Features */}
        <section id="features" className="section">
          <div className="container">
            <span className="section__label">Features</span>
            <h2 className="section__title">
              Everything you need for a thoughtful, prepared confession
            </h2>
            <p className="section__desc">
              Built around the actual experience of going to confession — from
              the first examination to the final prayer.
            </p>

            <div className="features-grid">
              {features.map((f, i) => (
                <div key={f.title} className="feature-card">
                  <p className="feature-card__num">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="feature-card__icon">
                    <FeatureIcon type={f.icon} />
                  </div>
                  <h3 className="feature-card__title">{f.title}</h3>
                  <p className="feature-card__desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* How It Works */}
        <section id="how-it-works" className="section">
          <div className="container">
            <span className="section__label">How It Works</span>
            <h2 className="section__title">
              Three steps from reflection to readiness
            </h2>
            <p className="section__desc">
              Simple enough to use minutes before confession. Thorough enough to
              help you prepare deeply.
            </p>

            <div className="steps">
              {steps.map((s) => (
                <div key={s.num} className="step-card">
                  <p className="step-card__number">{s.num}</p>
                  <h3 className="step-card__title">{s.title}</h3>
                  <p className="step-card__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Privacy */}
        <section id="privacy" className="section privacy">
          <div className="container privacy__inner">
            <div>
              <span className="section__label">Privacy First</span>
              <h2 className="section__title">
                Your conscience is between you and God
              </h2>
              <p className="section__desc">
                Confession Guide stores all examination data locally on your
                device. No accounts, no cloud sync, no data collection. Your
                spiritual preparation remains completely private.
              </p>
            </div>

            <div className="privacy__visual">
              <div className="privacy-row">
                <div className="privacy-row__icon privacy-row__icon--green">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="privacy-row__text">On-device only storage</p>
                  <p className="privacy-row__sub">
                    Data never leaves your phone
                  </p>
                </div>
              </div>
              <div className="privacy-row">
                <div className="privacy-row__icon privacy-row__icon--gold">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="privacy-row__text">
                    Biometric authentication
                  </p>
                  <p className="privacy-row__sub">
                    Protect saved sessions with Face ID or fingerprint
                  </p>
                </div>
              </div>
              <div className="privacy-row">
                <div className="privacy-row__icon privacy-row__icon--green">
                  <svg viewBox="0 0 24 24">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </div>
                <div>
                  <p className="privacy-row__text">Auto-clear after confession</p>
                  <p className="privacy-row__sub">
                    Session data is wiped when you&apos;re done
                  </p>
                </div>
              </div>
              <div className="privacy-row">
                <div className="privacy-row__icon privacy-row__icon--gold">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                </div>
                <div>
                  <p className="privacy-row__text">No accounts required</p>
                  <p className="privacy-row__sub">
                    No sign-up, no tracking, no analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* CTA */}
        <section id="download" className="cta-section">
          <div className="container container--narrow">
            <div className="cta-box">
              <h2 className="cta-box__title">
                Bring intention to your next confession
              </h2>
              <p className="cta-box__desc">
                Keep your preparation simple, private, and guided — from first
                reflection to final prayer.
              </p>
              <div className="cta-box__actions">
                <a
                  href={APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-btn"
                >
                  <span className="store-btn__icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </span>
                  <span className="store-btn__text">
                    <span className="store-btn__label">Download on the</span>
                    <span className="store-btn__name">App Store</span>
                  </span>
                </a>

                <a
                  href={PLAY_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-btn"
                >
                  <span className="store-btn__icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33a1 1 0 010 1.73l-2.302 1.33-2.535-2.535 2.535-2.535zM5.864 2.658L16.8 8.99l-2.302 2.303-8.635-8.635z" />
                    </svg>
                  </span>
                  <span className="store-btn__text">
                    <span className="store-btn__label">Get it on</span>
                    <span className="store-btn__name">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <div className="footer__icon">
              <img src="/app-icon.png" alt="" />
            </div>
            <span className="footer__name">Confession Guide</span>
          </div>
          <p className="footer__copy">
            Private by design. Built for focused spiritual preparation.
          </p>
          <div className="footer__links">
            <a href="#features" className="footer__link">
              Features
            </a>
            <a href="#how-it-works" className="footer__link">
              How It Works
            </a>
            <a href="#privacy" className="footer__link">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
