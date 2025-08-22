'use client';

import { CalendarCheck, ClipboardList, Dna, Heart, Pill, User } from "lucide-react";
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import WhyGenpowerx from "./why_genepowerx";
import HealthStatsCarousel from "./caraousel_play";
import {Link} from "react-router-dom";
const data = [
    {
        icon: <User className="w-8 h-8 text-purple-600" />,
        title: '2 Doctor Visits',
        description: 'Online or offline for personalized, expert guidance.',
    },
    {
        icon: <ClipboardList className="w-8 h-8 text-pink-600" />,
        title: '100+ Health Markers',
        description: 'In-depth bloodwork, history, and genomic testing.',
    },
    {
        icon: <CalendarCheck className="w-8 h-8 text-green-600" />,
        title: 'Personalized Roadmap',
        description: 'Step-by-step plan for nutrition, sleep, fitness & more.',
    },
    {
        icon: <Dna className="w-8 h-8 text-blue-600" />,
        title: 'DNA-Based Guidance',
        description: 'Genomic insights help optimize medication & lifestyle.',
    },
    {
        icon: <Heart className="w-8 h-8 text-red-600" />,
        title: 'Hereditary Cancer Risks',
        description: '5 types of cancer risk assessments included.',
    },
    {
        icon: <Pill className="w-8 h-8 text-yellow-600" />,
        title: 'Supplements & Medications',
        description: 'Customized based on biology and genetic profile.',
    },
];

export default function ExploreProgram() {
    return (
        <section className="w-full bg-gray-50 py-12 px-4">
            <div className="text-center">
                <img
                    src="./Gene-Power-Logo.png" 
                    alt="Doctor Illustration"
                    className="mx-auto w-auto h-[65px]"
                />
                </div>
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800" style={{ fontFamily: "'Tinos', serif" }}>
                    K&H LifestyleRx Program
                </h2>
                <h3 className="text-xl md:text-1xl font-bold text-center text-gray-700" style={{ fontFamily: "'Tinos', serif" }}>
                Next-Gen Preventive Health Powered by AI & Genomics
                </h3>
                <div className="bg-white px-4 py-6 text-gray-800 font-sans mx-auto text-center">
                    <Link to="/book">
                        <button className="bg-blue-800 text-white py-2 px-6 rounded-md text-sm font-semibold shadow-md">
                            Book Now
                        </button>
                    </Link>
                </div>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    A science-based, doctor-led program decoding your genetics, biology, and habits into practical changes in 🥗 nutrition, 🏋️‍♀️ fitness, 😴 sleep, 😌 stress, and 💊 supplements.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                    {data.map((item, idx) => (
                        <Card key={idx} className="shadow-lg hover:shadow-lg transition-all duration-300">
                            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                                {item.icon}
                                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Roadmap Section */}
                <div className="mt-12 text-center space-y-5">
                    <h3 className="text-2xl font-bold text-purple-700">🛣️ Your Transformation Roadmap</h3>
                    <ul className="text-gray-700 text-base space-y-3 text-left max-w-3xl mx-auto pl-4">
                        <li>
                            🔍 <strong>First Visit:</strong>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>Detailed medical history, blood tests, genomic testing.</li>
                                <li>In-depth diet and lifestyle assessment.</li>
                                <li>
                                    Address your concerns, set clear goals, and create a potential action plan
                                    (medical, diet, lifestyle).
                                </li>
                            </ul>
                        </li>
                        <li>
                            🧬 <strong>Second Visit:</strong>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>Comprehensive review of blood test results.</li>
                                <li>Review of your genomic test results.</li>
                                <li>Guidance on medications based on your genetic information.</li>
                                <li>Quick medical evaluation.</li>
                                <li>
                                    Solidify your personalized diet and lifestyle plan, integrating genomic data
                                    and Ancestral Healing principles.
                                </li>
                            </ul>
                        </li>
                        <li>📃 <strong>Blood work results will be delivered</strong></li>
                    </ul>
                </div>

                <WhyGenpowerx />
                {/* CTA */}
                {/* <div className="mt-10 text-center">
                    <Badge className="text-base bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full cursor-pointer">
                        Start your journey with LifestyleRx 🚀
                    </Badge>

                </div> */}
<HealthStatsCarousel/>
<div className="mt-12 text-center space-y-5">
© 2025 GenepoweRx.com
</div>


            </div>
        </section>
    );
}
