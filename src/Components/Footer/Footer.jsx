import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#00736B] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">HobbyHub</h3>
                        <p className="text-[#ECE3CA] mb-4">
                            Creating unforgettable experiences and connecting people through amazing events.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-[#FF9FA0] transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" className="hover:text-[#FF9FA0] transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="hover:text-[#FF9FA0] transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-[#FF9FA0] transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-[#ECE3CA] hover:text-[#FF9FA0] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/events" className="text-[#ECE3CA] hover:text-[#FF9FA0] transition-colors">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-[#ECE3CA] hover:text-[#FF9FA0] transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-[#ECE3CA] hover:text-[#FF9FA0] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy-policy" className="text-[#ECE3CA] hover:text-[#FF9FA0] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-[#ECE3CA] hover:text-[#FF9FA0] transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/refund-policy" className="text-[#ECE3CA] hover:text-[#FF9FA0] transition-colors">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookie-policy" className="text-[#ECE3CA] hover:text-[#FF9FA0] transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                        <p className="text-[#ECE3CA] mb-4">
                            Subscribe to our newsletter for updates and exclusive offers.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
                            />
                            <button className="bg-[#FF9FA0] text-white px-4 py-2 rounded-r-lg hover:bg-[#FF9192] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[#ECE3CA] text-center">
                    <p className="text-[#ECE3CA] flex items-center justify-center gap-2">
                        © 2025 HobbyHub. Made with <FaHeart className="text-[#FF9FA0]" /> in Bangladesh
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 