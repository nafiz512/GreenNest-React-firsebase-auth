import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { NavLink } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPostOffice, MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="bg-[#111813] text-[#dce5df] py-10 p-4 sm:px-[8%] ">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 border-b border-[#2b3a2f] pb-8">
                {/* Brand Section */}
                <div>
                    <NavLink
                        to={"/"}
                        className="text-3xl font-bold text-white mb-4"
                    >
                        Green<span className="text-[#17cf54]">Nest</span>
                    </NavLink>
                    <p className="text-sm leading-relaxed text-[#b8c9be]">
                        GreenNest is your one-stop destination for beautiful
                        indoor plants and eco-friendly décor ideas. We help you
                        bring freshness and calm into your home.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <NavLink
                                to={"/"}
                                className="hover:text-[#17cf54] transition-colors"
                            >
                                Home page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/plants"}
                                className="hover:text-[#17cf54] transition-colors"
                            >
                                Explore
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/about"}
                                className="hover:text-[#17cf54] transition-colors"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/contact"}
                                className="hover:text-[#17cf54] transition-colors"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Get in Touch
                    </h3>
                    <ul className="space-y-2 text-sm text-[#b8c9be]">
                        <li className="flex gap-1">
                            <FaLocationDot size={20} /> 123 Green Street, Eco
                            City, Earth
                        </li>
                        <li className="flex gap-1">
                            <IoCall size={20} />
                            +1 (555) 234-7890
                        </li>
                        <li className="flex gap-1">
                            <MdLocalPostOffice size={20} />{" "}
                            support@greennest.com
                        </li>
                        <li className="flex gap-1">
                            <MdOutlineAccessTimeFilled size={20} /> Mon–Fri: 9AM
                            – 6PM
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Follow Us
                    </h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-[#1b271f] rounded-full hover:bg-[#17cf54] transition"
                        >
                            <FaInstagram className="text-white text-lg" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-[#1b271f] rounded-full hover:bg-[#17cf54] transition"
                        >
                            <FaFacebookF className="text-white text-lg" />
                        </a>
                        <a
                            href="https://pinterest.com"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-[#1b271f] rounded-full hover:bg-[#17cf54] transition"
                        >
                            <FaPinterestP className="text-white text-lg" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-center text-sm text-[#8fa897] pt-6">
                <p>© 2025 GreenNest. All rights reserved.</p>
                <p className="mt-2 sm:mt-0">Powered by GreenNest Nature Co.</p>
            </div>
        </footer>
    );
}
