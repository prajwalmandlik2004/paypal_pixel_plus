import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideNav = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {!hideNav && <Header />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;