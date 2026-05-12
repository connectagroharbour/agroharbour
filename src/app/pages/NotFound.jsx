import { Link, useRouteError, isRouteErrorResponse } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-display">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 relative">
          <div className="text-[150px] md:text-[200px] font-black text-gray-200 leading-none tracking-tighter select-none">
            {is404 ? "404" : "Oops"}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
              {is404 ? "Page Not Found" : "Something went wrong"}
            </h1>
          </div>
        </div>
        
        <p className="text-xl text-gray-500 mb-10 max-w-lg mx-auto font-medium">
          {is404 
            ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            : error?.message || error?.statusText || "An unexpected error occurred. Please try again later."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl font-bold hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
          <Link 
            to="/"
            className="w-full sm:w-auto px-8 py-4 bg-[#1B5E20] text-white rounded-2xl font-bold hover:bg-[#154a19] hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
