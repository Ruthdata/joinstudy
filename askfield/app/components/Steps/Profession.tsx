import React from "react";

const Profession = ({ formData, handleChange }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-2">
        What&apos;s your professional background?
      </h2>
      <p className="text-gray-600 mb-8">
        Some of these details can&apos;t be changed later, so please select
        carefully.
      </p>

      <div className="space-y-6">
        {/*  */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What is your employment status?*
          </label>
          <div className="relative">
            <select
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">Employed</option>
              <option value="uk">Unemployed</option>
              <option value="ca">Self-employed</option>
              <option value="de">Retired</option>
              <option value="fr">Student</option>
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
            How many years of professional experience do you have related to
            your current role?*
          </label>
          <div className="relative">
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">0-1 years</option>
              <option value="uk">2-5 years</option>
              <option value="ca">6-10 years</option>
              <option value="au">11-20 years</option>
              <option value="de">21-30 years</option>
              <option value="fr">30+ years</option>
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
            Which of the following best describes the sector you primarily work
            in?*
          </label>
          <div className="relative">
            <select
              name="workSector"
              value={formData.workSector}
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
            What specific job role do you currently hold or have held most
            recently in your area of expertise?*{" "}
          </label>
          <div className="relative">
            <select
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="science">Junior</option>
              <option value="business">Senior</option>
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

export default Profession;
