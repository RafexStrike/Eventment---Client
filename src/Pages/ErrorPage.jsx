import React from 'react';
import { Link } from 'react-router';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center">
                <div className="flex justify-center mb-8">
                    <FaExclamationTriangle className="text-8xl text-primary animate-bounce" />
                </div>
                <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">Oops! Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                    <FaHome />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;