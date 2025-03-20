import React, { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import DropFileInput from "../Components/DropFileInput";

function Cv() {
  const [cvFeedback, setCvFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onFileChange = async (files) => {
    if (files.length === 0) return;

    const file = files[0]; // Only process the first file
    const formData = new FormData();
    formData.append("cv", file);

    try {
      setLoading(true);
      setError("");
      setCvFeedback(null);

      const response = await fetch("http://127.0.0.1:5500/api/v1/cv/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok)
        throw new Error("Failed to analyze CV. Please try again.");

      const data = await response.json();
      setCvFeedback(data.data.feadback);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#120F25] w-full min-h-screen text-white">
      <Nav />
      <div className="text-center justify-center items-center">
        <p className="p-44 text-[#A855F7] mb-[-165px]">
          Ace Your CV / Resume with AI!
        </p>
        <h1 className="text-3xl font-bold">Is your resume good enough?</h1>
        <p className="text-[#D1D5DB] text-sm mt-[11px] mb-[11px]">
          A free and fast AI resume checker doing 16 crucial checks to ensure
          your resume is ready to perform and get you interview callbacks.
        </p>

        {/* CV Upload Component */}
        <div className="flex flex-col justify-center mt-10 items-center">
          <DropFileInput onFileChange={onFileChange} />
        </div>

        {loading && <p className="text-purple-400 mt-4">Analyzing CV...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Feedback Display */}
        {cvFeedback && (
          <div className="mt-10 bg-[#1F1B39] p-6 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-[#A855F7]">
              CV Analysis Results
            </h2>

            <div className="mt-6">
              <h3 className="text-green-400 font-bold text-2xl ">
                ✅ Good Aspects
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-start">
                {cvFeedback.good_things.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-red-400 font-bold text-2xl ">
                ❌ Areas to Improve
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-start">
                {cvFeedback.bad_things.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-blue-400 font-bold text-2xl ">
                ✔ Correct Sections
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-start">
                {cvFeedback.correct.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-yellow-400 font-bold text-2xl ">
                💡 Recommendations
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-start">
                {cvFeedback.recommendations.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-32">
          <h1 className="text-white text-2xl m-[11px] font-bold">
            Unlock the Power of AI for Your Career Growth
          </h1>
          <p className="text-[#D1D5DB] text-sm mb-8">
            Take the guesswork out of job applications! Our AI-powered platform
            helps you analyze companies, prepare for interviews, and refine your
            CV to stand out.
          </p>
          <div className="bg-[#9333EA] mb-36 text-white rounded-full p-1.5 pl-2 ml-10 shadow-md flex justify-center text-center items-center inline-flex">
            <a
              className="inline-flex text-center justify-center items-center pl-3"
              href="/"
            >
              Start now → and take control of your career journey today!
              <img className="p-1.5 pl-3" src="/assets/Component 1.svg" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cv;
