import React from 'react';

const Demographics = ({ formData, handleChange }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-2">Demographics</h2>
      <p className="text-gray-600 mb-8">
        Some of these details can&apos;t be changed later, so please select carefully.
      </p>

      <div className="space-y-6">
        {/* Country of Residence */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country of Residence*
          </label>
          <div className="relative">
            <select
              name="countryOfResidence"
              value={formData.countryOfResidence}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Country of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country of Birth*
          </label>
          <div className="relative">
            <select
              name="countryOfBirth"
              value={formData.countryOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Place of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Place of Birth*
          </label>
          <div className="relative">
            <select
              name="placeOfBirth"
              value={formData.placeOfBirth}
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

        {/* Where did you spend most of your time before turning 18? */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Where did you spend most of your time before turning 18?*
          </label>
          <div className="relative">
            <select
              name="childhoodLocation"
              value={formData.childhoodLocation}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Ethnic Group */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What ethnic group do you belong to?*
          </label>
          <div className="relative">
            <select
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              <option value="asian">Asian</option>
              <option value="black">Black or African American</option>
              <option value="hispanic">Hispanic or Latino</option>
              <option value="white">White or Caucasian</option>
              <option value="native">Native American or Alaska Native</option>
              <option value="pacific">Native Hawaiian or Pacific Islander</option>
              <option value="mixed">Two or more races</option>
              <option value="other">Other</option>
              <option value="prefer-not">Prefer not to say</option>
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

export default Demographics;