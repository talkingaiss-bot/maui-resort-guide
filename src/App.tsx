import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer } from '@/src/components/Layout';
import Home from '@/src/pages/Home';
import { RegionDetail, BeachDetail } from '@/src/pages/Details';
import Blog, { ChatWidget } from '@/src/pages/Blog';
import Beaches from '@/src/pages/Beaches';
import Hotels from '@/src/pages/Hotels';
import Regions from '@/src/pages/Regions';
import React from 'react';

// Scroll to top on route change
function ScrollToTopOnMount() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTopOnMount />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/regions" element={<Regions />} />
              <Route path="/regions/:regionId" element={<RegionDetail />} />
              <Route path="/regions/:regionId/:beachId" element={<BeachDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/beaches" element={<Beaches />} />
              <Route path="/hotels" element={<Hotels />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

