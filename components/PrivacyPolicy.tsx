import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#070707] min-h-screen text-white font-['Montserrat'] selection:bg-[#d9a74a] selection:text-black">
      <style>{`
        .privacy-policy * { box-sizing: border-box; }
        
        .privacy-policy {
          --accent: #d9a74a;
          --line: #222222;
          --muted: #888888;
        }

        .privacy-policy header {
          position: relative;
          background-color: #070707;
          border-bottom: 1px solid var(--line);
          padding: 120px 60px 64px;
          overflow: hidden;
        }

        .privacy-policy header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 60%, rgba(217,167,74,0.10) 0%, transparent 65%);
          pointer-events: none;
        }

        .privacy-policy .header-eyebrow {
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 28px;
        }

        .privacy-policy .header-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 4rem;
          line-height: 1.05;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .privacy-policy .header-title em {
          font-style: italic;
          color: var(--accent);
        }

        .privacy-policy .header-subtitle {
          font-size: 12px;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.35);
          max-width: 520px;
        }

        .privacy-policy .header-ornament {
          position: absolute;
          bottom: 0; right: 60px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 220px;
          line-height: 0.75;
          color: rgba(217,167,74,0.06);
          font-style: italic;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
        }

        .privacy-policy nav {
          background-color: #070707;
          border-bottom: 1px solid var(--line);
          padding: 0 60px;
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
        }
        
        .privacy-policy nav::-webkit-scrollbar {
          display: none;
        }

        .privacy-policy nav a {
          display: block;
          padding: 18px 0;
          margin-right: 40px;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .privacy-policy nav a:hover {
          color: #ffffff;
          border-bottom-color: var(--accent);
        }

        .privacy-policy .page-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .privacy-policy .intro-strip {
          padding: 60px 0 0;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }

        .privacy-policy .intro-date {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          padding-top: 6px;
        }

        .privacy-policy .intro-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          line-height: 1.6;
          font-weight: 400;
          color: #ffffff;
          border-left: 1px solid var(--accent);
          padding-left: 32px;
        }

        .privacy-policy .divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 56px 0 0;
        }

        .privacy-policy .divider::before, .privacy-policy .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--line);
        }

        .privacy-policy .divider-ornament {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 18px;
          color: var(--accent);
          opacity: 0.7;
        }

        .privacy-policy .policy-body {
          padding: 64px 0 100px;
          display: flex;
          gap: 80px;
        }

        .privacy-policy .toc {
          flex: 0 0 200px;
          position: sticky;
          top: 100px;
          align-self: flex-start;
        }

        .privacy-policy .toc-label {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .privacy-policy .toc ul { list-style: none; }
        .privacy-policy .toc li { margin-bottom: 12px; }

        .privacy-policy .toc a {
          font-size: 11px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .privacy-policy .toc a::before {
          content: '';
          display: block;
          width: 12px;
          height: 1px;
          background: currentColor;
          flex-shrink: 0;
          opacity: 0.4;
          transition: all 0.3s ease;
        }

        .privacy-policy .toc a:hover {
          color: var(--accent);
        }

        .privacy-policy .toc a:hover::before {
          width: 20px;
          opacity: 1;
        }

        .privacy-policy .policy-content {
          flex: 1;
          min-width: 0;
        }

        .privacy-policy .policy-section {
          margin-bottom: 80px;
          scroll-margin-top: 100px;
        }

        .privacy-policy .section-number {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .privacy-policy .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .privacy-policy .section-heading em {
          font-style: italic;
        }

        .privacy-policy .policy-section p {
          color: rgba(255,255,255,0.7);
          margin-bottom: 20px;
          font-size: 15px;
        }

        .privacy-policy .policy-section ul {
          list-style: none;
          margin: 20px 0 24px;
        }

        .privacy-policy .policy-section ul li {
          padding: 12px 0 12px 28px;
          position: relative;
          color: rgba(255,255,255,0.7);
          border-bottom: 1px solid var(--line);
          font-size: 14px;
        }

        .privacy-policy .policy-section ul li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .privacy-policy .callout {
          background: #111111;
          border-left: 2px solid var(--accent);
          padding: 32px;
          margin: 40px 0;
        }

        .privacy-policy .callout p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          line-height: 1.6;
          color: rgba(255,255,255,0.9) !important;
          font-style: italic;
          margin: 0 !important;
        }

        .privacy-policy .contact-card {
          background: #111111;
          border: 1px solid var(--line);
          padding: 48px;
          margin-top: 40px;
        }

        .privacy-policy .contact-card-label {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
        }

        .privacy-policy .contact-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          font-style: italic;
          margin-bottom: 24px;
          color: #ffffff;
        }

        .privacy-policy .contact-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.5) !important;
          margin-bottom: 8px;
        }

        .privacy-policy .contact-card a {
          color: var(--accent);
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .privacy-policy header, .privacy-policy nav { padding-left: 32px; padding-right: 32px; }
          .privacy-policy .page-wrapper { padding: 0 32px; }
          .privacy-policy .intro-strip { grid-template-columns: 1fr; gap: 32px; }
          .privacy-policy .policy-body { flex-direction: column; gap: 60px; }
          .privacy-policy .toc { position: static; }
          .privacy-policy .header-arnament { display: none; }
          .privacy-policy .header-title { font-size: 3rem; }
        }
      `}</style>

      <div className="privacy-policy animate-in fade-in duration-1000">
        <header>
          <div className="header-eyebrow">Sofia Marbella · Legal</div>
          <h1 className="header-title">Privacy <em>Policy</em></h1>
          <p className="header-subtitle">How we honour your trust, protect your information, and uphold the discretion this world demands.</p>
          <div className="header-ornament text-[160px] md:text-[220px]">SM</div>
        </header>

        <nav>
          <a href="#what-we-collect">What We Collect</a>
          <a href="#how-we-use">How We Use It</a>
          <a href="#sharing">Sharing</a>
          <a href="#cookies">Cookies</a>
          <a href="#your-rights">Your Rights</a>
          <a href="#retention">Retention</a>
          <a href="#security">Security</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="page-wrapper">
          <div className="intro-strip">
            <div className="intro-date">
              Effective Date<br />
              March 3, 2026
            </div>
            <p className="intro-text">
              At <strong>Sofia Marbella</strong>, privacy is not a formality — it is part of the unspoken contract between us. This Policy explains, plainly and completely, what information we gather when you visit our world, and how we treat it with the same discretion we extend to every guest.
            </p>
          </div>

          <div className="divider"><span className="divider-ornament">✦</span></div>

          <div className="policy-body">
            <aside className="toc" aria-label="Table of contents">
              <div className="toc-label">Contents</div>
              <ul>
                <li><a href="#what-we-collect">Information We Collect</a></li>
                <li><a href="#how-we-use">How We Use It</a></li>
                <li><a href="#sharing">Sharing & Disclosure</a></li>
                <li><a href="#cookies">Cookies</a></li>
                <li><a href="#your-rights">Your Rights</a></li>
                <li><a href="#retention">Retention</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </aside>

            <main className="policy-content">
              <section className="policy-section" id="what-we-collect">
                <div className="section-number">01</div>
                <h2 className="section-heading">Information <em>We Collect</em></h2>
                <p>We collect only what is necessary to offer you an exceptional experience. This falls into two categories: what you give us directly, and what is gathered automatically as you explore the site.</p>
                <p><strong>Information you provide:</strong></p>
                <ul>
                  <li>Your name and email address when you subscribe to our editorial or submit an enquiry</li>
                  <li>Preferences, responses, or messages you send through any contact form</li>
                  <li>Any other details you choose to share with us voluntarily</li>
                </ul>
                <p><strong>Information collected automatically:</strong></p>
                <ul>
                  <li>Your IP address, browser type, and device information</li>
                  <li>Pages visited, time spent, and navigation paths on our website</li>
                  <li>Referring URLs and general geographic location (city-level only)</li>
                </ul>
                <div className="callout">
                  <p>"We do not purchase data, scrape social networks, or acquire personal information from third-party brokers. What we know about you is only what you have shared with us."</p>
                </div>
              </section>

              <section className="policy-section" id="how-we-use">
                <div className="section-number">02</div>
                <h2 className="section-heading">How We <em>Use It</em></h2>
                <p>The information we hold is used solely to serve you — never to surveil or exploit. Specifically, we use it to:</p>
                <ul>
                  <li>Deliver the editorial content, updates, and communications you requested</li>
                  <li>Respond to your enquiries and provide personalised assistance</li>
                  <li>Understand how our audience engages with our content so we can improve it</li>
                  <li>Comply with applicable legal obligations</li>
                  <li>Protect the integrity and security of this website</li>
                </ul>
                <p>We will never use your information for automated profiling, invasive advertising, or any purpose that you would find surprising or unwelcome.</p>
              </section>

              <section className="policy-section" id="sharing">
                <div className="section-number">03</div>
                <h2 className="section-heading">Sharing <em>& Disclosure</em></h2>
                <p>Sofia Marbella does not sell, rent, or trade your personal information. Full stop.</p>
                <p>We may share limited data with trusted service providers who assist us in operating the website — such as hosting infrastructure or email delivery platforms. These partners are contractually bound to handle your data with the same care we do, and are permitted to use it only on our behalf.</p>
                <p>We may also disclose information when required by law, court order, or to protect the rights and safety of our users or the public.</p>
                <div className="callout">
                  <p>"Discretion is one of the unspoken rules we live by. Your information stays within our circle."</p>
                </div>
              </section>

              <section className="policy-section" id="cookies">
                <div className="section-number">04</div>
                <h2 className="section-heading"><em>Cookies</em> & Tracking</h2>
                <p>We use a small number of cookies — small text files stored on your device — to make our website function properly and to understand how it is used. We categorise these as:</p>
                <ul>
                  <li><strong>Essential cookies</strong> — required for the site to load and operate correctly; these cannot be disabled</li>
                  <li><strong>Analytics cookies</strong> — help us understand visitor behaviour in aggregate and anonymous form</li>
                  <li><strong>Preference cookies</strong> — remember your settings between visits</li>
                </ul>
                <p>We do not use advertising or cross-site tracking cookies. You may adjust cookie preferences through your browser settings at any time, though some site features may be affected.</p>
              </section>

              <section className="policy-section" id="your-rights">
                <div className="section-number">05</div>
                <h2 className="section-heading">Your <em>Rights</em></h2>
                <p>Depending on your place of residence, you may hold various rights over your personal data. Regardless of jurisdiction, we honour all of the following:</p>
                <ul>
                  <li><strong>Access</strong> — request a copy of the personal information we hold about you</li>
                  <li><strong>Rectification</strong> — ask us to correct any inaccurate information</li>
                  <li><strong>Erasure</strong> — request deletion of your data, subject to legal obligations</li>
                  <li><strong>Restriction</strong> — ask us to limit how we process your information</li>
                  <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
                  <li><strong>Objection</strong> — object to any processing based on legitimate interests</li>
                  <li><strong>Withdrawal</strong> — withdraw consent at any time, where processing is based on consent</li>
                </ul>
                <p>To exercise any of these rights, please reach out to us directly. We will respond within 30 days.</p>
              </section>

              <section className="policy-section" id="retention">
                <div className="section-number">06</div>
                <h2 className="section-heading">Data <em>Retention</em></h2>
                <p>We keep your information only as long as it is needed for the purpose it was collected, or as required by applicable law. In practice:</p>
                <ul>
                  <li>Subscriber data is retained for the duration of your subscription and up to 12 months after you unsubscribe</li>
                  <li>Enquiry records are retained for up to 24 months after your last communication</li>
                  <li>Analytics data is anonymised after 26 months</li>
                </ul>
                <p>When retention periods expire, data is securely deleted or irreversibly anonymised.</p>
              </section>

              <section className="policy-section" id="security">
                <div className="section-number">07</div>
                <h2 className="section-heading">Security <em>& Integrity</em></h2>
                <p>We take reasonable and appropriate technical and organisational measures to protect your information against unauthorised access, loss, or misuse. Our website is served over HTTPS; our platforms maintain access controls; and we review our security practices regularly.</p>
                <p>No method of transmission over the internet is entirely without risk. Should a breach occur that affects your data, we will notify you in accordance with applicable law — promptly, clearly, and honestly.</p>
                <p>This Policy may be updated from time to time. When we make material changes, the revised date at the top of this page will be updated, and where appropriate, we will notify you directly.</p>
              </section>

              <section className="policy-section" id="contact">
                <div className="section-number">08</div>
                <h2 className="section-heading">Contact <em>Us</em></h2>
                <p>Questions, requests, or concerns are always welcome. Privacy should never feel like bureaucracy — if something is unclear or you wish to exercise your rights, write to us and we will handle it personally.</p>

                <div className="contact-card">
                  <div className="contact-card-label">Get in Touch</div>
                  <h3>Sofia Marbella<br />Privacy & Data Enquiries</h3>
                  <p>Email: <a href="mailto:ceo@sofia.style" className="hover:text-white transition-colors">ceo@sofia.style</a></p>
                  <p>Website: <a href="https://sofia-marbella.vercel.app" target="_blank" className="hover:text-white transition-colors">sofia-marbella.vercel.app</a></p>
                  <p className="mt-4 text-gray-400">Marbella, Costa del Sol, Spain</p>
                  <p className="mt-3 text-xs opacity-25">We aim to respond to all privacy enquiries within 5 business days.</p>
                </div>
              </section>
            </main>
          </div>
        </div>

        <footer className="footer-privacy px-[60px] py-10 border-t border-[#222222] flex justify-center items-center bg-[#070707]">
          <div className="footer-note text-[11px] text-[#888888] tracking-widest uppercase text-center italic opacity-60">Wait for the silence to speak.</div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
