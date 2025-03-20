import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Landing() {
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState(null);
  const companyDivRef = useRef(null);
  const cvRef = useRef(null);
  const interviewsRef = useRef(null);
  const navigate = useNavigate();

  const fetchCompany = async () => {
    if (!companyName.trim()) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:5500/api/v1/company/search?name=${encodeURIComponent(
          companyName
        )}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setCompanyData(data.data);
    } catch (error) {
      console.error("Error fetching company:", error);
    }
  };

  const scrollToCompanyDiv = () => {
    if (companyDivRef.current) {
      companyDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#120F25] w-full h-full text-white">
      <Nav />
      <div className="text-center justify-center items-center">
        <p className="p-44 text-[#A855F7] mb-[-165px]">
          Ace Your Job Interview with AI!
        </p>
        <h1 className=" text-3xl font-bold">
          Discover Your Future Company Before You Apply!
        </h1>
        <p className="text-[#D1D5DB] text-sm mt-[11px] mb-[11px]">
          Get real-time insights on companies, interview questions, and work
          culture in one place
        </p>
        <div className="bg-[#9333EA] text-white rounded-full p-1.5 pl-2 ml-10 shadow-md flex justify-center items-center inline-flex">
          <a
            className="inline-flex text-center justify-center items-center pl-3"
            href="/signin"
          >
            Get Started
            <img className="p-1.5 pl-3" src="/assets/Component 1.svg" />
          </a>
        </div>
        <div className="flex justify-center items-center" ref={companyDivRef}>
          <div
            className="justify-center text-black items-center w-4xl mt-32 shadow-2xl bg-white p-2 rounded-2xl"
            style={{
              boxShadow: `
            0px 0px 60px #7C3AED, 
            0px 0px 80px #9867F0, 
            0px 0px 90px #ED4E50
          `,
            }}
          >
            <textarea
              placeholder="Write the Company Name...."
              className="w-4xl text-black resize-none placeholder-black outline-none"
              rows={5}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <div className="flex justify-between pl-3 pr-3 items-center">
              <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept=".pdf, .docx"
                />
                <label
                  htmlFor="fileInput"
                  className="flex items-center hidden bg-transparent gap-2 text-gray-500 text-md cursor-pointer hover:text-gray-700"
                >
                  <span>📁</span> Add Attachment
                </label>
              </div>
              <button
                onClick={fetchCompany}
                className="bg-[#9233eadc] hover:bg-[#9233ea] text-white font-extrabold text-3xl rounded-2xl pl-2 pr-2 pb-1 shadow-md flex justify-center items-center text-center inline-flex"
              >
                →
              </button>
            </div>
            {companyData && (
              <div className="mt-8 w-full max-w-4xl grid  grid-cols-1 md:grid-cols-2 gap-6">
                {companyData.companies.map((company) => (
                  <div
                    key={company._id}
                    className="bg-white shadow-md border border-purple-700 rounded-xl p-5"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {company.name}
                        </h3>
                        <a
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>

                    <p className="mt-3 text-gray-600">{company.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {company.stacks.map((stack) => (
                        <span
                          key={stack}
                          className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-between text-gray-700 text-sm">
                      <span>📍 {company.location[0].address}</span>
                      <span>
                        {company.isHiring
                          ? "✅ Employment available"
                          : "❌ Employment unavailable"}
                      </span>
                    </div>

                    {company.careersLinks.length > 0 && (
                      <a
                        href={company.careersLinks[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4 text-blue-500 hover:underline"
                      >
                        See Jobs
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <h1 className=" mt-32 text-2xl mb-[11px] font-bold ">
            Empower Your Career with AI-driven Insights
          </h1>
          <p className="text-[#D1D5DB] text-sm mb-8">
            Leverage cutting-edge AI to make smarter career decisions. Our
            platform provides powerful tools to analyze companies, prepare for
            interviews, and optimize your CV for success.
          </p>
        </div>
        <div>
          <div className="flex m-8 justify-center items-center">
            <div className="flex w-[65%] justify-center items-center">
              <div
                className="border-2 border-transparent shadow-[#1F2937] text-start shadow-lg rounded-2xl p-4 m-4"
                onClick={scrollToCompanyDiv}
              >
                <h1 className="text-[#F9FAFB] text-lg">Company Analysis</h1>
                <p className="text-[#D1D5DB] text-sm mt-[6px]">
                  Gain deep insights into company culture, technologies, job
                  openings, and real employee experiences before you apply.
                </p>
                <img
                  src="/assets/Send thousands of emails.png"
                  className=" rounded-xl mt-2"
                />
              </div>
              <div className="border-2 border-transparent shadow-[#1F2937] text-start shadow-lg rounded-2xl p-4 m-4">
                <h1
                  className="text-[#F9FAFB] text-lg"
                  onClick={() => navigate("/interview")}
                  ref={interviewsRef}
                >
                  Mock Interviews
                </h1>
                <p className="text-[#D1D5DB] text-sm mt-[6px]">
                  Sharpen your interview skills with AI-powered practice
                  sessions, instant feedback, and expert recommendations.
                </p>
                <img
                  src="/assets/Feature-2.0b8b35af.svg fill.png"
                  className=" rounded-xl mt-7"
                />
              </div>
            </div>
          </div>
          <div className="flex m-8 justify-center items-center">
            <div
              className="border-2 w-[65%] flex border-transparent text-start shadow-[#1F2937] shadow-lg rounded-2xl p-4 m-4"
              onClick={() => navigate("/cv")}
              ref={cvRef}
            >
              <div>
                <h1 className="text-[#F9FAFB] text-lg">CV Analysis</h1>
                <p className="text-[#D1D5DB] text-sm mt-[6px]">
                  Optimize your resume with AI-driven suggestions to match job
                  requirements and stand out to recruiters. Take control of your
                  career journey today! 🚀
                </p>
              </div>
              <div>
                <img
                  src="/assets/image_fx_ (10) 2.png"
                  className=" rounded-xl pl-4"
                />
              </div>
            </div>
          </div>
        </div>
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
              href="/signin"
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

export default Landing;
