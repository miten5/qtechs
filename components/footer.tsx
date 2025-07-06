import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    const services = ["Web Development", "Mobile Apps", "Custom Software", "Cloud Solutions", "UI/UX Design", "Consulting"];

    const company = ["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Contact"];

    const resources = ["Documentation", "Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <img src={"/logo52.png"} alt="Logo" />
                        </div>
                        <p className="text-gray-400 leading-relaxed">We create exceptional digital experiences that help businesses thrive in the modern world.</p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>hello@qtechs.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>+1 (xxx) xxx-xxxx</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span>Toronto, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Resources</h3>
                        <ul className="space-y-3">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        {resource}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">&copy; { new Date().getFullYear() }  QTechs. All rights reserved.</div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
