import React from "react";
import { EMPLOYMENT_STATUS, YEARS_OF_EXPERIENCE, SUBJECT_AREAS, JOB_ROLES } from '../../lib/constants/countries';

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
        {/* Employment Status */}
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
              {EMPLOYMENT_STATUS.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
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

        {/* Years of Experience */}
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
              {YEARS_OF_EXPERIENCE.map((years) => (
                <option key={years.value} value={years.value}>
                  {years.label}
                </option>
              ))}
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

        {/* Work Sector */}
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
              {SUBJECT_AREAS.map((subject) => (
                <option key={subject.value} value={subject.value}>
                  {subject.label}
                </option>
              ))}
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

        {/* Job Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What specific job role do you currently hold or have held most
            recently in your area of expertise?*
          </label>
          <div className="relative">
            <select
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              {JOB_ROLES.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
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