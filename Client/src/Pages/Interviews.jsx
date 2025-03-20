import React, { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Interviews = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    industry: "",
    description: "",
    cv: null,
  });

  const [questions, setQuestions] = useState([]); // الأسئلة
  const [answers, setAnswers] = useState({}); // إجابات المستخدم
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [responseData, setResponseData] = useState(null);

  const [currentStep, setCurrentStep] = useState(0); // تتبع المرحلة الحالية
  const questionsPerPage = 5; // عدد الأسئلة في كل مرحلة

  const BASE_URL = "http://127.0.0.1:5500/api/v1";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const fetchQuestions = async () => {
    setLoading(true);
    setError("");
    setResponseData(null);

    try {
      const url = `${BASE_URL}/interview/questions`;

      const requestBody = {
        role: formData.jobTitle || "",
        job: formData.description || "",
        industry: formData.industry || "",
        cv: formData.cv ? formData.cv.name : "",
        company: formData.company || "",
      };

      console.log("Fetching questions with:", requestBody);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch questions.");
      }

      const data = await response.json();
      console.log("API Questions Response:", data);

      const extractedQuestions = Object.values(data.data.questions).flat();
      setQuestions(extractedQuestions);

      const initialAnswers = {};
      extractedQuestions.forEach((question, index) => {
        initialAnswers[index] = "";
      });
      setAnswers(initialAnswers);

      setCurrentStep(0); // إعادة ضبط المرحلة عند استلام الأسئلة
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const submitAnswers = async () => {
    setLoading(true);
    setError("");

    try {
      const url = `${BASE_URL}/interview/evaluation`;

      const requestBody = {
        questions: questions.map((q, index) => ({
          question: q,
          answer: answers[index] || "",
        })),
      };

      console.log("Submitting evaluation with:", requestBody);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to evaluate answers.");
      }

      const data = await response.json();
      console.log("Evaluation Response:", data);

      setResponseData(data);
    } catch (err) {
      console.error("Submission Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // حساب المراحل
  const totalSteps = Math.ceil(questions.length / questionsPerPage);

  // تحديد الأسئلة المعروضة في المرحلة الحالية
  const startIndex = currentStep * questionsPerPage;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  return (
    <div className="w-full h-full text-white">
      <Nav />
      <div className="text-center justify-center items-center">
        <div className="flex flex-col text-white justify-center items-center p-12 pb-[93px] w-full h-full">
          <h2 className="text-center font-bold text-3xl mt-20 mb-20">
            Mock Interview
          </h2>

          <form
            className="flex flex-col text-start p-8 items-start justify-start"
            onSubmit={(e) => {
              e.preventDefault();
              fetchQuestions();
            }}
          >
            <div className="flex">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                onChange={handleChange}
                className="p-2 mb-3 mr-3 bg-gray-800 text-white rounded-lg"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                onChange={handleChange}
                className="p-2 mb-3 mr-3 bg-gray-800 text-white rounded-lg"
              />
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                onChange={handleChange}
                className="p-2 mb-3 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <textarea
              name="description"
              rows={10}
              cols={80}
              placeholder="Job Description"
              onChange={handleChange}
              className="p-2 mb-3 bg-gray-800 text-white rounded-lg"
            ></textarea>
            <div className="flex justify-center text-center pt-3 ml-2 ml-28">
            {/* <input
              type="file"
              accept=".pdf, .docx"
              onChange={handleFileChange}
              className="p-2 mb-3 bg-gray-800 text-white rounded-lg"
            /> */}
            <div className="flex items-center space-x-2 p-2 mb-3 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-600">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".pdf, .docx"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="flex items-center bg-transparent gap-2 text-white text-md cursor-pointer"
              >
                <span>📁</span> Add Attachment
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#9333EA] text-white rounded-full ml-8 p-2"
            >
              {loading ? "Generating..." : "Generate Mock Interview"}
            </button>
            </div>
          </form>

          {questions.length > 0 && (
            <div className="mt-10 w-full max-w-2xl">
              <h3 className="text-xl font-bold mb-4">
                Step {currentStep + 1} of {totalSteps}
              </h3>
              {currentQuestions.map((question, index) => (
                <div key={index} className="mb-4">
                  <p className="text-white mb-2">{question}</p>
                  <textarea
                    className="w-full bg-gray-800 text-white p-2 rounded-lg"
                    value={answers[startIndex + index] || ""}
                    onChange={(e) =>
                      handleAnswerChange(startIndex + index, e.target.value)
                    }
                  />
                </div>
              ))}

              <div className="flex justify-between mt-4">
                <button
                  onClick={() =>
                    setCurrentStep((prev) => Math.max(prev - 1, 0))
                  }
                  disabled={currentStep === 0}
                  className="bg-gray-600 text-white rounded-full p-2 disabled:opacity-50"
                >
                  Previous
                </button>

                {currentStep === totalSteps - 1 ? (
                  <button
                    onClick={submitAnswers}
                    className="bg-green-500 text-white rounded-full p-2"
                  >
                    Submit Answers
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setCurrentStep((prev) =>
                        Math.min(prev + 1, totalSteps - 1)
                      )
                    }
                    className="bg-blue-500 text-white rounded-full p-2"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}

          {/* عرض النتيجة المسترجعة بعد إرسال الإجابات */}
          {responseData && (
            <div className="mt-10 bg-gray-900 p-6 rounded-lg shadow-lg text-white w-full max-w-2xl">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                📋 Interview Evaluation
              </h3>

              {/* نقاط القوة */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-green-300">
                  ✅ Strengths:
                </h4>
                {responseData.data.evaluation.strengths.length > 0 ? (
                  <ul className="list-disc pl-5 text-start">
                    {responseData.data.evaluation.strengths.map(
                      (point, idx) => (
                        <li key={idx} className="text-gray-300">
                          {point}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic">
                    No strengths identified.
                  </p>
                )}
              </div>

              {/* نقاط الضعف */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-red-300">
                  ❌ Weaknesses:
                </h4>
                {responseData.data.evaluation.weaknesses.length > 0 ? (
                  <ul className="list-disc pl-5 text-start">
                    {responseData.data.evaluation.weaknesses.map(
                      (point, idx) => (
                        <li key={idx} className="text-gray-300">
                          {point}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic">
                    No weaknesses identified.
                  </p>
                )}
              </div>

              {/* التوصيات */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-yellow-300">
                  📌 Recommendations:
                </h4>
                {responseData.data.evaluation.recommendations.length > 0 ? (
                  <ul className="list-disc pl-5 text-start">
                    {responseData.data.evaluation.recommendations.map(
                      (point, idx) => (
                        <li key={idx} className="text-gray-300">
                          {point}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic">
                    No recommendations provided.
                  </p>
                )}
              </div>

              {/* التقييم العام */}
              <div className="p-4 bg-gray-800 rounded-lg mt-4">
                <h4 className="text-lg font-semibold text-blue-400">
                  📊 Overall Assessment:
                </h4>
                <p className="text-gray-300">
                  {responseData.data.evaluation.overall_assessment}
                </p>
              </div>
            </div>
          )}

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Interviews;
