import React from 'react';

const bgImage =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'; // Use a different playful, artistic Unsplash image

const quickLinks = [
  { name: 'FAQs', path: '#' },
  { name: 'Track Order', path: '#' },
  { name: 'Store Locator', path: '#' },
  { name: 'Return & Exchange', path: '#' },
  { name: 'Site Map', path: '#' },
];
const aboutLinks = [
  { name: 'Our Story', path: '#' },
  { name: '#WithArtistryNest Community', path: '#' },
  { name: 'Corporate Gifts', path: '#' },
  { name: 'ArtistryNest Daily', path: '#' },
];
const companyLinks = [
  { name: 'Privacy Policy', path: '#' },
  { name: 'Terms Of Use', path: '#' },
  { name: 'Contact Us', path: '#' },
];

function Footer() {
  return (
    <footer className="relative w-full mt-10">
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-artistry-dark">
        {/* Get in Touch */}
        <div>
          <h4 className="font-display text-base font-bold mb-2">GET IN TOUCH</h4>
          <div className="text-sm mb-1">Whatsapp: <a href="tel:+919980127955" className="underline">+91 9980127955</a></div>
          <div className="text-sm mb-1">Mon-Sat 10AM - 6PM IST</div>
          <div className="text-sm mb-1">Email: <a href="mailto:hello@artistrynest.com" className="underline">hello@artistrynest.com</a></div>
          <div className="flex gap-3 mt-2">
            {/* Social SVGs */}
            <a href="#" aria-label="Instagram">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
        {/* Need Help */}
        <div>
          <h4 className="font-display text-base font-bold mb-2">NEED HELP</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name} className="mb-1">
                <a href={link.path} className="hover:underline text-sm">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h4 className="font-display text-base font-bold mb-2">ABOUT US</h4>
          <ul>
            {aboutLinks.map((link) => (
              <li key={link.name} className="mb-1">
                <a href={link.path} className="hover:underline text-sm">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="font-display text-base font-bold mb-2">COMPANY</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.name} className="mb-1">
                <a href={link.path} className="hover:underline text-sm">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Our Apps */}
        <div>
          <h4 className="font-display text-base font-bold mb-2">OUR APPS</h4>
          <div className="flex gap-3 mt-2">
            {/* App Store SVG */}
            <a href="#" aria-label="Apple App Store">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.564 13.307c-.02-2.14 1.75-3.164 1.83-3.213-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.39 6.45 1.08 8.56.72 1.04 1.58 2.2 2.71 2.16 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.67.7 2.8.68 1.16-.02 1.89-1.05 2.6-2.09.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.29-3.45zm-2.13-6.3c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.64-1.04 1.67-.86 2.65.91.07 1.86-.46 2.47-1.18z"/></svg>
            </a>
            {/* Google Play SVG */}
            <a href="#" aria-label="Google Play Store">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3.6 2.2c-.2.1-.3.3-.3.5v18.6c0 .2.1.4.3.5.2.1.4.1.6 0l10.2-5.9-10.8-13zm.7 19.2l10.8-6.2-2.5-2.9-8.3 9.1zm11.7-6.7l2.5-1.4-2.5-1.4v2.8zm3.2-1.8l-2.7-1.6-2.6 1.5 2.6 1.5 2.7-1.6zm-3.2-1.8v-2.8l2.5 1.4-2.5 1.4zm-1.2-3.2l-10.2-5.9c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v.1l10.8 13 2.5-2.9-2.2-2.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-center text-xs text-artistry-dark/70 pb-4">© {new Date().getFullYear()} ArtistryNest. All rights reserved.</div>
    </footer>
  );
}

export default Footer; 