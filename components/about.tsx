import { CheckCircle, Users, Award, Target } from "lucide-react";
import Image from "next/image";
import about from "@/public/Team-rafiki.svg";

export default function About() {
    const features = ["Expert team of developers and designers", "Agile development methodology", "Quality assurance and testing", "Post-launch support and maintenance", "Transparent communication", "On-time project delivery"];

    const stats = [
        { icon: Users, number: "50+", label: "Team Members" },
        { icon: Award, number: "150+", label: "Projects Delivered" },
        { icon: Target, number: "98%", label: "Success Rate" },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About QTechs</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We are a passionate team of developers, designers, and digital strategists dedicated to creating exceptional digital experiences. With over 5 years of experience, we've helped businesses of all sizes achieve their
                                digital goals.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">Our mission is to transform your ideas into powerful, scalable, and user-friendly digital solutions that drive real business results.</p>
                        </div>

                        {/* Features List */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <stat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        <Image src={about} alt="About Us" className="w-full h-auto" />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="text-2xl font-bold">5+</div>
                                <div className="text-xs">Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
