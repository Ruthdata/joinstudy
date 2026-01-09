import React from 'react';

const ProfileStep = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Profile</h2>
      <p className="text-gray-600 mb-8">
        Please enter your legal name exactly as it appears on your ID issued by
        your current country of residence.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date of Birth<span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-4">
          <select
            name="birthMonth"
            value={formData.birthMonth}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <input
            type="number"
            name="birthDay"
            value={formData.birthDay}
            onChange={handleChange}
            placeholder="Day"
            min="1"
            max="31"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="number"
            name="birthYear"
            value={formData.birthYear}
            onChange={handleChange}
            placeholder="Year"
            min="1900"
            max="2024"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gender<span className="text-red-500">*</span>
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Select specific gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>

        {/* Conditional "Other" input field */}
        {formData.gender === 'other' && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Please specify<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="genderOther"
              value={formData.genderOther || ''}
              onChange={handleChange}
              placeholder="Enter your gender"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileStep;