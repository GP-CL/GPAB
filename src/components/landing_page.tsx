import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import HealthStatsCarousel from "./caraousel_play"; // Import the carousel component

export default function Landing() {
    return (
        <div className="min-h-screen bg-white px-4 py-6 text-gray-800 font-sans max-w-md mx-auto">
            {/* Top Doctor Illustration & Text */}
            <div className="text-center">
                <img
                    src="./Gene-Power-Logo.png" // Place ts inside `public/` folder
                    alt="Doctor Illustration"
                    className="mx-auto w-[280px] h-auto"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 " style={{ fontFamily:"'Delius', cursive" }}>
                    K & H LifestyleRx Pogram
                    </h2>
                <p className="text-lg mt-4 font-medium">
                    Tired of treating symptoms instead of causes? Discover how your DNA and lifestyle can transform your health journey.
                </p>
                <Link to="/book">
                    <button className="mt-4 bg-blue-800 text-white py-2 px-6 rounded-md text-sm font-semibold shadow-md">
                        Book Now
                    </button>
                </Link>
            </div>

            {/* India's Health Reality */}
            <div className="bg-blue-50  rounded-lg">
                {/* <h3 className="text-center font-semibold text-blue-900 mb-4">India’s Health Reality</h3>

                <div className="flex space-x-4 overflow-x-auto px-2 scrollbar-hide">
                    <div className="min-w-[150px] flex-shrink-0 bg-white rounded-lg p-2 shadow text-center">
                        <img src="/diabetes.png" alt="Diabetes" className="w-10 h-10 mx-auto" />
                        <p className="font-bold">101M+</p>
                        <p className="text-xs text-gray-600">Diabetes</p>
                    </div>

                    <div className="min-w-[150px] flex-shrink-0 bg-white rounded-lg p-2 shadow text-center">
                        <img src="/fatty-liver.png" alt="Fatty Liver" className="w-10 h-10 mx-auto" />
                        <p className="font-bold">1 in 4</p>
                        <p className="text-xs text-gray-600">Fatty Liver</p>
                    </div>

                    <div className="min-w-[150px] flex-shrink-0 bg-white rounded-lg p-2 shadow text-center">
                        <img src="/heart.png" alt="Heart" className="w-10 h-10 mx-auto" />
                        <p className="font-bold">1 in 4</p>
                        <p className="text-xs text-gray-600">Hypertension</p>
                    </div>

                    <div className="min-w-[150px] flex-shrink-0 bg-white rounded-lg p-2 shadow text-center">
                        <img src="/hypertension.png" alt="Hypertension" className="w-10 h-10 mx-auto" />
                        <p className="font-bold">30%</p>
                        <p className="text-xs text-gray-600">Hypertension</p>
                    </div>
                </div> */}
                <HealthStatsCarousel />
            </div>


            {/* Gene Explanation */}
            <div className="mt-6">
                <h3 className="font-semibold">Your genes don’t change, but how you use them can.</h3>
                <p className="text-sm text-gray-600 mt-1">
                    Find out why genetics and blood markers matter more than traditional health checks.
                </p>
            </div>

            {/* What's Included */}
            <div className="mt-6">
                <h3 className="font-semibold">What’s Included:</h3>
                <div className="mt-3 space-y-4">
                    <div className="flex items-center">
                        <img src="/doctor_patient.png" alt="Doctor" className="w-10 h-10" />
                        <p className="ml-4">2 Doctor Visits <span className="text-xs text-gray-500">(Video/in-clinic)</span></p>
                    </div>
                    <div className="flex items-center">
                        <img src="/blood-test.png" alt="Blood Tests" className="w-10 h-10" />
                        <p className="ml-4">100+ Bio Markers Evaluated </p>
                    </div>
                    <div className="flex items-center">
                        <img src="/blood-test.png" alt="Blood Tests" className="w-10 h-10" />
                        <p className="ml-4">19+ Common Complex Conditions Analysed </p>
                    </div>
                    <div className="flex items-center">
                        <img src="/diet.png" alt="Diet" className="w-10 h-10" />
                        <p className="ml-4">Personalized Diet & Ancestral Guidance</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3 text-center">
                <Link to="/explore_program">
                    <button className="bg-teal-600 text-white py-2 px-6 rounded-md w-full font-semibold">
                        Explore Program
                    </button>
                </Link>
                <Link to="/book">
                    <button className="mt-2 border border-teal-600 text-teal-600 py-2 px-6 rounded-md w-full font-semibold">
                        Book Appointment
                    </button>
                </Link>
            </div>
        </div>
    );
}
