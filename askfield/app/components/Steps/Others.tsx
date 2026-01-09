import React from "react";
import { LINKEDIN_SHARE_OPTIONS, WORK_HOURS_PER_WEEK, COUNTRIES, CURRENCIES } from '../../lib/constants/countries';

const Others = ({ formData, handleChange }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-2">Additional questions</h2>
      <p className="text-gray-600 mb-8">
        Would you like to share your LinkedIn profile? (AskField won&apos;t share your
        LinkedIn with researchers. This helps us verify your skills and
        experience)
      </p>

      <div className="space-y-6">
        {/* LinkedIn Share Option */}
        <div>
          <div className="relative">
            <select
              name="linkedinShareOption"
              value={formData.linkedinShareOption}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Yes, I'd like to share</option>
              {LINKEDIN_SHARE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
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

        {/* LinkedIn Profile URL - Conditional */}
        {formData.linkedinShareOption === "yes" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share your LinkedIn profile (To find your LinkedIn profile link,
              go to Me &gt; View Profile &gt; Public profile & URL)*
            </label>
            <input
              type="url"
              name="linkedinUrl"
              value={formData.linkedinUrl || ""}
              onChange={handleChange}
              placeholder="www.linkedin.com/in/"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
        )}

        {/* Tell us anything else */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tell us anything else about yourself*
          </label>
          <textarea
            name="aboutYourself"
            value={formData.aboutYourself}
            onChange={handleChange}
            placeholder="Use this space to share anything that helps us get to know you better"
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
          />
        </div>

        {/* Work Hours Per Week */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many hours would you be willing to work on AskField on
            average per week?*
          </label>
          <div className="relative">
            <select
              name="workHoursPerWeek"
              value={formData.workHoursPerWeek}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select or search</option>
              {WORK_HOURS_PER_WEEK.map((hours) => (
                <option key={hours.value} value={hours.value}>
                  {hours.label}
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

        {/* Where did you spend most of your time before turning 18 */}
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
              {COUNTRIES.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
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

        {/* Currency and Hourly Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How much per hour would you like to earn on AskField?
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block text-xs text-gray-600 mb-1">
                Currency
              </label>
              <div className="relative">
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  {CURRENCIES.map((currency) => (
                    <option key={currency.value} value={currency.value}>
                      {currency.label}
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
            <div className="col-span-2">
              <label className="block text-xs text-gray-600 mb-1">
                How much per hour would you like to earn on AskField?
              </label>
              <input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="Enter amount"
                min="0"
                step="0.01"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;