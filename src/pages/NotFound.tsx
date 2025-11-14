import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-gray-800">404</h1>
        <p className="mb-6 text-2xl text-gray-600">Oops! Page not found.</p>
        <a
          href="/"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white text-lg font-medium hover:bg-blue-700 transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
