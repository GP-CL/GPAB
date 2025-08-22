"use client";
import { Lightbulb, Stethoscope, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const WhyGenpowerx = () => {
  const [currentDoctor, setCurrentDoctor] = useState(0);
  const [fade, setFade] = useState(true);
  
  const nextDoctor = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentDoctor((prev) => (prev + 1) % 2); // Only 2 doctors
      setFade(true);
    }, 200);
  };

  const prevDoctor = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentDoctor((prev) => (prev - 1 + 2) % 2); // Only 2 doctors
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const timer = setInterval(nextDoctor, 5000); // autoplay every 5s
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
        ✨ Why GenpoweRx?
      </h2>

      {/* Top 3 Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
          <Lightbulb className="text-yellow-500 w-8 h-8 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              Clear Understanding
            </h4>
            <p className="text-sm text-gray-600">
              Gain deep insights into your genetic and health data.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
          <Stethoscope className="text-blue-500 w-8 h-8 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              Physician-Led Planning
            </h4>
            <p className="text-sm text-gray-600">
              Expert guidance to apply complex data into actionable steps.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
          <Route className="text-green-500 w-8 h-8 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              Transformation Roadmap
            </h4>
            <p className="text-sm text-gray-600">
              A clear path across all health domains for lasting change.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Doctors Section */}
      <h2 className="mt-3 text-3xl font-bold text-center text-purple-800 mb-6">
        ✨ Meet Doctors ✨
      </h2>
      
      <div className="w-full max-w-xl mx-auto mt-10">
        <div className="overflow-hidden bg-white rounded-xl shadow-xl">
          <div
            className={`transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Dr. Hima Challa */}
            {currentDoctor === 0 && (
              <div>
                <img
                  src="./Hima.jpg"
                  alt="Dr. Hima Challa"
                  className="w-auto h-[240px] mx-auto rounded-full object-cover border-4 border-brown-600"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">
                    Dr. Hima Challa
                  </h3>
                  <p className="text-gray-700">
                    Dr. Hima Challa graduated from <strong>Gandhi Medical College</strong> and was among the top few in her batch. 
                    She specialized in <strong>Internal Medicine</strong> at <strong>St. Joseph Mercy Oakland, Michigan (USA)</strong>. 
                    She graduated in <strong>Medical Genomics</strong> from the Ivy League institution <strong>Harvard Medical School</strong>. 
                    She also holds a <strong>Master's in Nutrition Science</strong> from <strong>Texas Women's University</strong> 
                    and a <strong>Master's in Integrative Medicine</strong> from <strong>University of Arizona</strong>.
                  </p>
                </div>
              </div>
            )}

            {/* Dr. Kalyan Uppaluri */}
            {currentDoctor === 1 && (
              <div>
                <img
                  src="./Kalyan.jpg"
                  alt="Dr. Kalyan Uppaluri"
                  className="w-auto h-[240px] mx-auto rounded-full object-cover border-4 border-brown-600"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">
                    Dr. Kalyan Uppaluri
                  </h3>
                  <p className="text-gray-700">
                    Dr. Kalyan Uppaluri is the cofounder and the owner of <strong>K&H Personalized Medicine Clinic and Research Institute</strong>. 
                    He did his medical training at the prestigious <strong>Gandhi Medical College</strong>. 
                    He then moved to the United States, where he specialized in <strong>Internal Medicine</strong> at <strong>McLaren Hospital, Michigan</strong>. 
                    He also earned a degree in <strong>Medical Genomics</strong> from the Ivy League institute <strong>Stanford University</strong> 
                    and pursued <strong>Cancer Research</strong> at <strong>Wayne State University, Michigan</strong>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prevDoctor}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
          >
            ← Prev
          </button>
          <button
            onClick={nextDoctor}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
          >
            Next →
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-10">
        <p className="text-md text-gray-700 mb-4">
          Ready to Begin? Start your personalized health journey with{" "}
          <strong>K&H LifestyleRx</strong>, where <em>science meets lifestyle</em>, and{" "}
          <em>care meets clarity</em>.
        </p>
          <button className="mt-2 mr-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition">
          <a
            href="K and H  LifestyleRx program.pdf"
            download
          >
            Download Program Details
          </a>

        </button>
        <Link to="/book">
          <button className="mt-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition">
            🌱 Start Your Journey - Book Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhyGenpowerx;
