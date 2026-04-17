import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // List of paths handled by the Portfolio scroller
    const portfolioPaths = ['/', '/about', '/projects', '/skills', '/leetcode', '/certificates', '/achievement', '/contact'];
    
    // Only scroll to top if the path is NOT in the portfolio sections
    // or if it's explicitly a new page like /kisandost
    if (!portfolioPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
