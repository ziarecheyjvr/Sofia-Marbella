import React, { useEffect } from 'react';

const TermsConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#070707] min-h-screen text-white font-['Montserrat'] selection:bg-[#d9a74a] selection:text-black">
      <style>{`
        .legal-page * { box-sizing: border-box; }
        
        .legal-page {
          --accent: #d9a74a;
          --line: #222222;
          --muted: #888888;
        }

        .legal-page header {
          position: relative;
          background-color: #070707;
          border-bottom: 1px solid var(--line);
          padding: 120px 60px 64px;
          overflow: hidden;
        }

        .legal-page header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 60%, rgba(217,167,74,0.10) 0%, transparent 65%);
          pointer-events: none;
        }

        .legal-page .header-eyebrow {
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 28px;
        }

        .legal-page .header-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 4rem;
          line-height: 1.05;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .legal-page .header-title em {
          font-style: italic;
          color: var(--accent);
        }

        .legal-page .header-subtitle {
          font-size: 12px;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.35);
          max-width: 520px;
        }

        .legal-page .header-ornament {
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

        .legal-page nav {
          background-color: #070707;
          border-bottom: 1px solid var(--line);
          padding: 0 60px;
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
        }
        
        .legal-page nav::-webkit-scrollbar {
          display: none;
        }

        .legal-page nav a {
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

        .legal-page nav a:hover {
          color: #ffffff;
          border-bottom-color: var(--accent);
        }

        .legal-page .page-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .legal-page .intro-strip {
          padding: 60px 0 0;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }

        .legal-page .intro-date {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          padding-top: 6px;
        }

        .legal-page .intro-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          line-height: 1.6;
          font-weight: 400;
          color: #ffffff;
          border-left: 1px solid var(--accent);
          padding-left: 32px;
        }

        .legal-page .divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 56px 0 0;
        }

        .legal-page .divider::before, .legal-page .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--line);
        }

        .legal-page .divider-ornament {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 18px;
          color: var(--accent);
          opacity: 0.7;
        }

        .legal-page .policy-body {
          padding: 64px 0 100px;
          display: flex;
          gap: 80px;
        }

        .legal-page .toc {
          flex: 0 0 200px;
          position: sticky;
          top: 100px;
          align-self: flex-start;
        }

        .legal-page .toc-label {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .legal-page .toc ul { list-style: none; }
        .legal-page .toc li { margin-bottom: 12px; }

        .legal-page .toc a {
          font-size: 11px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legal-page .toc a::before {
          content: '';
          display: block;
          width: 12px;
          height: 1px;
          background: currentColor;
          flex-shrink: 0;
          opacity: 0.4;
          transition: all 0.3s ease;
        }

        .legal-page .toc a:hover {
          color: var(--accent);
        }

        .legal-page .toc a:hover::before {
          width: 20px;
          opacity: 1;
        }

        .legal-page .policy-content {
          flex: 1;
          min-width: 0;
        }

        .legal-page .policy-section {
          margin-bottom: 80px;
          scroll-margin-top: 100px;
        }

        .legal-page .section-number {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .legal-page .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .legal-page .section-heading em {
          font-style: italic;
        }

        .legal-page .policy-section p {
          color: rgba(255,255,255,0.7);
          margin-bottom: 20px;
          font-size: 15px;
        }

        .legal-page .policy-section ul {
          list-style: none;
          margin: 20px 0 24px;
        }

        .legal-page .policy-section ul li {
          padding: 12px 0 12px 28px;
          position: relative;
          color: rgba(255,255,255,0.7);
          border-bottom: 1px solid var(--line);
          font-size: 14px;
        }

        .legal-page .policy-section ul li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .legal-page .callout {
          background: #111111;
          border-left: 2px solid var(--accent);
          padding: 32px;
          margin: 40px 0;
        }

        .legal-page .callout p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          line-height: 1.6;
          color: rgba(255,255,255,0.9) !important;
          font-style: italic;
          margin: 0 !important;
        }

        .legal-page .contact-card {
          background: #111111;
          border: 1px solid var(--line);
          padding: 48px;
          margin-top: 40px;
        }

        .legal-page .contact-card-label {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
        }

        .legal-page .contact-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          font-style: italic;
          margin-bottom: 24px;
          color: #ffffff;
        }

        .legal-page .contact-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.5) !important;
          margin-bottom: 8px;
        }

        .legal-page .contact-card a {
          color: var(--accent);
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .legal-page header, .legal-page nav { padding-left: 32px; padding-right: 32px; }
          .legal-page .page-wrapper { padding: 0 32px; }
          .legal-page .intro-strip { grid-template-columns: 1fr; gap: 32px; }
          .legal-page .policy-body { flex-direction: column; gap: 60px; }
          .legal-page .toc { position: static; }
          .legal-page .header-title { font-size: 3rem; }
        }
      `}</style>

      <div className="legal-page animate-in fade-in duration-1000">
        <header>
          <div className="header-eyebrow"><span className="whitespace-nowrap">Sofia.Marbella</span> · Legal</div>
          <h1 className="header-title">Terms & <em>Conditions</em></h1>
          <p className="header-subtitle">Guidelines for your journey through our world — ensuring clarity, respect, and shared standards.</p>
          <div className="header-ornament text-[160px] md:text-[220px]">SM</div>
        </header>

        <nav>
          <a href="#acceptance">Acceptance</a>
          <a href="#use">Use</a>
          <a href="#intellectual-property">Intellectual Property</a>
          <a href="#purchases">Purchases</a>
          <a href="#returns">Returns</a>
          <a href="#privacy">Privacy</a>
          <a href="#disclaimers">Disclaimers</a>
          <a href="#liability">Liability</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="page-wrapper">
          <div className="intro-strip">
            <div className="intro-date">
              Effective Date<br />
              March 3, 2026
            </div>
            <p className="intro-text">
              These <strong>Terms & Conditions</strong> govern your use of the <span className="whitespace-nowrap">Sofia.Marbella</span> website and any services, content, or products offered through it. By accessing our site, you agree to be bound by these terms — please read them carefully.
            </p>
          </div>

          <div className="divider"><span className="divider-ornament">✦</span></div>

          <div className="policy-body">
            <aside className="toc" aria-label="Table of contents">
              <div className="toc-label">Contents</div>
              <ul>
                <li><a href="#acceptance">Acceptance of Terms</a></li>
                <li><a href="#use">Use of the Website</a></li>
                <li><a href="#intellectual-property">Intellectual Property</a></li>
                <li><a href="#purchases">Purchases & Payments</a></li>
                <li><a href="#returns">Returns & Refunds</a></li>
                <li><a href="#privacy">Privacy & Data</a></li>
                <li><a href="#disclaimers">Disclaimers</a></li>
                <li><a href="#liability">Limitation of Liability</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </aside>

            <main className="policy-content">
              <section className="policy-section" id="acceptance">
                <div className="section-number">01</div>
                <h2 className="section-heading">Acceptance of <em>Terms</em></h2>
                <p>By visiting, browsing, or using the <span className="whitespace-nowrap">Sofia.Marbella</span> website (the "Site"), you confirm that you are at least 18 years of age and have the legal capacity to enter into a binding agreement. If you are accessing the Site on behalf of an organisation, you represent that you have the authority to bind that organisation to these terms.</p>
                <p>Your continued use of the Site constitutes your acceptance of these Terms & Conditions and any updates thereto. If you do not agree with any part of these terms, you must discontinue use of the Site immediately.</p>
              </section>

              <section className="policy-section" id="use">
                <div className="section-number">02</div>
                <h2 className="section-heading">Use of the <em>Website</em></h2>
                <p>You agree to use this Site solely for lawful purposes and in a manner that does not infringe the rights of others. Specifically, you agree not to:</p>
                <ul>
                  <li>Reproduce, duplicate, or copy any part of the Site without express written consent</li>
                  <li>Engage in any conduct that disrupts, damages, or impairs the normal functioning of the Site</li>
                  <li>Attempt to gain unauthorised access to any part of the Site or its underlying infrastructure</li>
                  <li>Use automated tools (bots, scrapers, crawlers) to extract content or data from the Site</li>
                  <li>Post or transmit any harmful, offensive, or unlawful content</li>
                  <li>Use the Site to send unsolicited commercial communications</li>
                  <li>Misrepresent your identity or impersonate any person or entity</li>
                </ul>
                <p><span className="whitespace-nowrap">Sofia.Marbella</span> reserves the right to suspend or terminate access to the Site for any user who violates these terms, at our sole discretion and without prior notice.</p>
              </section>

              <section className="policy-section" id="intellectual-property">
                <div className="section-number">03</div>
                <h2 className="section-heading">Intellectual <em>Property</em></h2>
                <p>All content on this Site — including but not limited to text, photography, editorial copy, graphics, logos, design elements, and the "The Unspoken Rules" concept — is the exclusive intellectual property of <span className="whitespace-nowrap">Sofia.Marbella</span> and is protected under applicable copyright, trademark, and design laws.</p>
                <div className="callout">
                  <p><strong>Important</strong> — Nothing on this Site grants you a licence to use, reproduce, or distribute our content without prior written authorisation. Unauthorised use of our intellectual property may result in legal action.</p>
                </div>
                <p>You may share links to our content for personal, non-commercial purposes, provided attribution is clearly given to <span className="whitespace-nowrap">Sofia.Marbella</span> and no modification is made to the original content.</p>
              </section>

              <section className="policy-section" id="purchases">
                <div className="section-number">04</div>
                <h2 className="section-heading">Purchases <em>& Payments</em></h2>
                <p>When you place an order through the Site, you agree to provide accurate, current, and complete information. All orders are subject to availability and acceptance. We reserve the right to refuse or cancel any order at our discretion, including where:</p>
                <ul>
                  <li>An error has been made in the product description or pricing</li>
                  <li>We are unable to verify your payment details</li>
                  <li>Fraud or misuse is suspected</li>
                </ul>
                <p>Prices are displayed in the applicable currency and are inclusive of any stated taxes. Shipping costs and applicable duties will be calculated and disclosed at checkout. Payment is required in full at the time of purchase.</p>
                <p><span className="whitespace-nowrap">Sofia.Marbella</span> uses industry-standard SSL encryption and third-party payment processors. We do not store your full payment card details on our servers.</p>
              </section>

              <section className="policy-section" id="returns">
                <div className="section-number">05</div>
                <h2 className="section-heading">Returns <em>& Refunds</em></h2>
                <p>We want you to be entirely satisfied with your purchase. If you are not, we offer returns subject to the following conditions:</p>
                <ul>
                  <li>Items must be returned within 14 days of delivery</li>
                  <li>Products must be unused, unworn, unwashed, and in their original packaging with all tags attached</li>
                  <li>Final sale, personalised, and intimate items are non-returnable</li>
                  <li>Return shipping costs are the responsibility of the customer unless the item is faulty or incorrectly sent</li>
                </ul>
                <div className="callout">
                  <p><strong>Refund Processing</strong> — Once your return is received and inspected, we will notify you of the outcome. Approved refunds are processed to your original payment method within 7–10 business days.</p>
                </div>
                <p>To initiate a return, please reach out to us directly. We reserve the right to refuse returns that do not meet the conditions outlined above.</p>
              </section>

              <section className="policy-section" id="privacy">
                <div className="section-number">06</div>
                <h2 className="section-heading">Privacy <em>& Data</em></h2>
                <p>Your use of this Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Site, you consent to our collection and use of personal information in accordance with that policy.</p>
                <p>We take data privacy seriously. Personal information you provide — such as your name, email address, and payment details — is used solely to process your orders, communicate with you, and improve your experience on the Site. We do not sell your personal data to third parties.</p>
                <p>For full details on how your data is collected, stored, and processed, please refer to our Privacy Policy.</p>
              </section>

              <section className="policy-section" id="disclaimers">
                <div className="section-number">07</div>
                <h2 className="section-heading"><em>Disclaimers</em></h2>
                <p>The Site and all content therein are provided on an "as is" and "as available" basis, without warranties of any kind, express or implied. <span className="whitespace-nowrap">Sofia.Marbella</span> makes no representations regarding:</p>
                <ul>
                  <li>The accuracy, completeness, or timeliness of any content on the Site</li>
                  <li>The uninterrupted availability of the Site</li>
                  <li>The fitness of products for any particular purpose</li>
                  <li>The absence of viruses or other harmful components</li>
                </ul>
                <p>Colours and product details depicted on the Site are as accurate as photographic and display technology allows, but we cannot guarantee that your screen will perfectly reproduce the true appearance of our products.</p>
              </section>

              <section className="policy-section" id="liability">
                <div className="section-number">08</div>
                <h2 className="section-heading">Limitation of <em>Liability</em></h2>
                <p>To the fullest extent permitted by law, <span className="whitespace-nowrap">Sofia.Marbella</span> shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of — or inability to use — the Site or its contents.</p>
                <p>Our total liability to you for any claim arising in connection with these Terms shall not exceed the amount you paid to us in the three months preceding the claim, or €100, whichever is greater.</p>
                <p>Nothing in these Terms shall exclude or limit liability that cannot be excluded or limited under applicable consumer protection law.</p>
              </section>

              <section className="policy-section" id="contact">
                <div className="section-number">12</div>
                <h2 className="section-heading">Contact <em>Us</em></h2>
                <p>If you have any questions, concerns, or requests regarding these Terms & Conditions, please do not hesitate to reach out to us:</p>

                <div className="contact-card">
                  <div className="contact-card-label">Get in Touch</div>
                  <h3><span className="whitespace-nowrap">Sofia.Marbella</span><br />Legal Enquiries</h3>
                  <p>Email: <a href="mailto:legal@sofiamarbella.com" className="hover:text-white transition-colors">legal@sofiamarbella.com</a></p>
                  <p>Website: <a href="https://sofia-marbella.vercel.app" target="_blank" className="hover:text-white transition-colors">sofia-marbella.vercel.app</a></p>
                  <p className="mt-4 text-gray-400">Marbella, Málaga, Spain</p>
                  <p className="mt-3 text-xs opacity-25">We aim to respond to all enquiries within 3-5 business days.</p>
                </div>
              </section>
            </main>
          </div>
        </div>

        <footer className="footer-legal px-[60px] py-10 border-t border-[#222222] flex justify-center items-center bg-[#070707]">
          <div className="footer-note text-[11px] text-[#888888] tracking-widest uppercase text-center italic opacity-60">Success is silent.</div>
        </footer>
      </div>
    </div>
  );
};

export default TermsConditions;
