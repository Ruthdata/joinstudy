import React from "react";
import { EDUCATION_LEVELS, SUBJECT_AREAS, GRADUATION_YEARS, STUDENT_STATUS } from '../../lib/constants/countries';

const Education = ({ formData, handleChange }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-2">Education</h2>
      <p className="text-gray-600 mb-8">
        Some of these details can&apos;t be changed later, so please select
        carefully.
      </p>

      <div className="space-y-6">
        {/* Highest Education Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Which of these is the highest level of education you have completed?*
          </label>
          <div className="relative">
            <select
              name="highestEducation"
              value={formData.highestEducation}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              {EDUCATION_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
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

        {/* Graduation Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What year did you complete your indicated highest level of education?*
          </label>
          <div className="relative">
            <select
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              {GRADUATION_YEARS.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
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

        {/* Subject Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What subject area does your highest level degree most closely relate to?*
          </label>
          <div className="relative">
            <select
              name="subjectArea"
              value={formData.subjectArea}
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

        {/* Student Status */}
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
              {STUDENT_STATUS.map((status) => (
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
      </div>
    </div>
  );
};

export default Education;