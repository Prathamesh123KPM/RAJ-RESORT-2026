/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';

const Rooms = lazy(() => import('./pages/Rooms'));
const Amenities = lazy(() => import('./pages/Amenities'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Location = lazy(() => import('./pages/Location'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function CanonicalUpdater() {
  const location = useLocation();

  useEffect(() => {
    const canonicalLink = document.getElementById('canonical-tag') as HTMLLinkElement;
    if (canonicalLink) {
      const currentPath = location.pathname;
      const canonicalPath = currentPath === '/' ? '' : currentPath;
      canonicalLink.href = `https://rajresortkelva.com${canonicalPath}`;
    }
  }, [location.pathname]);

  return null;
}

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-20 bg-gray-50 border-b border-gray-100 animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="h-12 w-3/4 bg-gray-100 rounded-lg mb-8 animate-pulse" />
        <div className="h-6 w-1/2 bg-gray-50 rounded-lg mb-12 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[400px] bg-gray-100 rounded-2xl animate-pulse" />
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-50 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-50 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-50 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <CanonicalUpdater />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="location" element={<Location />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
