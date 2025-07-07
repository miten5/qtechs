import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import coding from "@/public/coding-28.svg";

export default function Hero() {
    return (
        <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">🚀 Leading Development Agency</div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                We Build
                                <span className="text-primary block">Digital Solutions</span>
                                That Drive Results
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">Transform your business with cutting-edge web and software development. We create scalable, modern applications that help you stay ahead of the competition.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md bg-primary hover:bg-primary/90 text-lg px-8">
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            <div>
                                <div className="text-3xl font-bold text-primary">50+</div>
                                <div className="text-gray-600">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">98%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">8+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <Image src={coding} alt="Development Team" className="w-full h-auto" />
                        </div>
                        {/* Background Elements */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
