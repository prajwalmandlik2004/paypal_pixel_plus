import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import PayPalLogo from '../common/PayPalLogo';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'About',
      links: [
        { label: 'About PayPal', href: '#' },
        { label: 'Newsroom', href: '#' },
        { label: 'Jobs', href: '#' },
        { label: 'Investor Relations', href: '#' },
        { label: 'Social Impact', href: '#' },
      ],
    },
    {
      title: 'For Consumers',
      links: [
        { label: 'Send Money', href: '#' },
        { label: 'Receive Money', href: '#' },
        { label: 'Shopping', href: '#' },
        { label: 'Mobile App', href: '#' },
        { label: 'Card', href: '#' },
      ],
    },
    {
      title: 'For Businesses',
      links: [
        { label: 'Accept Payments', href: '#' },
        { label: 'Payment Solutions', href: '#' },
        { label: 'Shop and Sell', href: '#' },
        { label: 'Invoicing', href: '#' },
        { label: 'Shipping', href: '#' },
      ],
    },
    {
      title: 'Partners & Developers',
      links: [
        { label: 'PayPal Partners', href: '#' },
        { label: 'Developer Documentation', href: '#' },
        { label: 'SDKs & Tools', href: '#' },
        { label: 'Shopping Platforms', href: '#' },
        { label: 'Commerce Platforms', href: '#' },
      ],
    },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Legal', href: '#' },
    { label: 'Policy Updates', href: '#' },
    { label: 'Worldwide', href: '#' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* PayPal logo and info */}
          <div className="lg:col-span-1">
            <PayPalLogo className="h-8 w-auto mb-4 text-white" />
            <div className="mt-4">
              <select
                className="bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
              </select>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center space-x-6 mt-12">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Legal links and copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              &copy; 1999-{new Date().getFullYear()} PayPal, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;