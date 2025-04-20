import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, AlertCircle } from 'lucide-react';
import PayPalLogo from '../common/PayPalLogo';
import NavDropdown from './NavDropdown';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthAlert, setShowAuthAlert] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Navigation items with dropdown content
  const navItems = [
    {
      label: 'Personal',
      items: [
        { label: 'How PayPal Works', href: '/personal/how-it-works' },
        { label: 'Pay Online', href: '/personal/pay-online' },
        { label: 'Send Payments', href: '/personal/send-money' },
        { label: 'Receive Payments', href: '/personal/request-money' },
        { label: 'PayPal App', href: '/personal/mobile-app' },
      ]
    },
    {
      label: 'Business',
      items: [
        { label: 'Accept Online Payments', href: '/business/accept-payments' },
        { label: 'Send Invoices', href: '/business/invoicing' },
        { label: 'Business Debit Card', href: '/business/debit-card' },
        { label: 'Point of Sale', href: '/business/pos' },
        { label: 'Business Credit', href: '/business/credit' },
      ]
    },
    {
      label: 'Developer',
      items: [
        { label: 'Overview', href: '/developer' },
        { label: 'Documentation', href: '/developer/docs' },
        { label: 'SDKs', href: '/developer/sdks' },
        { label: 'PayPal Commerce Platform', href: '/developer/commerce' },
        { label: 'Developer Community', href: '/developer/community' },
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Help Center', href: '/help' },
        { label: 'Resolution Center', href: '/help/resolution' },
        { label: 'Security Center', href: '/help/security' },
        { label: 'Community Forum', href: '/help/community' },
        { label: 'Contact Us', href: '/help/contact' },
      ]
    },
  ];

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
    setShowAuthAlert(false);
  }, [location]);

  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAuthAlert(true);
    setTimeout(() => setShowAuthAlert(false), 3000);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <PayPalLogo className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavDropdown 
                key={item.label} 
                label={item.label} 
                items={item.items} 
              />
            ))}
            <button
              onClick={handleDashboardClick}
              className="text-gray-700 hover:text-gray-900 font-medium focus:outline-none"
            >
              Dashboard
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Log In
            </Link>
            <Link 
              to="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Auth Alert */}
        {showAuthAlert && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-2 rounded-md shadow-lg flex items-center space-x-2 animate-fadeIn">
            <AlertCircle className="h-5 w-5" />
            <span>Please sign up or log in to access the dashboard</span>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="pt-2 pb-4 space-y-1 px-4 sm:px-6">
            {navItems.map((category) => (
              <div key={category.label} className="py-2">
                <div className="flex items-center justify-between py-2 font-medium">
                  <span>{category.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="pl-4 mt-1 space-y-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleDashboardClick}
              className="w-full text-left py-2 text-gray-600 hover:text-gray-900"
            >
              Dashboard
            </button>
          </div>
          <div className="pt-4 pb-6 border-t border-gray-200 px-4 sm:px-6">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/login" 
                className="text-center py-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;