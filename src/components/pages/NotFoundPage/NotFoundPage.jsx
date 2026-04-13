import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! Page not found</p>

      <a href="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFoundPage;
