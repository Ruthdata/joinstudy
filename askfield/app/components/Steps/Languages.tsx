import React from 'react';

const Languages = ({ formData, handleChange }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-2">Languages</h2>
      <p className="text-gray-600 mb-8">
        Some of these details can&apos;t be changed later, so please select carefully.
      </p>

      <div className="space-y-6">
        {/* Country of Residence */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What is your first language?*
          </label>
          <div className="relative">
            <select
              name="firstLanguage"
              value={formData.firstLanguage}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">English</option>
              <option value="uk">Spanish</option>
              <option value="ca">Chinese</option>
              <option value="de">German</option>
              <option value="fr">French</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Which of the following language are you fluent in*
          </label>
          <div className="relative">
            <select
              name="fluentLanguages"
              value={formData.fluentLanguages}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">English</option>
              <option value="uk">Spanish</option>
              <option value="ca">Chinese</option>
              <option value="au">Japanese</option>
              <option value="de">German</option>
              <option value="fr">French</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Which variation(s) or regional dialect(s) do you speak fluently, if any?*
          </label>
          <div className="relative">
            <select
              name="dialects"
              value={formData.dialects}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="urban">Urban</option>
              <option value="suburban">Suburban</option>
              <option value="rural">Rural</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Languages;