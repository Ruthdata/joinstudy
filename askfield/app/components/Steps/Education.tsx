import React from "react";

const Education = ({ formData, handleChange }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-2">Education</h2>
      <p className="text-gray-600 mb-8">
        Some of these details can&apos;t be changed later, so please select
        carefully.
      </p>

      <div className="space-y-6">
        {/*  */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Which of these is the highest level of education you have completed?
            *
          </label>
          <div className="relative">
            <select
              name="highestEducation"
              value={formData.highestEducation}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">Undergraduate degree (BA/BSc/other)</option>
              <option value="uk">Graduate degree (MA/MS/MSc/other)</option>
              <option value="ca">Doctoral degree (PhD/other)</option>
              <option value="de">Professional degree (JD/MBA/etc.)</option>
              <option value="fr">High school diploma or equivalent</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What year did you complete your indicated highest level of
            education?*
          </label>
          <div className="relative">
            <select
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">2020</option>
              <option value="uk">2019</option>
              <option value="ca">2018</option>
              <option value="au">2017</option>
              <option value="de">2016</option>
              <option value="fr">2015</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What subject area does your highest level degree most closely relate
            to?*{" "}
          </label>
          <div className="relative">
            <select
              name="subjectArea"
              value={formData.subjectArea}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="science">Science</option>
              <option value="mathematics">Mathematics</option>
              <option value="engineering">Engineering</option>
              <option value="business">Business</option>
              <option value="arts">Arts</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Are you a student?*
          </label>
          <div className="relative">
            <select
              name="isStudent"
              value={formData.isStudent}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="science">Yes</option>
              <option value="business">No</option>
              <option value="arts">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
