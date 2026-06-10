import { DisclaimerBanner } from './DisclaimerBanner';

export function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div>
        <p className="eyebrow">Ethical boundary</p>
        <h2>Built for public education, not government affiliation.</h2>
        <p>
          Open Brief Lab is a portfolio project for learning structured public-source analysis. It does not collect
          private data, does not access restricted information, and does not generate operational intelligence products.
        </p>
      </div>
      <DisclaimerBanner compact />
      <p className="footer-note">
        Designed to demonstrate analytic writing, uncertainty handling, accessible UI, and responsible product judgment.
      </p>
    </footer>
  );
}
